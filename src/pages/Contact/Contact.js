import React, { useState } from "react";
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";
import "./Contact.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  return (
    <div style={{ height: "84vh" }}>
      <div className="content content-container center nav-bar-padding">
        <div className="contact-container">
          <h1 className="plantrFont">Contact Us</h1>

          <div className="content-container flex-row">
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
              <Form>
                <Form.Group>
                  <input
                    type="text"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Name"
                    className="inputting"
                  />
                </Form.Group>
                <Form.Group>
                  <input
                    type="email"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Email"
                    className="inputting"
                  />
                </Form.Group>
                <Form.Group>
                  <textarea
                    type=""
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
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
