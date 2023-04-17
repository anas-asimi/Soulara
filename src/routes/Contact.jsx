import FancyButton from "../components/FancyButton";
import PageBanner from "../components/PageBanner";
import "../sass/Contact.scss";

function Contact() {

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
        <div id="map">
          <iframe
            loading="lazy"
            allowfullscreen
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAGx828P03zHbVShwPdNDEiUwNsCvoDU3k&q=soulara+meknes&zoom=14"
          ></iframe>
        </div>
      </main>
    </>
  )
}

export default Contact