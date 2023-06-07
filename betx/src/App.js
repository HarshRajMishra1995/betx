import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import Login from "./component/Login";
import Sports from "./component/Sports";
import Inplay from "./component/Inplay";
import Match from "./component/Match";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/sports" element={<Sports />} />
				<Route path="/inplay" element={<Inplay />} />
				<Route path="/match" element={<Match />} />
			</Routes>
		</>
	);
}

export default App;
