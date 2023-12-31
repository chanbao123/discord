// import { useState } from 'react';
import Discord from './Page/Shop/discord';
import Spotify from './Page/Shop/Spotify';
import Exitlag from './Page/Shop/exitlag';
import Discordbot from './Page/Shop/discordbot';
import discordVideo from './image/discord.mp4';
import './pageshop.css';

function Pageshop() {
	// const [action, setAction] = useState();
	return (
		<div className="relative w-full h-screen">
			<video
				muted
				autoPlay={true}
				loop
				className="w-full h-full object-cover transform">
				<source
					src={discordVideo}
					type="video/mp4"
				/>
			</video>
			<div className="absolute top-0 w-full flex justify-between items-center p-5 gap-6">
				<div className="">
					<h1>LOGO_TECHNOLOGY</h1>
				</div>
				<div className="w-full flex flex-row justify-end gap-8">
					<a
						href=""
						className="hover:text-white">
						HOME
					</a>
					<a
						href=""
						className="hover:text-white">
						Option3
					</a>
					<a
						href=""
						className="hover:text-white">
						PageShop
					</a>
					<a href="">User_Name</a>
				</div>
				<div></div>
			</div>
			{/* <div className="flex flex-row h-screen w-full gap-6">
					<div className="justify-center bg-blue-700 w-60 h-60  text-gray-300 mt-6 border-1 rounded-lg pl-5 pt-6 space-y-4 ml-3">
						<div>
							<p
								className={
									action === 'discord'
										? 'hover:text-white cursor-pointer text-white'
										: 'hover:text-white cursor-pointer'
								}
								onClick={() => setAction('discord')}>
								Discord Nitro
							</p>
						</div>
						<div>
							<p
								className={
									action === 'spotify'
										? 'hover:text-white cursor-pointer text-white'
										: 'hover:text-white cursor-pointer'
								}
								onClick={() => setAction('spotify')}>
								Spotify
							</p>
						</div>
						<div>
							<p
								className={
									action === 'exitlag'
										? 'hover:text-white cursor-pointer text-white'
										: 'hover:text-white cursor-pointer'
								}
								onClick={() => setAction('exitlag')}>
								ExitLag
							</p>
						</div>
						<div>
							<a
								className={
									action === 'discordbot'
										? 'hover:text-white cursor-pointer text-white'
										: 'hover:text-white cursor-pointer'
								}
								onClick={() => setAction('discordbot')}>
								Discord Bot
							</a>
						</div>
					</div>
					{action === undefined && (
						<div className="grid-rows-2 h-full w-full">
							<div className="p-6  gap-3 flex flex-row">
								<div className="">
									<img
										src="./src/DCPS.jpg"
										alt=""
										className="object-cover h-80"
									/>
								</div>
								<div>
									<img
										src="./src/SPPS2.jpg"
										alt=""
										className="object-cover h-80"
									/>
								</div>
							</div>
							<div className="flex flex-row gap-3 pl-6">
								<div>
									<img
										src="./src/EXPS1.jpg"
										alt=""
										className="object-cover h-80"
									/>
								</div>
								<div>
									<img
										src="./src/DCBPS.jpg"
										alt=""
										className="object-cover h-80"
									/>
								</div>
							</div>
						</div>
					)}

					{action === 'spotify' ? (
						<Spotify />
					) : action === 'exitlag' ? (
						<Exitlag />
					) : action === 'discordbot' ? (
						<Discordbot />
					) : action === 'discord' ? (
						<Discord />
					) : null}
				</div> */}
			{/* <div>
					<hr />
					<footer className="text-center text-black bg-gray-400">
						<p>
							Copyright © 2022 Technology. All Rights Reserved. Design by BTLNL.
						</p>
					</footer>
				</div> */}
		</div>
	);
}

export default Pageshop;
