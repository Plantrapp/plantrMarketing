import React, { useEffect, useRef, useState } from "react";
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";
import "./Contact.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { gsap } from "gsap";

const initialFormValues = {
  email: "",
  name: "",
  message: "",
};

export default function Contact() {
  const [formValues, setFormValues] = useState(initialFormValues);
  const main = useRef();

  useEffect(() => {
    gsap.from(main.current, {
      opacity: 0,
      duration: 1.5,
    });
  }, []);

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://formspree.io/f/xbjpeqlz", formValues)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    setFormValues(initialFormValues);
  };

  return (
    <div className="page-container">
      <div
        className="content content-container center nav-bar-padding"
        ref={main}
      >
        <div className="contact-container">
          <h1 className="plantrFont">Contact Us</h1>

          <div className="content-container">
            <div className="contact-left">
              <div className="contact-sections">
                <h4 className="plantrFont">Email</h4>
                <a href="mailto:plantrappofficial@gmail.com">
                  plantrappofficial@gmail.com
                </a>
              </div>
              <div className="contact-sections">
                <h4 className="plantrFont">Call</h4>
                <a href="tel:5418108414">541-810-8414</a>
              </div>
              <div className="contact-sections">
                <h4 className="plantrFont"> Follow Us</h4>
                <div className="contact-socials">
                  <a
                    href="https://www.youtube.com/channel/UCS-dlSvy-wa64lyGy2ppivw/featured"
                    target="_blank"
                  >
                    <FaYoutube size={25} />
                  </a>
                  <a
                    href="https://www.facebook.com/Plantrappofficial"
                    target="_blank"
                  >
                    <FaFacebook size={25} />
                  </a>
                  <a
                    href="https://www.instagram.com/plantrappofficial/"
                    target="_blank"
                  >
                    <FaInstagram size={25} />
                  </a>
                  <a href="https://twitter.com/AppPlantr" target="_blank">
                    <FaTwitter size={25} />
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-left">
              <Form onSubmit={handleSubmit}>
                <Form.Group>
                  <input
                    type="hidden"
                    name="_subject"
                    value="New email from contact page"
                    className="inputting"
                  />
                </Form.Group>
                <Form.Group>
                  <input
                    type="email"
                    name="email"
                    value={formValues.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="inputting"
                  />
                </Form.Group>
                <Form.Group>
                  <input
                    type="text"
                    name="name"
                    value={formValues.name}
                    onChange={handleChange}
                    placeholder="Name"
                    className="inputting"
                  />
                </Form.Group>
                <Form.Group>
                  <textarea
                    type=""
                    name="message"
                    value={formValues.message}
                    onChange={handleChange}
                    placeholder="Message"
                    className="inputting"
                  />
                </Form.Group>
                <Form.Group>
                  <Button type="submit">Submit</Button>
                </Form.Group>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
