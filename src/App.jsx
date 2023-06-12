import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./routes/Home";
import Loading from "./components/Loading";
import React, { Suspense } from "react";
// lazy load
const About = React.lazy(() => import('./routes/About'));
const Contact = React.lazy(() => import('./routes/Contact'));
const Products = React.lazy(() => import('./routes/Products'));
const Services = React.lazy(() => import('./routes/Services'));
const NoMatch = React.lazy(() => import('./routes/NoMatch'));

function App() {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index
					element={<Home />} />
				<Route path="about"
					element={
						<Suspense fallback={<Loading />}>
							<About />
						</Suspense>
					} />
				<Route path="contact"
					element={
						<Suspense fallback={<Loading />}>
							<Contact />
						</Suspense>
					} />
				<Route path="products"
					element={
						<Suspense fallback={<Loading />}>
							<Products />
						</Suspense>
					} />
				<Route path="services"
					element={
						<Suspense fallback={<Loading />}>
							<Services />
						</Suspense>
					} />
				<Route path="*"
					element={
						<Suspense fallback={<Loading />}>
							<NoMatch />
						</Suspense>
					} />
			</Route>
		</Routes>
	)
}

export default App