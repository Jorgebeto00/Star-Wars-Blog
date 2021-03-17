import React from "react";
import { Characters } from "./../component/characters";
import "../../styles/home.scss";

export const Home = () => (
	<div>
		<h2 className="text-danger">Characters</h2>
		<Characters />
		<h2 className="text-danger">Planets</h2>
	</div>
);
