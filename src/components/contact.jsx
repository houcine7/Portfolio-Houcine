import react from "react";
import { useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [msg, setMsg] = useState("");

  function handelSubmit(e) {
    e.preventDefault();
    console.log(name, email, msg);
    emailjs
      .sendForm(
        "service_j4dqlrh",
        "template_nq8z4qa",
        "#myForm",
        "z8AOe7wXokvj3NOG6"
      )
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
          setEmail("");
          setMsg("");
          setName("");
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-title">
          <h2>Contact</h2>
          <p>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </p>
        </div>

        <div className="row" data-aos="fade-in">
          <div className="col-lg-5 d-flex align-items-stretch">
            <div className="info">
              <div className="address">
                <i className="bi bi-geo-alt"></i>
                <h4>Location:</h4>
                <p>A108 Adam Street, New York, NY 535022</p>
              </div>

              <div className="email">
                <i className="bi bi-envelope"></i>
                <h4>Email:</h4>
                <p>info@example.com</p>
              </div>

              <div className="phone">
                <i className="bi bi-phone"></i>
                <h4>Call:</h4>
                <p>+1 5589 55488 55s</p>
              </div>

              <iframe
                src="https://maps.google.com/maps?q=rabat%20madinat%20&t=&z=13&ie=UTF8&iwloc=&output=embed"
                frameBorder="0"
                style={{ border: "0", width: "100%", height: "290px" }}
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
            <form
              id="myForm"
              className="form"
              style={{ height: "100%", marginLeft: "10px" }}
              onSubmit={handelSubmit}
            >
              <div className="row">
                <div className="form-group col-md-6">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="name"
                    required
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="name">Your Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    required
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="name">Subject</label> <br></br>
                <input
                  type="text"
                  className="form-control"
                  name="subject"
                  id="subject"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">Message</label> <br></br>
                <textarea
                  className="form-control"
                  name="message"
                  rows="10"
                  required
                  onChange={(e) => setMsg(e.target.value)}
                ></textarea>
              </div>
              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">
                  Your message has been sent. Thank you!
                </div>
              </div>
              <div className="text-center">
                <button type="submit">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
