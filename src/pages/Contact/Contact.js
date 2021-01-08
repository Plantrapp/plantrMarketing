import React from "react";
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";

export default function Contact() {
  return (
    <div>
      <h1>Contact Us</h1>
      <a href="mailto:plantrappofficial@gmail.com">Email Us</a>
      <a href="tel:5418108414">Call us at 541-810-8414</a>
      <a
        href="https://www.youtube.com/channel/UCS-dlSvy-wa64lyGy2ppivw/featured"
        target="_blank"
        className="nav-link"
      >
        <FaYoutube size={50} />
      </a>
      <a
        href="https://www.facebook.com/Plantrappofficial"
        target="_blank"
        className="nav-link"
      >
        <FaFacebook size={50} />
      </a>
      <a
        href="https://www.instagram.com/plantrappofficial/"
        target="_blank"
        className="nav-link"
      >
        <FaInstagram size={50} />
      </a>
      <a
        href="https://twitter.com/AppPlantr"
        target="_blank"
        className="nav-link"
      >
        <FaTwitter size={50} />
      </a>
    </div>
  );
}
