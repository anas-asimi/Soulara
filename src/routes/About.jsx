import "../sass/About.scss";

function About() {
  return (
    <>
      <main className="about">
        <h5>QUI SOMMES-NOUS ?</h5>
        <p className="big">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p className="big">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p className="big">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </main>
      <div className="services">
        <div className="service">
          <img src="/services/production.png"/>
          <p className="big">Production</p>
        </div>
        <div className="service">
          <img src="/services/conseil.png"/>
          <p className="big">Conseil</p>
        </div>
        <div className="service">
          <img src="/services/distribution.png"/>
          <p className="big">Distribution</p>
        </div>
        <div className="service">
          <img src="/services/installation.png"/>
          <p className="big">Installation</p>
        </div>
      </div>
      <div className="partenaires">
        <h3>NOS PARTENAIRES</h3>
        <div className="slider-wrapper">
          <div className="slider">
            <img src="/partners/magriser.png" />
            <img src="/partners/irrisys.png" />
            <img src="/partners/rivulis.png" />
            <img src="/partners/azud.png" />
            <img src="/partners/netafim.png" />
            <img src="/partners/pedrollo.png" />
            <img src="/partners/sicda.png" />
            <img src="/partners/plastica-alfa.png" />
            <img src="/partners/rainbird.png" />
            <img src="/partners/irritec.png" />
            <img src="/partners/magriser.png" />
            <img src="/partners/irrisys.png" />
            <img src="/partners/rivulis.png" />
            <img src="/partners/azud.png" />
            <img src="/partners/netafim.png" />
            <img src="/partners/pedrollo.png" />
            <img src="/partners/sicda.png" />
            <img src="/partners/plastica-alfa.png" />
            <img src="/partners/rainbird.png" />
            <img src="/partners/irritec.png" />
          </div>
        </div>
      </div>
      </>
  )
}

export default About