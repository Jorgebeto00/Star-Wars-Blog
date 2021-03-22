import React from "react";

export const CardPlanet = () => {
	return (
		<div className="card p-1 m-2">
			<img src="https://via.placeholder.com/400x200" className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">Name</h5>
				<p className="card-text">
					Gender:...
					<br />
					Hair Color:...
					<br />
					Eye color:...
				</p>
				<div className="buttons row">
					<div className="col-9">
						<button type="button" className="btn btn-outline-primary">
							Learn more!
						</button>
					</div>
					<div className="col">
						<button type="button" className="btn btn-outline-warning">
							{`<3`}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
