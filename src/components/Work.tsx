import Card from "./utils/Card";
import projects from "../../data/projects.json";
import { useTranslation } from "react-i18next";
import DividerTop from "./utils/DividerTop";
import DividerBottom from "./utils/DividerBottom";

interface Project {
  projectLink?: string | null;
  githubLink?: string | null;
  projectName: string;
  projectTitle: string;
  projectDescription: string;
  serverLink?: string | null;
  status?: string;
  projectImage: {
    src: string;
    srcSet?: string;
    sizes?: string;
  };
}

const Work = () => {
  const { t } = useTranslation();

  return (
    <div id="projects" className="relative flex flex-col gap-12 px-4 xl:px-12 sm:pt-42 pt-20">
      <DividerTop />
      <h2 className="font-lexend text-xl sm:text-4xl xl:text-6xl font-extrabold text-white">{t("Latest Work")}</h2>
      <section className="projects flex pb-50 z-10">
        {projects.map((project: Project, index: number) => (
          <Card
            key={index}
            projectName={project.projectName}
            projectTitle={t(project.projectTitle)}
            projectDescription={t(project.projectName)}
            projectLink={project.projectLink}
            projectImage={project.projectImage}
            githubLink={project.githubLink}
            serverLink={project.serverLink}
            status={project.status}
          />
        ))}
      </section>
      <DividerBottom />
    </div>
  );
};

export default Work;
