import React from "react";
import { FaPatreon } from "react-icons/fa";

export default function Donate() {
  return (
    <div>
      <h1 className="plantrFont">Support</h1>
      <h3 className="plantrFont">Shop</h3>
      Help Plantr get off the ground by purchasing some of our gear!
      <a href="https://teespring.com/stores/plantr?page=1" target="_blank">
        Plantr Shop
      </a>
      <h3 className="plantrFont">Donate</h3>
      <p>
        Help us grow quicker by donating a few bucks a month. We appreciate all
        the help we can get!
      </p>
      <button>
        <a
          href="https://www.patreon.com/bePatron?u=40829391&redirect_uri=https%3A%2F%2Favocado-turbot-ed5y.squarespace.com%2Fgrow&utm_medium=widget"
          className="nav-link"
        >
          <FaPatreon size={75} />
        </a>
        <p>Become a patron</p>
      </button>
    </div>
  );
}
