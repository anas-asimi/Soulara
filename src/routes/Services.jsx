import PageThumbnail from "../components/PageThumbnail";
import ServiceCard from "../components/ServiceCard";
import "../sass/Services.scss";


function Services() {

  const services = [
    {imgUrl:'/services/irrigation.jpg',title:'L’irrigation de précision',description:'L’irrigation de précision est la solution idéale pour augmenter la productivité agricole et améliorer sa qualité tout en gérant efficacement les ressources hydriques.'},
    {imgUrl:'/services/pompage.jpg',title:'Energie propre et inépuisable',description:'Investir dans les énergies renouvelables et dans la transition énergétique, c’est devenir producteur de sa propre consommation'},
    {imgUrl:'/services/energie.jpg',title:"Pompage de l'eau",description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco'},
    {imgUrl:'/services/piscines.jpg',title:'Construction de piscines',description:'Nos piscines sont conçues par des professionnels, en commençant par une évaluation approfondie de l’espace, de l’environnement et de la vision de votre jardin.'},
  ]
  return (
    <>
      <PageThumbnail title={'NOS SERVICES'} />
      <main className='services'>
        {services.map((item,i)=><ServiceCard key={i} data={item}/>)}
      </main>
    </>
  )
}

export default Services