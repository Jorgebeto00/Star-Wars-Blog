import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export const CardPlanet = props => {
	return (
		<div className="card p-1 m-2">
			<img src="https://via.placeholder.com/400x200" className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">{props.name}</h5>
				<p className="card-text">
					Population: {props.population}
					<br />
					Terrain: {props.terrain}
				</p>
				<div className="buttons row">
					<div className="col-9">
						<Link to={"/detailCardPlanet/" + props.pos2} type="button" className="btn btn-outline-primary">
							Learn more!
						</Link>
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

CardPlanet.propTypes = {
	name: PropTypes.string,
	population: PropTypes.string,
	terrain: PropTypes.string,
	pos2: PropTypes.number
};
