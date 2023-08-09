import { CheckIcon, MegaphoneIcon } from '@heroicons/react/24/outline';

function Discord() {
	return (
		<div className="flex flex-row gap-6 ">
			<div className="m-10 w-60 h-auto flex flex-col place-items-center relative text-black">
				<div className="bg-[#1B4D3E] w-60 h-32 rounded-md text-white ">
					<div className="flex flex-col gap-2 m-3">
						<div>
							<p>Basic Package</p>
						</div>
						<div className="">
							<span className="font-bold text-2xl">$450</span>/
							<span>month</span>
						</div>
					</div>
				</div>
				<div className="bg-gray-100 w-52 rounded-md absolute top-24 ">
					<div className="mt-5 gap-6 w-full items-center flex justify-center p-4">
						<div className="justify-center flex flex-col gap-3 w-full">
							<div className="flex flex-row items-center gap-1">
								<CheckIcon className="h-4 w-4 text-green-500" />
								<p>Design</p>
							</div>
							<div className="flex flex-row items-center gap-1">
								<CheckIcon className="h-4 w-4 text-green-500" />
								<p>Graphic Designing</p>
							</div>
							<div className="flex flex-row items-center gap-1">
								<CheckIcon className="h-4 w-4 text-green-500" />
								<p>Web Development</p>
							</div>
							<div className="flex flex-row items-center gap-1">
								<CheckIcon className="h-4 w-4 text-green-500" />
								<p>Business Consulting</p>
							</div>
							<div className="items-center flex justify-center">
								<button className="bg-transparent border-[2px] border-[#1B4D3E] px-3 rounded-xl py-1  font-medium">
									Select Now
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className="bg-white w-10 h-10 rounded-md absolute top-20 left-8 justify-center flex items-center">
					<MegaphoneIcon className="w-7 h-7 text-sky-500" />
					<p></p>
				</div>
			</div>
			<div className="m-10 w-60 h-auto flex flex-col place-items-center relative text-black">
				<div className="bg-[#1B4D3E] w-60 h-32 rounded-md text-white ">
					<div className="flex flex-col gap-2 m-3">
						<div>
							<p>Pro Package</p>
						</div>
						<div className="">
							<span className="font-bold text-2xl">$550</span>/
							<span>month</span>
						</div>
					</div>
				</div>
				<div className="bg-gray-100 w-52 rounded-md absolute top-24 ">
					<div className="mt-5 gap-6 w-full items-center flex justify-center p-4">
						<div className="justify-center flex flex-col gap-3 w-full">
							<div className="flex flex-row items-center gap-1">
								<CheckIcon className="h-4 w-4 text-green-500" />
								<p>Design</p>
							</div>
							<div className="flex flex-row items-center gap-1">
								<CheckIcon className="h-4 w-4 text-green-500" />
								<p>Graphic Designing</p>
							</div>
							<div className="flex flex-row items-center gap-1">
								<CheckIcon className="h-4 w-4 text-green-500" />
								<p>Web Development</p>
							</div>
							<div className="flex flex-row items-center gap-1">
								<CheckIcon className="h-4 w-4 text-green-500" />
								<p>Business Consulting</p>
							</div>
							<div className="items-center flex justify-center">
								<button className="bg-transparent border-[2px] border-[#1B4D3E] px-3 rounded-xl py-1  font-medium">
									Select Now
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className="bg-white w-10 h-10 rounded-md absolute top-20 left-8 justify-center flex items-center">
					<MegaphoneIcon className="w-7 h-7 text-sky-500" />
					<p></p>
				</div>
			</div>
			<div className="m-10 w-60 h-auto flex flex-col place-items-center relative text-black">
				<div className="bg-[#1B4D3E] w-60 h-32 rounded-md text-white ">
					<div className="flex flex-col gap-2 m-3">
						<div>
							<p>Medium Package</p>
						</div>
						<div className="">
							<span className="font-bold text-2xl">$750</span>/
							<span>month</span>
						</div>
					</div>
				</div>
				<div className="bg-gray-100 w-52 rounded-md absolute top-24 ">
					<div className="mt-5 gap-6 w-full items-center flex justify-center p-4">
						<div className="justify-center flex flex-col gap-3 w-full">
							<div className="flex flex-row items-center gap-1">
								<CheckIcon className="h-4 w-4 text-green-500" />
								<p>Design</p>
							</div>
							<div className="flex flex-row items-center gap-1">
								<CheckIcon className="h-4 w-4 text-green-500" />
								<p>Graphic Designing</p>
							</div>
							<div className="flex flex-row items-center gap-1">
								<CheckIcon className="h-4 w-4 text-green-500" />
								<p>Web Development</p>
							</div>
							<div className="flex flex-row items-center gap-1">
								<CheckIcon className="h-4 w-4 text-green-500" />
								<p>Business Consulting</p>
							</div>
							<div className="items-center flex justify-center">
								<button className="bg-transparent border-[2px] border-[#1B4D3E] px-3 rounded-xl py-1  font-medium">
									Select Now
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className="bg-white w-10 h-10 rounded-md absolute top-20 left-8 justify-center flex items-center">
					<MegaphoneIcon className="w-7 h-7 text-sky-500" />
					<p></p>
				</div>
			</div>
		</div>
	);
}

export default Discord;
