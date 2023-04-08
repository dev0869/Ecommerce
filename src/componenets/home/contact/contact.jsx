import React from 'react'
import '../contact/style.css'
import Navbar from '../navbar'
import Footer from '../../Footer/footer'
const Contact = () => {
  return (
    <>
      <Navbar />
      <div className='html'>


        <h2 style={{ padding: '3px', fontSize: '26PX', textAlign: 'center' }}>Contact-Us

          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28086.40632570843!2d77.31117186996227!3d28.364871741707706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdb98e43a52c7%3A0xa3688094e68c35b2!2sBallabhgarh%2C%20Faridabad%2C%20Haryana%20121004!5e0!3m2!1sen!2sin!4v1668697581551!5m2!1sen!2sin" width="100%" height="300" style={{ border: 0, padding: '3%' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

        </h2>












        <section id="contact">
          <div className="contact-wrapper">


            <form action='https://formspree.io/f/mqkjnnok' method='POST' id="contact-form" className="form-horizontal" role="form">

              <div className="form-group">
                <div className="col-sm-12">
                  <input type="text" className="form-control" id="name" placeholder="NAME" name="name" required />
                </div>
              </div>

              <div className="form-group">
                <div className="col-sm-12">
                  <input type="email" className="form-control" id="email" placeholder="EMAIL" name="email" required />
                </div>
              </div>

              <textarea className="form-control" rows="10" placeholder="MESSAGE" name="message" required></textarea>

              <button className="btn btn-primary send-button" id="submit" type="submit" value="SEND">
                <div style={{ fontWeight: 'bold' }}>
                  SEND
                </div>

              </button>

            </form>
            <br /> <br />

            <div className="direct-contact-container">

              <ul className="contact-list">
                <li className="list-item"><i className="fa fa-map-marker fa-2x"><span className="contact-text place">Ballabgarh, Haryana</span></i></li>

                <li className="list-item"><i className="fa fa-phone fa-2x"><span className="contact-text phone"><a href="tel:8368693097" title="Give me a call">8368693097</a></span></i></li>

                <li className="list-item"><i className="fa fa-envelope fa-2x"><span className="contact-text gmail"><a href="mailto:deveshbisht36@gmail.com" title="Send me an email">Deveshbisht36@gmail.com</a></span></i></li>

              </ul>

              <hr />
              <hr />
            </div>

          </div>

        </section>
      </div>

      <Footer />

    </>
  )
}

export default Contact