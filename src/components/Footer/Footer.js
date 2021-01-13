import React, { useState } from "react";
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  const [formValue, setFormValue] = useState("");
  return (
    <footer>
      <div>Site Map</div>
      <div className="right">
        <form>
          <label htmlFor="subscribe">
            Subscribe to our newsletter:
            <input
              type="email"
              name="subscribe"
              value={formValue}
              onChange={(e) => setFormValue(e.target.value)}
              placeholder="Enter E-mail Address"
            />
          </label>
        </form>
        <div className="socials">
          <a
            href="https://www.youtube.com/channel/UCS-dlSvy-wa64lyGy2ppivw/featured"
            target="_blank"
            // className="nav-link"
          >
            <FaYoutube size={20} />
          </a>
          <a
            href="https://www.facebook.com/Plantrappofficial"
            target="_blank"
            // className="nav-link"
          >
            <FaFacebook size={20} />
          </a>
          <a
            href="https://www.instagram.com/plantrappofficial/"
            target="_blank"
            // className="nav-link"
          >
            <FaInstagram size={20} />
          </a>
          <a
            href="https://twitter.com/AppPlantr"
            target="_blank"
            // className="nav-link"
          >
            <FaTwitter size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
