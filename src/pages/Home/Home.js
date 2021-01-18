import React from "react";
// import vegetables from "../../assets/images/vegetables-752153_1920.jpg";
import "./Home.css";
import NavBar from "../../components/NavBar/NavBar";
import { FaSeedling, FaCoins, FaCheckDouble } from "react-icons/fa";
import vineyard from "../../assets/images/vineyard-428041_1920.jpg";

export default function Home() {
  return (
    <div>
      {/* <img className="opaque" src={vegetables} /> */}
      <div className="opaque">
        <NavBar />
        <h3 className="plantrFont">Let nature work for you</h3>
        <p>
          Here at Plantr, we believe that everyone should have access to
          sustainable gardens that are good for your wallet and the environment.
        </p>
      </div>
      <h2 className="plantrFont">Why Plantr?</h2>
      <div className="why">
        <div>
          <h3 className="plantrFont">Easy</h3>
          <FaCheckDouble size={50} />
          {/* <p>
            Download the Plantr App *insert links to app store and google store*
          </p>
          <p>Make an account and select your role *insert screenshots*</p> */}
          <p>
            Connect with others around you to find how you can become a
            permaculture expert, all from the comfort of your own home. *insert
            map*
          </p>
        </div>
        <div>
          <h3 className="plantrFont">Sustainable</h3>
          <FaSeedling size={50} />
        </div>
        <div>
          <h3 className="plantrFont">Cost Effective</h3>
          <FaCoins size={50} />
          <p>
            No more wasting water on dying grass. Instead, use your water to
            grow the garden of your dreams! It takes less water and you can grow
            your very own fruits and vegetables, which means savings on your
            water and grocery bills!
          </p>
        </div>
      </div>
      <h2 className="plantrFont">How does it work?</h2>
      <div className="how">
        <div className="outer-1">
          <img src={vineyard} />
          <div className="inner right">
            <h3 className="plantrFont">Create an account</h3>
            <p>
              Create a Plantr account and sign up as a Plantr if you're looking
              to connect with clients or a Growr if you're looking to hire
              talent.
            </p>
            <button>Sign up</button>
          </div>
        </div>
        <div>
          <h3 className="plantrFont right">Connect with others</h3>
          <p>
            Whether you're looking to market your permaculture skills or hire
            someone to help you get started in permaculture, connect with others
            in your area to achieve your goals.
          </p>
        </div>
        <div>
          <h3 className="plantrFont">GUILDS</h3>
          <p>
            For Plantrs who have big projects that are too much for one person
            to handle, form a GUILD with other Plantrs to work towards a common
            goal.
          </p>
        </div>
      </div>
    </div>
  );
}
