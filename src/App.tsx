import "./App.css";
import HeroMobile from "./assets/image-header-mobile.jpg";
import HeroDesktop from "./assets/image-header-desktop.jpg";

function App() {
	return (
		<div className="bg-VeryDarkBlueBG font-Inter min-h-screen max-h-fit flex justify-center items-center text-white p-4">
			<div className="rounded-xl max-w-[18rem] bg-DarkUnsaturatedBlueCard lg:max-w-5xl lg:flex lg:flex-row-reverse">
				<div className="relative lg:flex-1 lg:bg-SoftViolet lg:rounded-r-xl">
					<picture>
						<source media="(min-width: 1026px )" srcSet={HeroDesktop} />
						<img
							className="h-full rounded-t-xl lg:rounded-none lg:rounded-r-xl bg-blend-multiply opacity-30"
							src={HeroMobile}
							alt="Women's in a meeting with a laptop"
						/>
					</picture>
				</div>
				<div className="p-6 text-center lg:flex-1 lg:text-left lg:p-12 ">
					<h1 className="text-2xl lg:text-4xl lg:mb-8 mb-4 font-bold">
						Get <span className="text-SoftViolet">insights</span> that help your business grow.
					</h1>
					<p className="text-SlightlyTransparentWhite mb-6 text-sm lg:text-lg">
						Discover the benefits of data analytics and make better decisions regarding revenue,
						customer experience, and overall efficiency.
					</p>
					<ul className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between lg:mt-10 lg:pr-12">
						<li className="font-LexendDeca text-xl lg:text-2xl">
							10k+
							<span className="text-SlightlyTransparentWhite block uppercase text-sm">
								Companies
							</span>
						</li>
						<li className="font-LexendDeca text-xl lg:text-2xl">
							314
							<span className="text-SlightlyTransparentWhite block uppercase text-[.8rem] ">
								Templates
							</span>
						</li>
						<li className="font-LexendDeca text-xl lg:text-2xl">
							12M+
							<span className="text-SlightlyTransparentWhite block uppercase text-sm">Queries</span>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default App;
