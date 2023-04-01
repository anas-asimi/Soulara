import { useEffect , useRef} from 'react';
import { useLocation, Outlet, Link } from "react-router-dom";
import FancyButton from "./components/FancyButton";
import Select from './components/Select'
import './sass/Layout.scss'

function Layout() {

  const loader = useRef(null)
  let location = useLocation();
  // function run every time route changed
  useEffect(() => {
    document.body.scrollTo(0,0)
  }, [location]);
  // hide the loader after 2s
  useEffect(() => {
    let delay = 0
    setTimeout(()=>{loader.current.style.display = 'none'},delay)
  }, []);

  return (
    <>
    <div className="loading" ref={loader}><div className="cercle"></div></div>
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
          <Link to={'about'} >SOULARA</Link>
          <Link to={'contact'} >Contacter</Link>
          <Link to={'products'} >Produits</Link>
          <Link to={'services'} >Services</Link>
        </nav>
      </header>
      <Outlet />
      <footer>
        <div className="container">
          <div className="left">
            <h2>Soulara inc</h2>
            <p>Etudes et réalisation des projets agricoles Bassins agricoles, Goutte a goutte, Terrassements, Import et Export.</p>
            <FancyButton destination={"contact"} text={'Contactez-nous'} size={'regular'} />
          </div>
          <div className="right">
            <div className="social">
              <a href="#" target="_blank"><img src="/facebook.svg" alt="facebook" height={32} /></a>
              <a href="#" target="_blank"><img src="/whatsapp.svg" alt="whatsapp" height={32} /></a>
              <a href="#" target="_blank"><img src="/youtube.svg" alt="youtube" height={32} /></a>
            </div>
            <p>05355-28648 / 0661438144</p>
            <p>Résidence kounouz 2 Mag 4 Av des Fars, Meknès 50000</p>
          </div>
        </div>
        <div className="copy-right">©2023 Anas Asimi, all rights reserved</div>
      </footer>
    </>
  )
}

export default Layout