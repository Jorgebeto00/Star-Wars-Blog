import React, { useContext } from "react";
import { useParams } from "react-router-dom";

import { Context } from "../store/appContext";

export const DetailCardPlanet = () => {
	const { id } = useParams();
	const { store, actions } = useContext(Context);
	return (
		<div>
			<div className="row">
				<div className="col">
					<img src="https://via.placeholder.com/800x600" />
				</div>
				<div className="col text-center">
					<h2>{store.planets[id].name}</h2>
					<p>
						Some text. Some text. Some text. Some text. Some text. Some text. Some text. Some text. Some
						text. Some text. Some text. Some text. Some text. Some text. Some text. Some text. Some text.
						Some text. Some text.{" "}
					</p>
				</div>
			</div>
			<hr className="divider bg-danger" style={{ height: "5px" }} />
			<div className="row">
				<div className="col text-center">
					<h4>Name</h4>
					<br />
					<p>{store.planets[id].name}</p>
				</div>
				<div className="col text-center">
					<h4>Climate</h4>
					<br />
					<p>{store.planets[id].climate}</p>
				</div>
				<div className="col text-center">
					<h4>Population</h4>
					<br />
					<p>{store.planets[id].population}</p>
				</div>
				<div className="col text-center">
					<h4>Orbital Period</h4>
					<br />
					<p>{store.planets[id].orbital_period}</p>
				</div>
				<div className="col text-center">
					<h4>Rotation Period</h4>
					<br />
					<p>{store.planets[id].rotation_period}</p>
				</div>
				<div className="col text-center">
					<h4>Diameter</h4>
					<br />
					<p>{store.planets[id].diameter}</p>
				</div>
			</div>
		</div>
	);
};
