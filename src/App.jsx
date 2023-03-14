import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./components/Icon";
import Icon from "./components/Icon";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { Card, CardBody, Col, Row, Button, Container } from "reactstrap";

const App = () => {
	const [count, setCount] = useState(0);
	const [isCross, setIsCross] = useState(false);
	const [winMessage, setWinMessage] = useState("");

	const reloadGame = () => {};

	const checkIsWinner = () => {};

	const itemChanged = (itemNumber) => {};

	const itemArray = new Array(9).fill("empty");

	return (

		<Container className="p-5">
			<ToastContainer position="bottom-center" />
			<Row>
				<Col md={6} className="offset-md-3">
					<div className="grid">
						{itemArray.map((item, index) => (
							<Card>
								<CardBody className="box">
									<Icon />
								</CardBody>
							</Card>
						))}
					</div>
				</Col>
			</Row>
		</Container>
	);
};

export default App;

