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
    mt-1 block w-full px-4 py-3 
    bg-[#121212] text-white
    border-2 ${error ? "border-red-500" : "border-primary"} 
    shadow-[inset_4px_4px_0px_0px_rgba(0,0,0,1)]
    focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent
    transition-all duration-200
  `;

  return (
    <section className="my-24 px-4">
      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto p-1 bg-primary border-4 border-black shadow-[15px_15px_0px_0px_rgba(0,0,0,1)]"
      >
        <div className="bg-[#1e1e1e] p-6 sm:p-10 border-2 border-black">
          <h2 className="font-lexend text-3xl sm:text-5xl font-black mb-8 text-primary uppercase tracking-tighter italic">
            {t("ContactMe")}
          </h2>

          <div className="mb-6">
            <label htmlFor="name" className="font-lexend font-bold text-secondary uppercase text-sm tracking-widest">
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
            {errors.name && <p className="text-red-500 text-xs mt-2 font-bold uppercase">{errors.name}</p>}
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="font-lexend font-bold text-secondary uppercase text-sm tracking-widest">
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
            {errors.email && <p className="text-red-500 text-xs mt-2 font-bold uppercase">{errors.email}</p>}
          </div>

          <div className="mb-8">
            <label htmlFor="message" className="font-lexend font-bold text-secondary uppercase text-sm tracking-widest">
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
            {errors.message && <p className="text-red-500 text-xs mt-2 font-bold uppercase">{errors.message}</p>}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="cta group relative flex items-center justify-center w-full sm:w-auto px-10 py-4 bg-primary text-black font-black uppercase tracking-tighter text-xl border-2 border-black hover:translate-x-[-2px] hover:translate-y-[-2px]"
          >
            {isSubmitting ? t("Sending") : t("Send")}
          </button>

          {submitMessage && (
            <div className={`mt-6 p-3 border-2 border-black font-bold uppercase text-center ${submitMessage.includes('Error') ? 'bg-red-400' : 'bg-green-400'}`}>
              {submitMessage}
            </div>
          )}
        </div>
      </form>
    </section>
  );
};

export default ContactForm;