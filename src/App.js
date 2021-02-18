/** @format */

import Header from "./components/header/Header";

import Acess from "./assets/Desktop-Accessories.jpg";
import ModelS from "./assets/Desktop-ModelS.jpeg";
import Model3 from "./assets/Desktop-Model3.jpeg";
import ModelX from "./assets/Desktop-ModelX.jpeg";
import ModelY from "./assets/Desktop-ModelY.jpeg";
import SolarPanels from "./assets/Desktop-SolarPanels.jpeg";
import SolarRoof from "./assets/Desktop-SolarRoof.jpeg";
import Items from "./components/Items/Items";

function App() {
	return (
		<div className="App">
			{/* <======= Header ======>*/}

			<Header />
			<div className="app__itemsWrap">
				<Items
					title="Lowest Cost Solar Panels in America"
					desc="Money-back guarantee"
					descLink=""
					backgroundImg={SolarPanels}
					leftBynTxt="Order Now"
					leftBtnLink=""
					rightBtnTxt="Learn More"
					rightBtnLink=""
					twoButtons="true"
					first
				/>
				<Items
					title="Model S"
					desc="Money-back guarantee"
					descLink=""
					backgroundImg={ModelS}
					leftBynTxt="Customer Order"
					leftBtnLink=""
					rightBtnTxt="Learn More"
					rightBtnLink=""
					twoButtons="true"
				/>
				<Items
					title="Model 3"
					desc="Money-back guarantee"
					descLink=""
					backgroundImg={Model3}
					leftBynTxt="Order Now"
					leftBtnLink=""
					rightBtnTxt="Learn More"
					rightBtnLink=""
					twoButtons="true"
				/>
				<Items
					title="Model X"
					desc="Money-back guarantee"
					descLink=""
					backgroundImg={ModelX}
					leftBynTxt="Order Now"
					leftBtnLink=""
					rightBtnTxt="Learn More"
					rightBtnLink=""
					twoButtons="true"
				/>
				<Items
					title="Model Y"
					desc="Money-back guarantee"
					descLink=""
					backgroundImg={ModelY}
					leftBynTxt="Order Now"
					leftBtnLink=""
					rightBtnTxt="Learn More"
					rightBtnLink=""
					twoButtons="true"
				/>
				<Items
					title="Solar for Roof"
					desc="Money-back guarantee"
					descLink=""
					backgroundImg={SolarRoof}
					leftBynTxt="Order Now"
					leftBtnLink=""
					rightBtnTxt="Learn More"
					rightBtnLink=""
					twoButtons="true"
				/>
				<Items
					title="Acessories"
					desc="Money-back guarantee"
					descLink=""
					backgroundImg={Acess}
					leftBynTxt="Order Now"
					leftBtnLink=""
					rightBtnTxt="Learn More"
					rightBtnLink=""
					twoButtons="true"
					first
				/>
			</div>
		</div>
	);
}

export default App;
