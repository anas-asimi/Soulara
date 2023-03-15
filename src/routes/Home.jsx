import FancyButton from "../components/FancyButton";
import Stat from "../components/Stat";
import Card from "../components/Card";
import "../sass/Home.scss";

function Home() {
  return (
    <>
      <div className="hero">
        <div className="content">
          <h2>
            Augmenter votre productivité, Réduire votre coûts et la consommation
            d'eau !
          </h2>
          <FancyButton destination={"contact"} text={'Contactez-nous'} />
        </div>
      </div>
      <div className="about">
        <img src="https://cmgp-cas.com/wp-content/uploads/2022/02/Bassins.jpg" />
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
      <img className="wave" src="/wave.svg" />
      <div className="stats-wrapper">
        <div className="stats">
          <Stat number={'961'} text={'Projets réalisés'} />
          <div className="line"></div>
          <Stat number={'2,000,000+'} text={'Clients heureux'} />
          <div className="line"></div>
          <Stat number={'14'} text={"Années d'experience"} />
          <div className="line"></div>
          <Stat number={'12'} text={'Fournisseurs Internationaux'} />
        </div>
      </div>
      <div className="services agroequipement">
        <div className="container">
          <h3>AGROÉQUIPEMENT</h3>
          <div className="cards">
            <Card image={'https://cmgp-cas.com/wp-content/uploads/2022/02/Tubes-et-Tuyaux.jpg'} title={'Irrigation'} />
            <Card image={'https://cmgp-cas.com/wp-content/uploads/2022/02/Panneaux-solaires.jpg'} title={'Énergie Solaire'} />
            <Card image={'https://cmgp-cas.com/wp-content/uploads/2022/02/Pompes-immergees.jpg'} title={'Pompage'} />
            <Card image={'https://s3-alpha-sig.figma.com/img/9590/b218/24ee44cc2774ea85be83592617f62fb6?Expires=1679875200&Signature=BFyuUchV0IygwxQt2ef3GPPfmSgMi2Wey0ET4dpyOR3dDSAhtKrFRQ3FXv3tXT69M6vl5L7EH8j~3rJE1Upcnqe626Uwc845LSJ~9jeNFeizd1USnko1FkJ5WpnlLnNuV0N46rEYmeYTT1xKkAFwSEnZdLAJUK~pgVtQsmYuFBVoNYh6eGCa4WRV9fz6B~Lw04-HW0CdrAQpDbN2GN-kAKteibHNfVow7uSzmcgxGqBqg0o1jSzE~kBuCjOQX6pC3I7ytBi6uAJk0xLlBUy66yjIRYsfIT~1xNJsdGik4pM95KwQMwy8LJ0AHcL7JhLmVDyl4iX8UC9aPH1g~cJj2Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'} title={'Piscines'} />
          </div>
        </div>
      </div>
      <img className="triangle" src="/triangle-bottom-right-icon.svg" />
      <div className="services agrofourniture">
        <div className="container">
          <h3>AGROFOURNITURE</h3>
          <div className="cards">
            <Card image={'https://cmgp-cas.com/wp-content/uploads/2022/04/ENGRAIS-AZOTES.jpg'} title={'Engrais'} />
            <Card image={'https://cmgp-cas.com/wp-content/uploads/2022/02/Fongicides.jpg'} title={'Produits Phytosanitaires'} />
            <Card image={'https://cmgp-cas.com/wp-content/uploads/2022/03/Legumineuses.jpg'} title={'Semences Et Substrats'} />
            <Card image={'https://cmgp-cas.com/wp-content/uploads/2022/03/Filets-brise-vent.jpg'} title={'Plastiques Et Filets Agricoles'} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;