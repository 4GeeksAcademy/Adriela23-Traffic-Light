import React, { useState } from "react";

//create your first component
const Home = () => {

	const [selectedColor, setSelectedColor] = useState("red");

	return (
		<div className="traffic-light">

			<div onClick={() => setSelectedColor("red")}
				className={selectedColor === "red" ? "light red glow" : "light red"}>
			</div>

			<div onClick={() => setSelectedColor("yellow")}
				className={selectedColor === "yellow" ? "light yellow glow" : "light yellow"}>
			</div>

			<div onClick={() => setSelectedColor("green")}
				className={selectedColor === "green" ? "light green glow" : "light green"}>
			</div>

		</div>
	);
};

export default Home;
