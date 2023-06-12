import { useEffect, useState } from 'react';
import { useLocation, Outlet, Link } from "react-router-dom";
import FancyButton from "./components/FancyButton";
import Select from './components/Select'
import Loading from "./components/Loading";

// styles
import './sanitize.css' // reset css
import './sass/Layout.scss'

function Layout() {

  let [language, setLanguage] = useState('french')
  const [isExpanded, setExpanded] = useState(false)
  let location = useLocation();
  // function run every time route changed
  useEffect(() => {
    document.getElementById('root').scrollTo(0, 0)
  }, [location]);

  return (
    <>
      <Loading delay={500}/>
      <header>
        <nav className={`mobile ${isExpanded ? 'expanded' : ''}`}>
          <div className="panel">
            <a href="#" target="_blank"><img src="/social/facebook.svg" alt="facebook" height='32px' width='32px' /></a>
            <a href="#" target="_blank"><img src="/social/whatsapp.svg" alt="whatsapp" height='32px' width='32px' /></a>
            <a href="#" target="_blank"><img src="/social/youtube.svg" alt="youtube" height='32px' width='32px' /></a>
            <Select isWhite={true} {...{ language, setLanguage }} />
          </div>
          <Link onClick={() => { setExpanded(false) }} to={'/'} >Accueil</Link>
          <Link onClick={() => { setExpanded(false) }} to={'about'} >About</Link>
          <Link onClick={() => { setExpanded(false) }} to={'contact'} >Contacter</Link>
          <Link onClick={() => { setExpanded(false) }} to={'products'} >Produits</Link>
          <Link onClick={() => { setExpanded(false) }} to={'services'} >Services</Link>
        </nav>
        <div className="bar">
          <div className="brand">
            <img src="/brand.png" alt="Soulara" height='48px' width='38px' />
            <div className="text">
              <p>MANSOURI</p>
              <p className='small'>etude et travaux divers</p>
            </div>
          </div>
          <button className={`menu-toggler ${isExpanded ? 'expanded' : ''}`} onClick={() => { setExpanded(!isExpanded) }}>
            <div className='line-1'></div>
            <div className='line-2'></div>
            <div className='line-3'></div>
          </button>
          <div className="panel">
            <a href="#" target="_blank"><img src="/social/facebook.svg" alt="facebook" height='32px' width='32px' /></a>
            <a href="#" target="_blank"><img src="/social/whatsapp.svg" alt="whatsapp" height='32px' width='32px' /></a>
            <a href="#" target="_blank"><img src="/social/youtube.svg" alt="youtube" height='32px' width='32px' /></a>
            <Select isWhite={false} {...{ language, setLanguage }} />
          </div>
        </div>
        <nav className='desktop'>
          <Link to={'/'} >Accueil</Link>
          <Link to={'about'} >About</Link>
          <Link to={'contact'} >Contacter</Link>
          <Link to={'products'} >Produits</Link>
          <Link to={'services'} >Services</Link>
        </nav>
      </header>
      <Outlet />
      <footer>
        <div className="container">
          <div className="left">
            <h2>LES FRERES MANSOURI sté</h2>
            <p>Etudes et réalisation des projets agricoles Bassins agricoles, Goutte a goutte, Terrassements, Import et Export.</p>
            <FancyButton destination="contact" text='Contactez-nous' size='regular' />
          </div>
          <div className="right">
            <div className="social">
              <a href="#" target="_blank"><img src="/social/facebook.svg" alt="facebook" height='32px' width='32px' /></a>
              <a href="#" target="_blank"><img src="/social/whatsapp.svg" alt="whatsapp" height='32px' width='32px' /></a>
              <a href="#" target="_blank"><img src="/social/youtube.svg" alt="youtube" height='32px' width='32px' /></a>
            </div>
            <p>0639990766</p>
            <p>I-B DIAR MENZH ET-3 AP27، Rue de Chefchaouen, Meknes 50000</p>
          </div>
        </div>
        <div className="copy-right">©2023 Anas Asimi, all rights reserved</div>
      </footer>
    </>
  )
}

export default Layout