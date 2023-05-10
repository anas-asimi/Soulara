import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import PageBanner from "../components/PageBanner";
import "../sass/Contact.scss";

function Contact() {

  const form = useRef();
  const succesMessage = useRef();
  const failmessage = useRef();

  let timeOut
  function showMessage({ current }) {
    clearTimeout(timeOut)
    current.classList.add('hidden')
    setTimeout(() => {
      current.classList.remove('hidden')
      timeOut = setTimeout(() => {
        current.classList.add('hidden')
      }, 2000)
    })
  }

  const sendEmail = (e) => {
    e.preventDefault();
    // check in inputs valid
    if (form.current.name.value && form.current.email.value && form.current.message.value) {
      // send message
      emailjs.sendForm('soulara', 'template_ypz5rsq', form.current, 'B9FGys9dlXIav8myu')
        // in succes
        .then((result) => {
          form.current.reset()
          showMessage(succesMessage)
        })
        // in fail
        .catch(error => {
          console.log(error);
          showMessage(failmessage)
        });
    }
    // invalid inputs
    else {
      console.log("invalid inputs");
      showMessage(failmessage)
    }
  };

  return (
    <>
      <PageBanner title={'CONTACTEZ-NOUS'} />
      <main className="contact">
        <form ref={form} onSubmit={sendEmail}>
          <div className="input-wrapper">
            <input type="text" name='name' id='name' placeholder='Enter your name' required/>
          </div>
          <div className="input-wrapper">
            <input type="email" name='email' id='email' placeholder='Enter your email' required />
          </div>
          <div className="input-wrapper">
            <textarea name="message" id="message" placeholder="Enter your message" required></textarea>
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
      <div ref={succesMessage} className="message hidden succes">
        <div className="inner">
          <img src="/check-circle.svg" height={24} />
          <p>Message Sent</p>
          <div className="loading-bar"></div>
        </div>
      </div>
      <div ref={failmessage} className="message hidden fail">
        <div className="inner">
          <img src="/exclamation.svg" height={24} />
          <p>Message Fail</p>
          <div className="loading-bar"></div>
        </div>
      </div>
    </>
  )
}

export default Contact