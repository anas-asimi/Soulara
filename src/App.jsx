import { Routes, Route, Outlet, Link } from "react-router-dom";
import Layout from "./Layout";
import './App.css'
import './sanitize.css'

function App() {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				{/* <Route index element={<Home />} />
				<Route path="about" element={<About />} />
				<Route path="dashboard" element={<Dashboard />} />
				<Route path="*" element={<NoMatch />} /> */}
			</Route>
		</Routes>
	)
}

export default App