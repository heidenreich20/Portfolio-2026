import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const { t } = useTranslation();
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitMessage, setSubmitMessage] = useState<string>("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = t("NameRequired");
    if (!formData.email.trim()) {
      newErrors.email = t("EmailRequired");
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = t("EmailInvalid");
    }
    if (!formData.message.trim()) newErrors.message = t("MessageRequired");
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      try {
        const serviceId = import.meta.env.VITE_SERVICE_ID;
        const templateId = import.meta.env.VITE_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_PUBLIC_KEY;

        if (!serviceId || !templateId || !publicKey) throw new Error("Missing Env Vars");

        await emailjs.send(serviceId, templateId, {
          user_name: formData.name,
          user_email: formData.email,
          message: formData.message,
          reply_to: formData.email,
        }, publicKey);

        setSubmitMessage(t("SuccessMsg"));
        setFormData({ name: "", email: "", message: "" });
      } catch (error) {
        console.error("EmailJS Error details:", error);
        setSubmitMessage(t("ErrorMsg",));
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  // Clases comunes para los inputs
  const inputClasses = (error?: string) => `
    mt-1 block w-full px-1 py-2 
    bg-transparent text-text
    border-b ${error ? "border-red-700" : "border-divider"} 
    focus:outline-none focus:border-primary
    transition-colors duration-200
  `;

  return (
    <section className="my-24">
      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto border-t border-divider p-10"
      >
        <h2 className="font-fraunces text-3xl sm:text-5xl font-semibold mb-10 text-text">
          {t("ContactMe")}
        </h2>

        <div className="mb-8">
          <label htmlFor="name" className="font-mono text-xs text-text/60">
            {t("Name")}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={inputClasses(errors.name)}
          />
          {errors.name && <p className="text-red-700 text-xs mt-2">{errors.name}</p>}
        </div>

        <div className="mb-8">
          <label htmlFor="email" className="font-mono text-xs text-text/60">
            {t("Email")}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={inputClasses(errors.email)}
          />
          {errors.email && <p className="text-red-700 text-xs mt-2">{errors.email}</p>}
        </div>

        <div className="mb-10">
          <label htmlFor="message" className="font-mono text-xs text-text/60">
            {t("Message")}
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className={inputClasses(errors.message)}
          />
          {errors.message && <p className="text-red-700 text-xs mt-2">{errors.message}</p>}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="px-8 py-3 bg-primary text-bg font-medium hover:bg-secondary transition-colors disabled:opacity-60"
        >
          {isSubmitting ? t("Sending") : t("Send")}
        </button>

        {submitMessage && (
          <div className={`mt-6 pl-3 border-l-2 text-sm ${submitMessage.includes('Error') ? 'border-red-700 text-red-700' : 'border-primary text-text'}`}>
            {submitMessage}
          </div>
        )}
      </form>
    </section>
  );
};

export default ContactForm;