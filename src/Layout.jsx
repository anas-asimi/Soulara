import { Routes, Route, Outlet, Link } from "react-router-dom";
import './Layout.scss'

function Layout() {
  return (
    <>
      <header>
        <div className="bar">
          <div className="Brand">
            <img src="/full brand.png" alt="Soulara" height={48}/>
          </div>
          <div className="panel">
            <a href="#" target="_blank"><img src="/FacebookLogo.svg" alt="facebook" height={48}/></a>
            <a href="#" target="_blank"><img src="/WhatsappLogo.svg" alt="whatsapp" height={48}/></a>
            <a href="#" target="_blank"><img src="/YoutubeLogo.svg" alt="youtube" height={48}/></a>
            <select name="Language" id="Language">
              <option value="ar">Arabic</option>
              <option value="fr">French</option>
              <option value="en">English</option>
            </select>
          </div>
        </div>
        <nav>
          <Link to={'/'} >home</Link>
          <Link to={'about'} >about</Link>
          <Link to={'contact'} >contact</Link>
          <Link to={'products'} >products</Link>
          <Link to={'services'} >services</Link>
        </nav>
      </header>
      <Outlet />
    </>
  )
}

export default Layout