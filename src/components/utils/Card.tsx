interface CardProps {
  projectLink?: string | null;
  githubLink?: string | null;
  serverLink?: string | null;
  projectName: string;
  projectTitle: string;
  projectDescription: string;
  projectImage: {
    src: string;
    srcSet?: string;
    sizes?: string;
  };
}

const Card = ({ projectTitle, projectDescription, projectImage, projectLink, projectName, githubLink, serverLink }: CardProps) => {
  return (
    <article className="project-card h-full bg-primary p-1 border-4 border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-transform hover:shadow-[14px_14px_0px_0px_rgba(0,0,0,1)]">
      <div className="bg-[#1e1e1e] h-full p-4 flex flex-col gap-4 border-2 border-black">
        <figure className="relative group">
          <img
            loading="lazy"
            className="thumbnail bg-[#121212] p-2 h-64 w-full object-cover object-top border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            src={projectImage.src}
            srcSet={projectImage.srcSet}
            alt={`${projectName} preview`}
          />
          <div className="absolute top-4 right-4 bg-secondary text-black text-[10px] font-black px-2 py-1 border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] uppercase">
            WIP
          </div>
        </figure>
        
        <div className="flex flex-col gap-2 flex-grow">
          <h3 className="font-lexend font-black text-xl sm:text-2xl text-primary uppercase italic tracking-tighter">
            {projectTitle}
          </h3>
          <p className="text-white text-sm leading-relaxed opacity-90">
            {projectDescription}
          </p>
        </div>
        <div className="flex flex-wrap gap-4 mt-auto pt-4">
          {githubLink ? (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-3 px-2 bg-[#2b3137] text-white font-bold border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-[2px] active:translate-y-[2px] transition-all min-w-[80px]"
            >
              <span>CODE</span>
            </a>
          ) : null}
          {serverLink ? (
            <a
              href={serverLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-3 px-2 bg-white text-black font-bold border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-[2px] active:translate-y-[2px] transition-all min-w-[80px]"
            >
              <span>SERVER</span>
            </a>
          ) : null}
          {projectLink ? (
            <a
              href={projectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-3 px-2 bg-secondary text-black font-black border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-[2px] active:translate-y-[2px] transition-all min-w-[80px]"
            >
              <span>LIVE</span>
            </a>
          ) : (
            <div className="flex-1 flex items-center justify-center py-3 px-2 bg-gray-600 text-gray-400 font-bold border-2 border-black cursor-not-allowed opacity-50 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] min-w-[80px]">
              OFFLINE
            </div>
          )}
        </div>
      </div>
    </article>
  );
};

export default Card;