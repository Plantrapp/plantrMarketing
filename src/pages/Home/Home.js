import React from "react";
// import vegetables from "../../assets/images/vegetables-752153_1920.jpg";
import "./Home.css";

export default function Home() {
  return (
    <div>
      {/* <img className="opaque" src={vegetables} /> */}
      <div className="opaque">
        <p id="motto">Let nature work for you</p>
        <p>
          Here at Plantr, we believe that everyone should have access to
          sustainable gardens that are good for your wallet and the environment.
        </p>
      </div>
      <h2>Why Plantr?</h2>
      <div>
        <h3>Easy</h3>
        <p>
          Download the Plantr App *insert links to app store and google store*
        </p>
        <p>Make an account and select your role *insert screenshots*</p>
        <p>
          Connect with others around you to find how you can become a
          permaculture expert, all from the comfort of your own home. *insert
          map*
        </p>
        <h3>Sustainable</h3>
        <h3>Eco-Friendly and Cost Effective</h3>
        <p>
          No more wasting water on dying grass. Instead, use your water to grow
          the garden of your dreams! It takes less water and you can grow your
          very own fruits and vegetables, which means savings on your water and
          grocery bills!
        </p>
      </div>
    </div>
  );
}
