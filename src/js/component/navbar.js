import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "./../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
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
						<span className="badge bg-secondary">{store.favlist.length}</span>
					</button>
					<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
						{store.favlist.length > 0 ? (
							store.favlist.map((item, index) => {
								return (
									<li className="dropdown-item" key={index}>
										{item}{" "}
										<button
											type="button"
											className="btn btn-danger"
											onClick={() => actions.favFunctionDelete(index)}>
											X
										</button>
									</li>
								);
							})
						) : (
							<li className="dropdown-item">Empty</li>
						)}

						{}
					</ul>
				</div>
			</div>
		</nav>
	);
};
