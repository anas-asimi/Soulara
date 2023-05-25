import { useEffect, useRef, useState } from 'react';
import { useLocation, Outlet, Link } from "react-router-dom";
import FancyButton from "./components/FancyButton";
import Select from './components/Select'
import './sass/Layout.scss'

function Layout() {

  const [isExpanded, setExpanded] = useState(false)
  const loader = useRef(null)
  let location = useLocation();
  // function run every time route changed
  useEffect(() => {
    document.getElementById('root').scrollTo(0, 0)
  }, [location]);
  // hide the loader after 2s
  useEffect(() => {
    let delay = 2000
    setTimeout(() => { loader.current.style.display = 'none' }, delay)
  }, []);

  return (
    <>
      <div className="loading" ref={loader}><div className="cercle"></div></div>
      <header>
        <nav className={`mobile ${isExpanded ? 'expanded' : ''}`}>
          <div className="panel">
            <a href="#" target="_blank"><img src="/social/facebook.svg" alt="facebook" height={32} /></a>
            <a href="#" target="_blank"><img src="/social/whatsapp.svg" alt="whatsapp" height={32} /></a>
            <a href="#" target="_blank"><img src="/social/youtube.svg" alt="youtube" height={32} /></a>
            <Select isWhite={true} />
          </div>
          <Link onClick={() => { setExpanded(false) }} to={'/'} >Accueil</Link>
          <Link onClick={() => { setExpanded(false) }} to={'about'} >About</Link>
          <Link onClick={() => { setExpanded(false) }} to={'contact'} >Contacter</Link>
          <Link onClick={() => { setExpanded(false) }} to={'products'} >Produits</Link>
          <Link onClick={() => { setExpanded(false) }} to={'services'} >Services</Link>
        </nav>
        <div className="bar">
          <div className="brand">
            <img src="/brand.png" alt="Soulara" height={48} />
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
            <a href="#" target="_blank"><img src="/social/facebook.svg" alt="facebook" height={32} /></a>
            <a href="#" target="_blank"><img src="/social/whatsapp.svg" alt="whatsapp" height={32} /></a>
            <a href="#" target="_blank"><img src="/social/youtube.svg" alt="youtube" height={32} /></a>
            <Select />
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
              <a href="#" target="_blank"><img src="/social/facebook.svg" alt="facebook" height={32} /></a>
              <a href="#" target="_blank"><img src="/social/whatsapp.svg" alt="whatsapp" height={32} /></a>
              <a href="#" target="_blank"><img src="/social/youtube.svg" alt="youtube" height={32} /></a>
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