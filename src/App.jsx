import { Routes, Route, Outlet, Link } from "react-router-dom";
import Layout from "./Layout";
import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Products from "./routes/Products";
import Services from "./routes/Services";
import NoMatch from "./routes/NoMatch";

import './sanitize.css' // reset css

function App() {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<Home />} />
				<Route path="about" element={<About />} />
				<Route path="contact" element={<Contact />} />
				<Route path="products" element={<Products />} />
				<Route path="services" element={<Services />} />
				<Route path="*" element={<NoMatch />} />
			</Route>
		</Routes>
	)
}

export default App