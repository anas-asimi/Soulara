import FancyButton from "../components/FancyButton";
import Stat from "../components/Stat";
import Card from "../components/Card";
import { ReactComponent as Triangle } from "../components/triangle.svg";
import "../sass/Home.scss";

function Home() {
  return (
    <>
      <div className="hero">
        <div className="content">
          <h2>
            Augmenter votre productivité, Réduire votre coûts et la consommation
            d'eau!
          </h2>
          <FancyButton destination="contact" text='Contactez-nous' />
        </div>
      </div>
      {/* ======  ====== */}
      <div className="about">
        <img src="./bassins.webp" />
        <div className="text">
          <h5>
            Augmenter votre productivité, Réduire votre coûts et la consommation
            d'eau !
          </h5>
          <p className="">
            Avec des ressources en eau limitées, le monde doit trouver le moyen
            de produire plus avec les mêmes ressources. Grâce à nos solutions
            d'irrigation avancées, nous aidons chaque jour les agriculteurs à
            réduire les coûts, l’apport en eau et en énergie tout en améliorant
            la productivité agricole.
          </p>
          <FancyButton destination={"about"} text={'Qui sommes-nous'} />
        </div>
      </div>
      {/* ======  ====== */}
      <img className="wave" src="/wave.svg" />
      {/* ======  ====== */}
      <div className="stats-wrapper">
        <div className="stats">
          <Stat number='961' text='Projets réalisés' />
          <Stat number='2,000,000+' text='Clients heureux' />
          <Stat number='14' text="Années d'experience" />
          <Stat number='12' text='Fournisseurs Internationaux' />
        </div>
      </div>
      {/* ======  ====== */}
      <div className="services agroequipement">
        <div className="container">
          <h3>AGROÉQUIPEMENT</h3>
          <div className="cards">
            <Card image='/agroequipement & agrofourniture/irrigation.jpg' title='Irrigation' />
            <Card image='/agroequipement & agrofourniture/energie solaire.jpg' title='Énergie Solaire' />
            <Card image='/agroequipement & agrofourniture/pompage.jpg' title='Pompage' />
            <Card image='/agroequipement & agrofourniture/piscines.jpg' title='Piscines' />
          </div>
        </div>
      </div>
      {/* ======  ====== */}
      <Triangle className='sections-divider' />
      {/* ======  ====== */}
      <div className="services agrofourniture">
        <div className="container">
          <h3>AGROFOURNITURE</h3>
          <div className="cards">
            <Card image='/agroequipement & agrofourniture/engrais.jpg' title='Engrais' />
            <Card image='/agroequipement & agrofourniture/produits phytosanitaires.jpg' title='Produits Phytosanitaires' />
            <Card image='/agroequipement & agrofourniture/semences.jpg' title='Semences Et Substrats' />
            <Card image='/agroequipement & agrofourniture/filets.jpg' title='Plastiques Et Filets Agricoles' />
          </div>
        </div>
      </div>
      {/* ======  ====== */}
      <Triangle className='sections-divider two' />
      {/* ======  ====== */}
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
  );
}

export default Home;