import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import SupportScreen from "./screens/SupportScreen";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/support/new" element={<SupportScreen />} />
				<Route path="/" element={<HomeScreen />} exact />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
