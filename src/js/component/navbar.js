import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<div className="container-fluid">
				<Link to="/" className="navbar-brand" href="#">
					<img
						src="https://logodownload.org/wp-content/uploads/2015/12/star-wars-logo-1-1.png"
						alt=""
						width="80"
					/>
				</Link>

				<div className="dropdown">
					<button
						className="btn btn-primary dropdown-toggle"
						type="button"
						id="dropdownMenuButton1"
						data-bs-toggle="dropdown"
						aria-expanded="false">
						Favorites
						<span className="badge bg-secondary">4</span>
					</button>
					<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
						<li>
							<a className="dropdown-item" href="#">
								Action
							</a>
						</li>
						<li>
							<a className="dropdown-item" href="#">
								Another action
							</a>
						</li>
						<li>
							<a className="dropdown-item" href="#">
								Something else here
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
