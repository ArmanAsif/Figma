import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import SupportScreen from "./screens/SupportScreen";
import SupportListScreen from "./screens/SupportListScreen";
import SaleListScreen from "./screens/SaleListScreen";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/sales" element={<SaleListScreen />} />
				<Route path="/supports" element={<SupportListScreen />} />
				<Route path="/support/new" element={<SupportScreen />} />
				<Route path="/" element={<HomeScreen />} exact />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
