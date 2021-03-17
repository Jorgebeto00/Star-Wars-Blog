import React from "react";

export const Card = () => {
	return (
		// <div className="card m-1" style={{ width: "18rem" }}>
		// 	<img src="" className="card-img-top" alt="..." />
		// 	<div className="card-body">
		// 		<h5 className="card-title">Card title</h5>
		// 		<p className="card-text">
		// 			Some quick example text to build on the card title and make up the bulk of the cards content.
		// 		</p>
		// 		<a href="#" className="btn btn-primary">
		// 			Go somewhere
		// 		</a>
		// 	</div>
		// </div>

		<div className="card p-1 m-2">
			<img src="https://via.placeholder.com/150" className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">Card title</h5>
				<p className="card-text">
					This is a longer card with supporting text below as a natural lead-in to additional content. This
					content is a little bit longer.
				</p>
			</div>
		</div>
	);
};
