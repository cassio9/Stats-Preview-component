import "./App.css";
import HeroMobile from "./assets/image-header-mobile.jpg";
import HeroDesk from "./assets/image-header-desktop.jpg";

function App() {
	return (
		<div className="bg-VeryDarkBlueBG font-Inter min-h-screen max-h-fit flex justify-center items-center text-white p-4">
			<div className="rounded-xl max-w-[18rem] bg-DarkUnsaturatedBlueCard lg:max-w-3xl lg:flex lg:flex-row-reverse">
				<div className="relative lg:flex-1 ">
					<img
						className="rounded-t-xl w-full lg:rounded-none lg:rounded-r-xl lg:h-full lg:object-fill"
						src={HeroMobile}
						alt="3 ladies, office workers, one of them laughing "
					/>
					<div className="absolute inset-0 bg-SoftViolet opacity-50 rounded-t-xl lg:rounded-none lg:rounded-r-xl"></div>
				</div>
				<div className="p-6 text-center lg:flex-1 lg:text-left lg:p-10 ">
					<h1 className="text-2xl lg:text-3xl lg:mb-6 mb-4 font-bold">
						Get <span className="text-SoftViolet">insights</span> that help your business grow.
					</h1>
					<p className="text-SlightlyTransparentWhite mb-6 text-sm ">
						Discover the benefits of data analytics and make better decisions regarding revenue,
						customer experience, and overall efficiency.
					</p>
					<div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between lg:mt-10 lg:pr-4">
						<p className="font-LexendDeca text-xl">
							10k+
							<span className="text-SlightlyTransparentWhite block uppercase text-sm">
								Companies
							</span>
						</p>
						<p className="font-LexendDeca text-xl">
							314
							<span className="text-SlightlyTransparentWhite block uppercase text-[.8rem] ">
								Templates
							</span>
						</p>
						<p className="font-LexendDeca text-xl">
							12M+
							<span className="text-SlightlyTransparentWhite block uppercase text-sm">Queries</span>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
