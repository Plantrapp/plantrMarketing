import React, { useEffect, useRef } from "react";
// import vegetables from "../../assets/images/vegetables-752153_1920.jpg";
import "./Home.css";
import NavBar from "../../components/NavBar/NavBar";
import { FaSeedling, FaCoins, FaCheckDouble } from "react-icons/fa";
import vineyard from "../../assets/images/vineyard-428041_1920.jpg";
import { Button, Col, Container, Row } from "react-bootstrap";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const main = useRef();
  const opaque = useRef();
  const why1 = useRef();
  const why2 = useRef();
  const why3 = useRef();
  const how_card = useRef();
  const connect_card = useRef();
  const guild_card = useRef();

  useEffect(() => {
    let why = gsap.timeline({
      scrollTrigger: { trigger: ".why_card1" },
    });
    //Main section
    gsap.from(opaque.current, {
      opacity: 0,
      duration: 2,
    });
    gsap.from(main.current, {
      duration: 2,
      y: 200,
      opacity: -2,
      ease: "back",
    });
    //Mid section
    why
      .from(why1.current, {
        duration: 1.5,
        y: 200,
        opacity: 0,
        ease: "back",
      })
      .from(
        why2.current,
        {
          duration: 1.5,
          y: 200,
          opacity: 0,
          ease: "back",
        },
        0.25
      )
      .from(
        why3.current,
        {
          duration: 1.5,
          y: 200,
          opacity: 0,
          ease: "back",
        },
        0.5
      );
    //Bottom section
    gsap.from(how_card.current, {
      scrollTrigger: {
        trigger: ".how_card",
        start: "top center",
      },
      duration: 1.75,
      x: -400,
      opacity: 0,
      ease: "back",
    });
    gsap.from(connect_card.current, {
      scrollTrigger: {
        trigger: ".connect_card",
        start: "top center",
      },
      duration: 1.75,
      x: 400,
      opacity: 0,
      ease: "back",
    });
    gsap.from(guild_card.current, {
      scrollTrigger: {
        trigger: ".guild_card",
        start: "top center",
      },
      duration: 1.75,
      x: -400,
      opacity: 0,
      ease: "back",
    });
  }, [how_card, connect_card, guild_card, why1, why2, why3]);

  return (
    <div>
      <div className="opaque nav-bar-padding" ref={opaque}>
        <div className="landing-container" ref={main}>
          <h1 className="plantrFont">Let nature work for you</h1>
          <p>
            Here at Plantr, we believe that everyone should have access to
            sustainable gardens that are good for your wallet and the
            environment.
          </p>
        </div>
      </div>
      <h2 className="plantrFont title">Why Plantr?</h2>
      <section className="why">
        <div className="why_card1" ref={why1}>
          <h3 className="plantrFont">Easy</h3>
          <FaCheckDouble size={50} className="icon" />
          <p className="text-left">
            Connect with others around you to find how you can become a
            permaculture expert, all from the comfort of your own home. *insert
            map*
          </p>
        </div>
        <div className="why_card2" ref={why2}>
          <h3 className="plantrFont">Sustainable</h3>
          <FaSeedling size={50} className="icon" />
          <p className="text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="why_card3" ref={why3}>
          <h3 className="plantrFont">Cost Effective</h3>
          <FaCoins size={50} className="icon" />
          <p className="text-left">
            No more wasting water on dying grass. Instead, use your water to
            grow the garden of your dreams! It takes less water and you can grow
            your very own fruits and vegetables, which means savings on your
            water and grocery bills!
          </p>
        </div>
      </section>

      <hr />

      <h2 className="plantrFont">How does it work?</h2>
      <section className="how">
        <div className="outer how_card" ref={how_card}>
          <img src={vineyard} />
          <div className="inner right">
            <h3 className="plantrFont">Create an account</h3>
            <p>
              Create a Plantr account and sign up as a Plantr if you're looking
              to connect with clients or a Growr if you're looking to hire
              talent.
            </p>
            <Button>Sign up</Button>
          </div>
        </div>

        <div className="outer o-left connect_card" ref={connect_card}>
          <div className="inner left">
            <h3 className="plantrFont">Connect with others</h3>
            <p>
              Whether you're looking to market your permaculture skills or hire
              someone to help you get started in permaculture, connect with
              others in your area to achieve your goals.
            </p>
            <Button>Learn More</Button>
          </div>
          <img src={vineyard} />
        </div>
        <div className="outer guild_card" ref={guild_card}>
          <img src={vineyard} />
          <div className="inner right">
            <h3 className="plantrFont">Guilds</h3>
            <p>
              For Plantrs who have big projects that are too much for one person
              to handle, form a GUILD with other Plantrs to work towards a
              common goal.
            </p>
            <Button>Learn More</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
