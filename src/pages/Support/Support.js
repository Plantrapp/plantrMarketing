import React, { useState } from "react";
import { FaPatreon } from "react-icons/fa";
import Carousel from "react-bootstrap/Carousel";
import { Button } from "react-bootstrap";
import tShirt from "../../assets/images/560-2.jpg";
import sweats from "../../assets/images/560.jpg";
import hoodie from "../../assets/images/560-1.jpg";
import "./Support.css";

export default function Support() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div className="content nav-bar-padding ">
      <h3 className="plantrFont">Shop</h3>
      <div className="cContainer">
        <a href="https://teespring.com/stores/plantr?page=1" target="_blank">
          <Carousel onSelect={handleSelect} activeIndex={index} href="">
            <Carousel.Item>
              <img src={sweats} />
            </Carousel.Item>
            <Carousel.Item>
              <img src={hoodie} />
            </Carousel.Item>
            <Carousel.Item>
              <img src={tShirt} />
            </Carousel.Item>
          </Carousel>
        </a>
      </div>
      <div className="shopIcons">
        <img
          src={sweats}
          onClick={() => setIndex(0)}
          className={index === 0 ? "selected" : null}
        />
        <img
          src={hoodie}
          onClick={() => setIndex(1)}
          className={index === 1 ? "selected" : null}
        />
        <img
          src={tShirt}
          onClick={() => setIndex(2)}
          className={index === 2 ? "selected" : null}
        />
      </div>
      <p>
        Support Plantr and pick up some sweet gear at the same time! Visit our
        shop
      </p>
      <a></a>
      <Button href="https://teespring.com/stores/plantr?page=1" target="_blank">
        Shop
      </Button>
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
