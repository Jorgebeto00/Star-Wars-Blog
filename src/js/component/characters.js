import React, { useState } from "react";
import { Card } from "./card";
import { Context } from "./../store/appContext";

export const Characters = () => {
	const { store, actions } = useContext(Context);
	const [cargo, setCargo] = useState(false);
	//const [cargo2, setCargo2] = useState(false);

	setInterval(() => {
		store.personajes.length > 0 ? setCargo(true) : "";
		//store.planets.length > 0 ? setCargo2(true) : "";
	}, 2000);

	return (
		<div className="newOverflow">
			{cargo ? (
				<div className="cardsconteiner m-auto">
					{store.characters.map((item, index) => {
						return (
							<div className="displaycards" key={index}>
								<Card
									name={item.name}
									gender={item.gender}
									haircolor={item.hair_color}
									eyecolor={item.eye_color}
									pos={index}
								/>
							</div>
						);
					})}
				</div>
			) : (
				" "
			)}
			{/* <div className="box">
				<Card
					name={item.name}
					gender={item.gender}
					haircolor={item.hair_color}
					eyecolor={item.eye_color}
					pos={index}
				/>
			</div>
			<div className="box">
				<Card />
			</div>
			<div className="box">
				<Card />
			</div>
			<div className="box">
				<Card />
			</div>
			<div className="box">
				<Card />
			</div>
			<div className="box">
				<Card />
			</div>
			<div className="box">
				<Card />
			</div>
			<div className="box">
				<Card />
			</div>
			<div className="box">
				<Card />
			</div>
			<div className="box">
				<Card />
			</div> */}
		</div>
	);
};
