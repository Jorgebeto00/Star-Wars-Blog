import React from "react";
import { Characters } from "./characters";
import "../../styles/home.scss";
import { Planets } from "./planets";

export const Home = () => (
	<div>
		<h2 className="text-danger">Characters</h2>
		<Characters />
		<h2 className="text-danger">Planets</h2>
		<Planets />
	</div>
);
