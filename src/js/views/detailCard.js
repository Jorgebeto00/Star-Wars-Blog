import React from "react";

export const DetailCard = () => {
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
					<p>the name</p>
				</div>
				<div className="col text-center">
					<h4>Birth year</h4>
					<br />
					<p>the birth year</p>
				</div>
				<div className="col text-center">
					<h4>Gender</h4>
					<br />
					<p>the gender</p>
				</div>
				<div className="col text-center">
					<h4>Height</h4>
					<br />
					<p>the height</p>
				</div>
				<div className="col text-center">
					<h4>Skin Color</h4>
					<br />
					<p>the skin color</p>
				</div>
				<div className="col text-center">
					<h4>Eye Color</h4>
					<br />
					<p>the eye color</p>
				</div>
			</div>
		</div>
	);
};
