import React from "react";

//include images into your bundle
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Cards from "./Cards";
import Footer from "./Footer";

//create your first component
const Home = () => {
	return (

		<div>
			<Navbar />
			<div className="container">
				<Jumbotron />
				<Cards/>
				<Footer/>			
			</div>
		</div>



	);
};

export default Home;
