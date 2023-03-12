import { Routes, Route, Outlet, Link } from "react-router-dom";

function Layout() {
  return (
    <>
    <Link to={'/'} >home</Link>
    <Link to={'contact'} >contact</Link>
    <Link to={'products'} >products</Link>
    <Link to={'services'} >services</Link>
    <Link to={'nsgrjgn'} >err 404</Link>
    <Outlet/>
    </>
  )
}

export default Layout