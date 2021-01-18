import React, { useState } from "react";
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Footer.css";
import { Col, Container, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function Footer() {
  const [formValue, setFormValue] = useState("");

  /*
<NavLink to="/" activeStyle={activeStyle} className="nav-link">
  Home
</NavLink>
<NavLink to="/nav/about" activeStyle={activeStyle} className="nav-link">
  About
</NavLink>
<NavLink
  to="/nav/contact"
  activeStyle={activeStyle}
  className="nav-link"
>
  Contact
</NavLink>
<NavLink
  to="/nav/donate"
  activeStyle={activeStyle}
  className="nav-link"
>
  Donate
</NavLink>
<NavLink to="/nav/shop" activeStyle={activeStyle} className="na
  Shop
</NavLink>
*/
  return (
    <footer>
      <Container>
        <Row>
          <Col>
            <NavLink to="/nav/about" className="link-featureless">
              About
            </NavLink>
          </Col>
          <Col>
            <NavLink to="/nav/contact" className="link-featureless">
              Contact
            </NavLink>
          </Col>
          <Col>
            <NavLink to="/nav/donate" className="link-featureless">
              Donate
            </NavLink>
          </Col>
          <Col>
            <NavLink to="/nav/shop" className="link-featureless">
              Shop
            </NavLink>
          </Col>
        </Row>
      </Container>
      <div className="right">
        <Form className="plantrFont-secondary">
          <Form.Row className="align-items-center">
            <Col xs="auto">
              <Form.Label htmlFor="subscribe" className="plantrFont-secondary ">
                Subscribe to our newsletter:
              </Form.Label>
            </Col>
          </Form.Row>
          <Form.Row className="align-items-center">
            <Col xs="auto">
              <Form.Control
                type="email"
                name="subscribe"
                value={formValue}
                onChange={(e) => setFormValue(e.target.value)}
                placeholder="Enter E-mail Address"
              />
            </Col>
            <Col xs="auto">
              <Button className="btn-primary" size="sm" type="submit">
                Subscribe
              </Button>
            </Col>
          </Form.Row>
        </Form>
        <div className="socials">
          <a
            href="https://www.youtube.com/channel/UCS-dlSvy-wa64lyGy2ppivw/featured"
            target="_blank"
            // className="nav-link"
          >
            <FaYoutube size={20} color="white" />
          </a>
          <a
            href="https://www.facebook.com/Plantrappofficial"
            target="_blank"
            // className="nav-link"
          >
            <FaFacebook size={20} color="white" />
          </a>
          <a
            href="https://www.instagram.com/plantrappofficial/"
            target="_blank"
            // className="nav-link"
          >
            <FaInstagram size={20} color="white" />
          </a>
          <a
            href="https://twitter.com/AppPlantr"
            target="_blank"
            // className="nav-link"
          >
            <FaTwitter size={20} color="white" />
          </a>
        </div>
      </div>
    </footer>
  );
}
