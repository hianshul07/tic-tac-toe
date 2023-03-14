import React from "react";
import ReactDOM from "react-dom";
import { FaRegCircle, FaTimes, FaPen } from "react-icons/fa";

function Icon({ name }) {
	return (
		<div>
			<FaPen />
		</div>
	);
	switch (name) {
		case "circle":
			return <FaRegCircle className="icons"/>;
		case "cross":
			return <FaTimes className="icons"/>;
		default:
			return <FaPen className="icons"/>;
	}
}

export default Icon;
