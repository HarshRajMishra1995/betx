import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import Login from "./component/Login";
import Sports from "./component/Sports";
import Inplay from "./component/Inplay";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/sports" element={<Sports />} />
				<Route path="/inplay" element={<Inplay />} />
			</Routes>
		</>
	);
}

export default App;
