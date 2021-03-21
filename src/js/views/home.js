import React from "react";
import { Characters } from "../component/characters";
import "../../styles/home.scss";
import { Planets } from "../component/planets";

export const Home = () => (
	<div>
		<h2 className="text-danger">Characters</h2>
		<Characters />
		<h2 className="text-danger">Planets</h2>
		<Planets />
	</div>
);
