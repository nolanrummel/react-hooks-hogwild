import React from "react";
import piggy from "../assets/porco.png";
import PigContainer from "./PigContainer";

const Nav = ({hogs}) => {
	// console.log(hogs)
	return (
		<div className="navWrapper">
			<span className="headerText">HogWild</span>
			<div className="TwirlyPig">
				<img src={piggy} className="App-logo" alt="piggy" />
			</div>
			<span className="normalText">
				A React App for County Fair Hog Fans
			</span>
			<PigContainer hogs={hogs}/>
		</div>
	);
};

export default Nav;
