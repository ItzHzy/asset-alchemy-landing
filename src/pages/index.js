import { StaticImage } from "gatsby-plugin-image";
import React from "react";

const IndexPage = () => {
	return (
		<>
			<header className='text-gray-400 bg-gray-900 body-font'>
				<div className='container flex flex-col flex-wrap items-center p-5 mx-auto md:flex-row'>
					<StaticImage
						src='https://img.assetalchemy.io/LOGO_COLOR_NO_BACKGROUND.png'
						alt='Logo'
						width={250}
					/>
					<nav className='flex flex-wrap items-center justify-center text-base md:ml-auto md:mr-auto'>
						{/* <a className='mr-5 hover:text-white'>First Link</a>
					<a className='mr-5 hover:text-white'>Second Link</a>
					<a className='mr-5 hover:text-white'>Third Link</a>
					<a className='mr-5 hover:text-white'>Fourth Link</a> */}
					</nav>
					<button className='inline-flex items-center px-3 py-1 mt-4 text-base bg-gray-800 border-0 rounded focus:outline-none hover:bg-gray-700 md:mt-0'>
						Contact Us
						<svg
							fill='none'
							stroke='currentColor'
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth='2'
							className='w-4 h-4 ml-1'
							viewBox='0 0 24 24'
						>
							<path d='M5 12h14M12 5l7 7-7 7'></path>
						</svg>
					</button>
				</div>
			</header>

			<main>
				<section className='text-gray-400 bg-gray-900 body-font'>
					<div className='container flex flex-col items-center justify-center px-5 py-24 mx-auto'>
						<div className='w-full text-center lg:w-2/3'>
							<h1 className='mb-4 text-3xl font-medium text-white title-font sm:text-4xl'>
								Microdosing synth tattooed vexillologist
							</h1>
							<p className='mb-8 leading-relaxed'>
								Meggings kinfolk echo park stumptown DIY, kale chips beard
								jianbing tousled. Chambray dreamcatcher trust fund, kitsch vice
								godard disrupt ramps hexagon mustache umami snackwave tilde
								chillwave ugh. Pour-over meditation PBR&amp;B pickled ennui
								celiac mlkshk freegan photo booth af fingerstache pitchfork.
							</p>
							<div className='flex justify-center'>
								<button className='inline-flex px-6 py-2 text-lg text-white bg-indigo-500 border-0 rounded focus:outline-none hover:bg-indigo-600'>
									Sign Up
								</button>
							</div>
						</div>
					</div>
				</section>

				<section class='text-gray-400 bg-gray-900 body-font'>
					<div class='container mx-auto flex px-5 py-24 md:flex-row flex-col items-center'>
						<div class='lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10'>
							<img
								class='object-cover object-center rounded'
								alt='hero'
								src='https://dummyimage.com/720x600'
							/>
						</div>
						<div class='lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center'>
							<h1 class='title-font sm:text-4xl text-3xl mb-4 font-medium text-white'>
								Before they sold out readymade gluten
							</h1>
							<p class='mb-8 leading-relaxed'>
								Copper mug try-hard pitchfork pour-over freegan heirloom neutra
								air plant cold-pressed tacos poke beard tote bag. Heirloom echo
								park mlkshk tote bag selvage hot chicken authentic tumeric
								truffaut hexagon try-hard chambray.
							</p>
							<div class='flex justify-center'>
								{/* <button class='inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg'>
									Sign Up
								</button> */}
							</div>
						</div>
					</div>
				</section>

				<section class='text-gray-400 bg-gray-900 body-font'>
					<div class='container mx-auto flex px-5 py-24 md:flex-row-reverse flex-col items-center'>
						<div class='lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10'>
							<img
								class='object-cover object-center rounded'
								alt='hero'
								src='https://dummyimage.com/720x600'
							/>
						</div>
						<div class='lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center'>
							<h1 class='title-font sm:text-4xl text-3xl mb-4 font-medium text-white'>
								Before they sold out readymade gluten
							</h1>
							<p class='mb-8 leading-relaxed'>
								Copper mug try-hard pitchfork pour-over freegan heirloom neutra
								air plant cold-pressed tacos poke beard tote bag. Heirloom echo
								park mlkshk tote bag selvage hot chicken authentic tumeric
								truffaut hexagon try-hard chambray.
							</p>
							<div class='flex justify-center'>
								{/* <button class='inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg'>
									Sign Up
								</button> */}
							</div>
						</div>
					</div>
				</section>

				<section class='text-gray-400 bg-gray-900 body-font'>
					<div class='container mx-auto flex px-5 py-24 md:flex-row flex-col items-center'>
						<div class='lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10'>
							<img
								class='object-cover object-center rounded'
								alt='hero'
								src='https://dummyimage.com/720x600'
							/>
						</div>
						<div class='lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center'>
							<h1 class='title-font sm:text-4xl text-3xl mb-4 font-medium text-white'>
								Before they sold out readymade gluten
							</h1>
							<p class='mb-8 leading-relaxed'>
								Copper mug try-hard pitchfork pour-over freegan heirloom neutra
								air plant cold-pressed tacos poke beard tote bag. Heirloom echo
								park mlkshk tote bag selvage hot chicken authentic tumeric
								truffaut hexagon try-hard chambray.
							</p>
							<div class='flex justify-center'>
								{/* <button class='inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg'>
									Sign Up
								</button> */}
							</div>
						</div>
					</div>
				</section>
			</main>

			<section class='text-gray-400 bg-gray-900 body-font'>
				<div class='container px-5 py-24 mx-auto'>
					<div class='text-center mb-20'>
						<h1 class='sm:text-3xl text-2xl font-medium title-font text-white mb-4'>
							Raw Denim Heirloom Man Braid
						</h1>
						<p class='text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-400 text-opacity-80'>
							Blue bottle crucifix vinyl post-ironic four dollar toast vegan
							taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh
							mi pug.
						</p>
						<div class='flex mt-6 justify-center'>
							<div class='w-16 h-1 rounded-full bg-indigo-500 inline-flex'></div>
						</div>
					</div>
					<div class='flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6'>
						<div class='p-4 md:w-1/3 flex flex-col text-center items-center'>
							<div class='w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-5 flex-shrink-0'>
								<svg
									fill='none'
									stroke='currentColor'
									stroke-linecap='round'
									stroke-linejoin='round'
									stroke-width='2'
									class='w-10 h-10'
									viewBox='0 0 24 24'
								>
									<path d='M22 12h-4l-3 9L9 3l-3 9H2'></path>
								</svg>
							</div>
							<div class='flex-grow'>
								<h2 class='text-white text-lg title-font font-medium mb-3'>
									Shooting Stars
								</h2>
								<p class='leading-relaxed text-base'>
									Blue bottle crucifix vinyl post-ironic four dollar toast vegan
									taxidermy. Gastropub indxgo juice poutine, ramps microdosing
									banh mi pug VHS try-hard.
								</p>
								<a class='mt-3 text-indigo-400 inline-flex items-center'>
									Learn More
									<svg
										fill='none'
										stroke='currentColor'
										stroke-linecap='round'
										stroke-linejoin='round'
										stroke-width='2'
										class='w-4 h-4 ml-2'
										viewBox='0 0 24 24'
									>
										<path d='M5 12h14M12 5l7 7-7 7'></path>
									</svg>
								</a>
							</div>
						</div>
						<div class='p-4 md:w-1/3 flex flex-col text-center items-center'>
							<div class='w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-5 flex-shrink-0'>
								<svg
									fill='none'
									stroke='currentColor'
									stroke-linecap='round'
									stroke-linejoin='round'
									stroke-width='2'
									class='w-10 h-10'
									viewBox='0 0 24 24'
								>
									<circle cx='6' cy='6' r='3'></circle>
									<circle cx='6' cy='18' r='3'></circle>
									<path d='M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12'></path>
								</svg>
							</div>
							<div class='flex-grow'>
								<h2 class='text-white text-lg title-font font-medium mb-3'>
									The Catalyzer
								</h2>
								<p class='leading-relaxed text-base'>
									Blue bottle crucifix vinyl post-ironic four dollar toast vegan
									taxidermy. Gastropub indxgo juice poutine, ramps microdosing
									banh mi pug VHS try-hard.
								</p>
								<a class='mt-3 text-indigo-400 inline-flex items-center'>
									Learn More
									<svg
										fill='none'
										stroke='currentColor'
										stroke-linecap='round'
										stroke-linejoin='round'
										stroke-width='2'
										class='w-4 h-4 ml-2'
										viewBox='0 0 24 24'
									>
										<path d='M5 12h14M12 5l7 7-7 7'></path>
									</svg>
								</a>
							</div>
						</div>
						<div class='p-4 md:w-1/3 flex flex-col text-center items-center'>
							<div class='w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-5 flex-shrink-0'>
								<svg
									fill='none'
									stroke='currentColor'
									stroke-linecap='round'
									stroke-linejoin='round'
									stroke-width='2'
									class='w-10 h-10'
									viewBox='0 0 24 24'
								>
									<path d='M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2'></path>
									<circle cx='12' cy='7' r='4'></circle>
								</svg>
							</div>
							<div class='flex-grow'>
								<h2 class='text-white text-lg title-font font-medium mb-3'>
									Neptune
								</h2>
								<p class='leading-relaxed text-base'>
									Blue bottle crucifix vinyl post-ironic four dollar toast vegan
									taxidermy. Gastropub indxgo juice poutine, ramps microdosing
									banh mi pug VHS try-hard.
								</p>
								<a class='mt-3 text-indigo-400 inline-flex items-center'>
									Learn More
									<svg
										fill='none'
										stroke='currentColor'
										stroke-linecap='round'
										stroke-linejoin='round'
										stroke-width='2'
										class='w-4 h-4 ml-2'
										viewBox='0 0 24 24'
									>
										<path d='M5 12h14M12 5l7 7-7 7'></path>
									</svg>
								</a>
							</div>
						</div>
					</div>
					<button class='flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg'>
						Button
					</button>
				</div>
			</section>

			<footer className='text-gray-400 bg-gray-900 body-font'>
				<div className='container flex flex-col items-center px-5 py-8 mx-auto sm:flex-row'>
					<a className='flex items-center justify-center font-medium text-white title-font md:justify-start'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							stroke='currentColor'
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth='2'
							className='w-10 h-10 p-2 text-white bg-indigo-500 rounded-full'
							viewBox='0 0 24 24'
						>
							<path d='M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5'></path>
						</svg>
						<span className='ml-3 text-xl'>Tailblocks</span>
					</a>
					<p className='mt-4 text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0'>
						© 2020 Tailblocks —
						<a
							href='https://twitter.com/knyttneve'
							className='ml-1 text-gray-500'
							target='_blank'
							rel='noopener noreferrer'
						>
							@knyttneve
						</a>
					</p>
					<span className='inline-flex justify-center mt-4 sm:ml-auto sm:mt-0 sm:justify-start'>
						<a className='text-gray-400'>
							<svg
								fill='currentColor'
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								className='w-5 h-5'
								viewBox='0 0 24 24'
							>
								<path d='M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z'></path>
							</svg>
						</a>
						<a className='ml-3 text-gray-400'>
							<svg
								fill='currentColor'
								stroke-linecap='round'
								stroke-linejoin='round'
								stroke-width='2'
								className='w-5 h-5'
								viewBox='0 0 24 24'
							>
								<path d='M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z'></path>
							</svg>
						</a>
						<a className='ml-3 text-gray-400'>
							<svg
								fill='none'
								stroke='currentColor'
								stroke-linecap='round'
								stroke-linejoin='round'
								stroke-width='2'
								className='w-5 h-5'
								viewBox='0 0 24 24'
							>
								<rect width='20' height='20' x='2' y='2' rx='5' ry='5'></rect>
								<path d='M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01'></path>
							</svg>
						</a>
						<a className='ml-3 text-gray-400'>
							<svg
								fill='currentColor'
								stroke='currentColor'
								stroke-linecap='round'
								stroke-linejoin='round'
								stroke-width='0'
								className='w-5 h-5'
								viewBox='0 0 24 24'
							>
								<path
									stroke='none'
									d='M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z'
								></path>
								<circle cx='4' cy='4' r='2' stroke='none'></circle>
							</svg>
						</a>
					</span>
				</div>
			</footer>
		</>
	);
};

export default IndexPage;
