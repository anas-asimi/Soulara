import FancyButton from "../components/FancyButton";
import PageBanner from "../components/PageBanner";
import "../sass/Contact.scss";

function Contact() {

  return (
    <>
      <PageBanner title={'CONTACTEZ-NOUS'}/>
      <main className="contact">
        <form action="#">

          <div className="input-wrapper">
            <label htmlFor='name'>Name :</label>
            <input type="text" name='name' id='name' placeholder='enter your name' />
          </div>

          <div className="input-wrapper">
            <label htmlFor='email'>Email :</label>
            <input type="email" name='email' id='email' placeholder='enter your email' />

          </div>
          <div className="input-wrapper">
            <label htmlFor='subject'>Subject :</label>
            <input type="text" name='subject' id='subject' placeholder='enter your subject' />

          </div>
          <div className="input-wrapper">
            <label htmlFor='message'>Message :</label>
            <textarea name="message" id="message" placeholder="enter your message"></textarea>
          </div>

          <div className="input-wrapper">
            <FancyButton destination={"/"} text={'Send'} size={'regular'} />
          </div>

        </form>
        <div className="map">
          <iframe
            src="https://www.google.com/maps/d/embed?mid=1IoAZovsEJ1PppYu9BwaY7ChrbQebnG0&ehbc=2E312F"
          ></iframe>
        </div>
      </main></>
  )
}

export default Contact



{/* 
you can edit the map window here :
https://www.google.com/maps/d/u/0/edit?mid=1IoAZovsEJ1PppYu9BwaY7ChrbQebnG0&usp=sharing
*/}