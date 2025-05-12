import Link from "next/link";

export default function Home() {
	return (
		<main className="flex flex-col xl:flex-row h-screen overflow-hidden">
			<div className="flex-1 relative flex flex-col justify-center items-center p-8 group">
				<div
					className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-500 group-hover:brightness-400 group-hover:scale-[1.02]"
					style={{ backgroundImage: "url('/images/bg-marine.jpg')" }}
				>
					<div className="absolute inset-0 bg-black opacity-70 z-0"></div>
				</div>

				<div className="relative z-10 text-center text-white">
					<h1 className="text-3xl md:text-5xl font-bold mb-4 text-white bg-black bg-opacity-50 p-2 rounded-md">
						SP Marine & Industriteknik
					</h1>
					<p className="text-lg md:text-xl text-white bg-black bg-opacity-50 p-2 rounded-md mb-6 max-w-md mx-auto">
						Industrial and marine engineering services.
					</p>
					<Link href="/marine">
						<button className="bg-black bg-opacity-50 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:bg-opacity-70 transition-all duration-300 hover:scale-120 cursor-pointer">
							Enter Marine Site
						</button>
					</Link>
				</div>
			</div>

			<div className="flex-1 relative flex flex-col justify-center items-center p-8 group">
				<div
					className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-500 group-hover:brightness-400 group-hover:scale-[1.02]"
					style={{ backgroundImage: "url('/images/bg-drifting.jpg')" }}
				>
					<div className="absolute inset-0 bg-black opacity-70 z-0"></div>
				</div>

				<div className="relative z-10 text-center text-white">
					<h1 className="text-3xl md:text-5xl font-bold mb-4 text-white bg-black bg-opacity-50 p-2 rounded-md">
						SP Driftingteam
					</h1>
					<p className="text-lg md:text-xl text-white bg-black bg-opacity-50 p-2 rounded-md mb-6 max-w-md mx-auto">
						Drifting events, car builds, and media.
					</p>
					<Link href="/drifting">
						<button className="bg-black bg-opacity-50 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:bg-opacity-70 transition-all duration-300 hover:scale-120 cursor-pointer">
							Enter Drifting Site
						</button>
					</Link>
				</div>
			</div>
		</main>
	);
}
