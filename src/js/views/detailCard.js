import React from "react";

import { useParams } from "react-router-dom";

import { Context } from "../store/appContext";

export const DetailCard = () => {
	const { charactersid } = useParams();
	const { store, actions } = useContext(Context);

	return (
		<div>
			<div className="row">
				<div className="col">
					<img src="https://via.placeholder.com/800x600" />
				</div>
				<div className="col text-center">
					<h2>Name</h2>
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
					<p>{store.characters[charactersid].name}</p>
				</div>
				<div className="col text-center">
					<h4>Birth year</h4>
					<br />
					<p>{store.characters[charactersid].birth_year}</p>
				</div>
				<div className="col text-center">
					<h4>Gender</h4>
					<br />
					<p>{store.characters[charactersid].gender}</p>
				</div>
				<div className="col text-center">
					<h4>Height</h4>
					<br />
					<p>{store.characters[charactersid].height}</p>
				</div>
				<div className="col text-center">
					<h4>Skin Color</h4>
					<br />
					<p>{store.characters[charactersid].skin_color}</p>
				</div>
				<div className="col text-center">
					<h4>Eye Color</h4>
					<br />
					<p>{store.characters[charactersid].eye_color}</p>
				</div>
			</div>
		</div>
	);
};
