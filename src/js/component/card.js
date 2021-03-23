import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export const Card = props => {
	const { store, actions } = useContext(Context);

	return (
		<div className="card p-1 m-2">
			<img src="https://via.placeholder.com/400x200" className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">{props.name}</h5>
				<p className="card-text">
					Gender: {props.gender}
					<br />
					Hair Color: {props.haircolor}
					<br />
					Eye color: {props.eyecolor}
				</p>
				<div className="buttons row">
					<div className="col-9">
						<Link to={"/detail-card/" + props.pos} type="button" className="btn btn-outline-primary">
							Learn more!
						</Link>
					</div>
					<div className="col">
						<button type="button" className="btn btn-outline-warning">
							❤
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

Card.propTypes = {
	name: PropTypes.string,
	gender: PropTypes.string,
	haircolor: PropTypes.string,
	eyecolor: PropTypes.string,
	pos: PropTypes.number
};
