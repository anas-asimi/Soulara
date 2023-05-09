import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import PageBanner from "../components/PageBanner";
import "../sass/Contact.scss";

function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    if (form.current.name.value && form.current.email.value && form.current.message.value) {
      emailjs.sendForm('soulara', 'template_ypz5rsq', form.current, 'B9FGys9dlXIav8myu')
        .then((result) => {
          form.current.reset()
          console.log(result.text);
        })
        .catch(error => {
          console.log(error.text);
        });
    }
    else console.log("invalid inputs");
  };

  return (
    <>
      <PageBanner title={'CONTACTEZ-NOUS'} />
      <main className="contact">
        <form ref={form} onSubmit={sendEmail}>
          <div className="input-wrapper">
            <input type="text" name='name' id='name' placeholder='Enter your name' />
          </div>
          <div className="input-wrapper">
            <input type="email" name='email' id='email' placeholder='Enter your email' />
          </div>
          <div className="input-wrapper">
            <textarea name="message" id="message" placeholder="Enter your message"></textarea>
          </div>
          <div className="input-wrapper">
            <button type="submit" className='button regular'>
              <p className='regular'>Send</p>
              <img src="/angle-down-white.svg" height={'32px'} />
            </button>
          </div>
        </form>
        <div id="map">
          <iframe
            loading="lazy"
            allowFullScreen
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAGx828P03zHbVShwPdNDEiUwNsCvoDU3k&q=soulara+meknes&zoom=14"
          ></iframe>
        </div>
      </main>
    </>
  )
}

export default Contact