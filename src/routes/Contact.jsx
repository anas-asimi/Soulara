import { useEffect, useRef } from 'react';
import FancyButton from "../components/FancyButton";
import PageBanner from "../components/PageBanner";
import "../sass/Contact.scss";

function Contact() {

  let mapDiv = useRef(null)

  async function initMap() {
    // The location of soulara
    const position = { lat: 33.8986412, lng: -5.515229 };
    // Request needed libraries.
    const { Map } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerView } = await google.maps.importLibrary("marker");
    // The map, centered at soulara
    let map = new Map(mapDiv.current, {
      zoom: 12,
      center: position,
      mapId: "DEMO_MAP_ID",
    });
    // The marker, positioned at Uluru
    const marker = new AdvancedMarkerView({
      map: map,
      position: position,
      title: "Soulara",
    });
  }

  useEffect(() => {
    initMap();
  })


  return (
    <>
      <PageBanner title={'CONTACTEZ-NOUS'} />
      <main className="contact">
        <form action="#">

          <div className="input-wrapper">
            <input type="text" name='name' id='name' placeholder='enter your name' />
          </div>

          <div className="input-wrapper">
            <input type="email" name='email' id='email' placeholder='enter your email' />

          </div>
          <div className="input-wrapper">
            <input type="text" name='subject' id='subject' placeholder='enter your subject' />

          </div>
          <div className="input-wrapper">
            <textarea name="message" id="message" placeholder="enter your message"></textarea>
          </div>

          <div className="input-wrapper">
            <FancyButton destination={"/"} text={'Send'} size={'regular'} />
          </div>

        </form>
        <div id="map" ref={mapDiv}></div>
        {/* <div id="map">
          <iframe
            src="https://www.google.com/maps/d/embed?mid=1IoAZovsEJ1PppYu9BwaY7ChrbQebnG0&ehbc=2E312F"
          ></iframe>
        </div> */}
      </main></>
  )
}

export default Contact



{/* 
you can edit the map window here :
https://www.google.com/maps/d/u/0/edit?mid=1IoAZovsEJ1PppYu9BwaY7ChrbQebnG0&usp=sharing
*/}