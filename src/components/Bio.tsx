import { useTranslation } from 'react-i18next';
import Instagram from "../assets/instagram.svg"
import Linkedin from "../assets/linkedin.svg"
import Github from "../assets/github.svg"

const Bio = () => {
	const { t } = useTranslation();

	return (
		<div className="relative flex mt-12">
			<section className="flex col-span-2 gap-12 sm:mx-10 mx-4 flex-col font-lexend sm:w-1/2 my-12 leading-8 justify-end">
				<div className="xl:text-6xl text-white lg:text-3xl text-lg font-extrabold font-lexend">
					<h1 className="">{t("Title.part1")}</h1>
					<p>{t("Title.part2")}</p>
				</div>
				<p className='xl:text-lg text-xs'>
					{t("Title.description")}
				</p>
				<div className='flex xl:flex-row flex-col gap-4 items-center justify-evenly'>
					<ul className='flex gap-6 z-20'>
						<li className='instaBtn h-12 outline-2 outline-neutral-800 hover:outline-neutral-200 bg-instagram'>
							<a className='flex focus:ring-4 focus:ring-secondary ring-offset-2 focus:outline-none p-1 w-full h-full' href="https://www.instagram.com/revicmanne/" aria-label='Visit my Instagram' target="_blank" rel="noopener noreferrer">
								<img className='h-full w-full' src={Instagram} alt="" />
							</a>
						</li>
						<li className='linkedBtn h-12 outline-2 outline-neutral-800 hover:outline-neutral-200 bg-linkedin'>
							<a className='flex focus:ring-4 focus:ring-secondary ring-offset-2 focus:outline-none p-1 w-full h-full' href="https://www.linkedin.com/in/pablo-heidenreich/" aria-label='Visit my Linkedin' target="_blank" rel="noopener noreferrer">
								<img className='h-full w-full' src={Linkedin} alt="" />
							</a>
						</li>
						<li className='githubBtn h-12 outline-2 outline-neutral-800 hover:outline-neutral-200 bg-github'>
							<a className='flex focus:ring-4 focus:ring-secondary ring-offset-2 focus:outline-none p-1 w-full h-full' href="https://github.com/heidenreich20" aria-label='Visit my Github' target="_blank" rel="noopener noreferrer">
								<img className='h-full w-full' src={Github} alt="" />
							</a>
						</li>
					</ul>
					<a href='#contactMe' className='cta z-20 outline-3 focus:ring-2 focus:ring-secondary ring-offset-2 outline-neutral-800 text-neutral-800 hover:text-neutral-50 hover:cursor-pointer hover:bg-secondary xl:text-base text-sm font-bold px-10 py-3 bg-primary'>{t("Contact")}</a>
				</div>
			</section>
			<img
				loading='lazy'
				decoding="async"
				className='illustration h-fit mt-auto sm:w-1/2 w-full sm:static absolute bottom-0 sm:opacity-100 opacity-25 z-10'
				src="https://res.cloudinary.com/dvgntf60n/image/upload/f_auto,q_auto/portfolio_heidendev"
				srcSet="
					https://res.cloudinary.com/dvgntf60n/image/upload/f_auto,q_auto:low,w_300/portfolio_heidendev 400w,
					https://res.cloudinary.com/dvgntf60n/image/upload/f_auto,q_auto:low,w_500/portfolio_heidendev 800w,
					https://res.cloudinary.com/dvgntf60n/image/upload/f_auto,q_auto:low,w_700/portfolio_heidendev 1200w"
				sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
				alt="image of me"
			/>
		</div>
	)
}

export default Bio