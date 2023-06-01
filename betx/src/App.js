import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import Login from "./component/Login";
import Sports from "./component/Sports";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/sports" element={<Sports />} />
			</Routes>
		</>
	);
}

export default App;
