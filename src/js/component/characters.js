import React, { useState, useContext } from "react";
import { Card } from "./card";
import { Context } from "./../store/appContext";

export const Characters = () => {
	const { store, actions } = useContext(Context);
	const [cargo, setCargo] = useState(false);
	//const [cargo2, setCargo2] = useState(false);

	setInterval(() => {
		store.characters.length > 0 ? setCargo(true) : "";
	}, 5000);

	return (
		<div>
			{cargo ? (
				<div className="newOverflow">
					{store.characters.map((item, index) => {
						return (
							<div key={index}>
								<div className="box">
									<Card
										name={item.name}
										gender={item.gender}
										haircolor={item.hair_color}
										eyecolor={item.eye_color}
										pos={index}
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
