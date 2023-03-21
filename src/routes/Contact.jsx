import Input from "../components/Input";
import "../sass/Contact.scss";

function Contact() {

  return (
    <main className="contact">
      <form action="#">
      </form>
      <div className="map">
        <iframe
          src="https://www.google.com/maps/d/embed?mid=1IoAZovsEJ1PppYu9BwaY7ChrbQebnG0&ehbc=2E312F"
        ></iframe>
      </div>
    </main>
  )
}

export default Contact



{/* 
you can edit the map window here :
https://www.google.com/maps/d/u/0/edit?mid=1IoAZovsEJ1PppYu9BwaY7ChrbQebnG0&usp=sharing
*/}