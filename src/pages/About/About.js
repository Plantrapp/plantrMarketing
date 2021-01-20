import React, { useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import Carousel from "react-bootstrap/Carousel";
import Sam from "../../assets/images/samPic.png";
import Zave from "../../assets/images/zavePic.jpg";
import Shane from "../../assets/images/shaneDavis.jpg";
import "./About.css";

export default function About() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="nav-bar-padding">
      <section className="mission">
        <h3 className="plantrFont">Our Mission</h3>
        <h4 className="plantrFont text-left">Feed Yourself. Feed the World.</h4>
        <p className="text-left">
          At Plantr, we believe wholesome and organic food is a basic human
          right. Everyone should have access to it. That's why we're teaming up
          permaculture experts with homeowners who would like to use their
          services. Clients can use the platform to find a local expert to
          design and maintain an organic food growing garden,for a monthly
          subscription. What's better is that any excess food can be donated to
          local food banks.
        </p>
        <hr />
        <h3 className="plantrFont text-left">
          Designers, Gardeners, Builders and Landscaping Professionals
        </h3>
        <p className="text-left ">
          Reach new customers. Share your talents and skills. Show examples of
          your work. Get more projects. Network with other Permaculture Experts.
        </p>
        <hr />
        <h3 className="plantrFont text-left">Homeowners and Hobby Gardeners</h3>
        <p className="text-left">
          Get to know the experts in your area and streamline your shopping
          experience. Save time. Grow your very own organic food.
        </p>
      </section>
      <hr />
      <h3 className="plantrFont">Meet the Team</h3>
      <div className="carousel-container">
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <div className="cItem">
              <img className="avatar" src={Shane} />
              <div className="bio">
                <h3 className="plantrFont">Shane Davis</h3>
                <h4>Founder, CEO</h4>
                <p>
                  Shane Davis is a Marine Corps Veteran with a background in
                  security working with HMX-1. During his time in the service,
                  Shane’s travels opened his eyes to the devastating effects of
                  food scarcity for the worlds population. He was also a witness
                  to the effects of over production of farm land and its natural
                  resources. Through research and connection, Shane found
                  permaculture as a solution for problems facing modern food
                  production.
                </p>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="cItem">
              <img className="avatar" src={Sam} />
              <div className="bio">
                <h3 className="plantrFont">Samuel Brown</h3>
                <h4>Web Developer</h4>
                <p>
                  Samuel Brown is a full-stack web developer who wants to use
                  his skills and passion to create a better world. Sam enjoys
                  sports, video games, music, and interesting technology.
                </p>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="cItem">
              <img className="avatar" src={Zave} />
              <div className="bio">
                <h3 className="plantrFont">Zavier Guadalupe</h3>
                <h4>Web Developer</h4>
                <p>
                  Samuel Brown is a full-stack web developer who wants to use
                  his skills and passion to create a better world. Sam enjoys
                  sports, video games, music, and interesting technology.
                </p>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="avatarSelect">
        <img
          src={Shane}
          onClick={() => setIndex(0)}
          className={index === 0 ? "selected" : null}
        />
        <img
          src={Sam}
          onClick={() => setIndex(1)}
          className={index === 1 ? "selected" : null}
        />
        <img
          src={Zave}
          onClick={() => setIndex(2)}
          className={index === 2 ? "selected" : null}
        />
      </div>
    </div>
  );
}
