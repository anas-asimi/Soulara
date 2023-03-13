import { Routes, Route, Outlet, Link } from "react-router-dom";
import Select from './components/Select'
import './sass/Layout.scss'

function Layout() {
  return (
    <>
      <header>
        <div className="bar">
          <div className="brand">
            <img src="/brand.png" alt="Soulara" height={48} />
            <p>Soulara</p>
          </div>
          <div className="panel">
            <a href="#" target="_blank"><img src="/facebook.svg" alt="facebook" height={32} /></a>
            <a href="#" target="_blank"><img src="/whatsapp.svg" alt="whatsapp" height={32} /></a>
            <a href="#" target="_blank"><img src="/youtube.svg" alt="youtube" height={32} /></a>
            <Select />
          </div>
        </div>
        <nav>
          <Link to={'/'} >Accueil</Link>
          <Link to={'about'} >Qui sommes-nous</Link>
          <Link to={'contact'} >Produicts</Link>
          <Link to={'products'} >Services</Link>
          <Link to={'services'} >contacter</Link>
        </nav>
      </header>
      <Outlet />
    </>
  )
}

export default Layout