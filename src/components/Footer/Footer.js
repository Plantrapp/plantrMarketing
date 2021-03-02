import React, { useState } from "react";
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Footer.css";
import { Col, Container, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import axios from "axios";

export default function Footer() {
  // const [subscribed, setSubscribed] = useState(false);
  const [formValue, setFormValue] = useState("");

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   axios
  //     .post(
  //       "https://www.getrevue.co/profile/sambrown0322/add_subscriber",
  //       formValue
  //     )
  //     .then((res) => {
  //       setFormValue("");
  //       console.log(res);
  //     })
  //     .catch((err) => {
  //       console.log("error", err);
  //     });
  // };
  return (
    <footer>
      <Container>
        <Row>
          <Col>
            <NavLink to="/about" className="link-featureless bold">
              About
            </NavLink>
          </Col>
          <Col>
            <NavLink to="/contact" className="link-featureless bold">
              Contact
            </NavLink>
          </Col>
          <Col>
            <NavLink to="/support" className="link-featureless bold">
              Support
            </NavLink>
          </Col>
          <Col>
            <NavLink to="/features" className="link-featureless bold">
              Features
            </NavLink>
          </Col>
        </Row>

        <Row>
          <Col>The Team</Col>
          <Col>
            <a
              href="mailto:plantrappofficial@gmail.com"
              className="link-featureless"
            >
              Email
            </a>
          </Col>
          <Col>
            <NavLink to="/support" className="link-featureless">
              Donate
            </NavLink>
          </Col>
          <Col>
            <NavLink to="/features" className="link-featureless">
              Plantrs
            </NavLink>
          </Col>
        </Row>

        <Row>
          <Col>GUILDS</Col>
          <Col>
            <a href="tel:5418108414" className="link-featureless">
              Call
            </a>
          </Col>
          <Col>
            <NavLink to="/support" className="link-featureless">
              Shop
            </NavLink>
          </Col>
          <Col>
            <NavLink to="/features" className="link-featureless">
              Growrs
            </NavLink>
          </Col>
        </Row>
      </Container>
      <div className="right">
        {/* <div id="revue-embed">
          <form
            action="https://www.getrevue.co/profile/sambrown0322/add_subscriber"
            method="post"
            id="revue-form"
            name="revue-form"
            target="_blank"
          >
            <div class="revue-form-group">
              <label for="member_email">Email address</label>
              <input
                class="revue-form-field"
                placeholder="Your email address..."
                type="email"
                name="member[email]"
                id="member_email"
              />
            </div>
            <div class="revue-form-group">
              <label for="member_first_name">
                First name <span class="optional">(Optional)</span>
              </label>
              <input
                class="revue-form-field"
                placeholder="First name... (Optional)"
                type="text"
                name="member[first_name]"
                id="member_first_name"
              />
            </div>
            <div class="revue-form-group">
              <label for="member_last_name">
                Last name <span class="optional">(Optional)</span>
              </label>
              <input
                class="revue-form-field"
                placeholder="Last name... (Optional)"
                type="text"
                name="member[last_name]"
                id="member_last_name"
              />
            </div>
            <div class="revue-form-actions">
              <input
                type="submit"
                value="Subscribe"
                name="member[subscribe]"
                id="member_submit"
              />
            </div>
            <div class="revue-form-footer">
              By subscribing, you agree with Revue’s{" "}
              <a target="_blank" href="https://www.getrevue.co/terms">
                Terms
              </a>{" "}
              and{" "}
              <a target="_blank" href="https://www.getrevue.co/privacy">
                Privacy Policy
              </a>
              .
            </div>
          </form>
        </div> */}

        <Form
          className="plantrFont-secondary"
          action="https://www.getrevue.co/profile/sambrown0322/add_subscriber"
          method="post"
          id="revue-form"
          name="revue-form"
          target="_blank"
        >
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
                name="member[email]"
                id="member_email"
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
