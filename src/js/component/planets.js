import React, { useState, useContext } from "react";
import { CardPlanet } from "./cardPlanet";
import { Context } from "./../store/appContext";

export const Planets = () => {
	const { store, actions } = useContext(Context);
	//const [cargo, setCargo] = useState(false);
	const [cargo2, setCargo2] = useState(false);

	setInterval(() => {
		//store.characters.length > 0 ? setCargo(true) : "";
		store.planets.length > 0 ? setCargo2(true) : "";
	}, 2000);
	return (
		<div>
			{cargo2 ? (
				<div className="newOverflow">
					{store.planets.map((item2, index2) => {
						return (
							<div key={index2}>
								<div className="box">
									<CardPlanet
										name={item2.name}
										population={item2.population}
										terrain={item2.terrain}
										pos2={index2}
									/>
								</div>
							</div>
						);
					})}
				</div>
			) : (
				" "
			)}
			{/* <div className="box">
				<CardPlanet />
			</div>
			<div className="box">
				<CardPlanet />
			</div>
			<div className="box">
				<CardPlanet />
			</div>
			<div className="box">
				<CardPlanet />
			</div>
			<div className="box">
				<CardPlanet />
			</div>
			<div className="box">
				<CardPlanet />
			</div>
			<div className="box">
				<CardPlanet />
			</div>
			<div className="box">
				<CardPlanet />
			</div>
			<div className="box">
				<CardPlanet />
			</div>
			<div className="box">
				<CardPlanet />
			</div> */}
		</div>
	);
};
