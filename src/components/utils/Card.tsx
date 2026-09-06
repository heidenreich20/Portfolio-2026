interface CardProps {
  projectLink?: string | null;
  githubLink?: string | null;
  serverLink?: string | null;
  projectName: string;
  projectTitle: string;
  projectDescription: string;
  status?: string;
  projectImage: {
    src: string;
    srcSet?: string;
    sizes?: string;
  };
}

const Card = ({ projectTitle, projectDescription, projectImage, projectLink, projectName, githubLink, serverLink, status }: CardProps) => {
  return (
    <article className="h-full flex flex-col gap-4 border-t border-divider pt-6">
      <figure className="relative">
        <img
          loading="lazy"
          className="h-56 w-full object-cover object-top"
          src={projectImage.src}
          srcSet={projectImage.srcSet}
          alt={`${projectName} preview`}
        />
        <div className="absolute bottom-3 left-3 bg-bg/90 text-primary font-mono text-[11px] px-2 py-1 border border-divider">
          {status || "WIP"}
        </div>
      </figure>

      <div className="flex flex-col gap-2 flex-grow">
        <h3 className="font-fraunces font-semibold text-xl sm:text-2xl text-text">
          {projectTitle}
        </h3>
        <p className="text-text/70 text-sm leading-relaxed">
          {projectDescription}
        </p>
      </div>

      <div className="flex gap-6 mt-auto pt-4 font-mono text-xs">
        {githubLink ? (
          
           <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text/70 text-lg hover:text-primary underline decoration-divider underline-offset-4"
          >
            Code
          </a>
        ) : null}
        {serverLink ? (
          <a
            href={serverLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text/70 text-lg hover:text-primary underline decoration-divider underline-offset-4"
          >
            Server
          </a>
        ) : null}
        {projectLink ? (
          <a
            href={projectLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary text-lg hover:text-secondary underline decoration-divider underline-offset-4"
          >
            Live
          </a>
        ) : (
          <span className="text-text/40 text-lg cursor-not-allowed">Offline</span>
        )}
      </div>
    </article>
  );
};

export default Card;