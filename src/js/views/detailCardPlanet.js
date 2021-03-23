import React, { useContext } from "react";
import { useParams } from "react-router-dom";

import { Context } from "../store/appContext";

export const DetailCardPlanet = () => {
	const { planetid } = useParams();
	const { store, actions } = useContext(Context);
	return (
		<div>
			<div className="row">
				<div className="col">
					<img src="https://via.placeholder.com/800x600" />
				</div>
				<div className="col text-center">
					<h2>{store.planets[planetid].name}</h2>
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
					<p>{store.planets[planetid].name}</p>
				</div>
				<div className="col text-center">
					<h4>Climate</h4>
					<br />
					<p>{store.planets[planetid].climate}</p>
				</div>
				<div className="col text-center">
					<h4>Population</h4>
					<br />
					<p>{store.planets[planetid].population}</p>
				</div>
				<div className="col text-center">
					<h4>Orbital Period</h4>
					<br />
					<p>{store.planets[planetid].orbital_period}</p>
				</div>
				<div className="col text-center">
					<h4>Rotation Period</h4>
					<br />
					<p>{store.planets[planetid].rotation_period}</p>
				</div>
				<div className="col text-center">
					<h4>Diameter</h4>
					<br />
					<p>{store.planets[planetid].diameter}</p>
				</div>
			</div>
		</div>
	);
};
