import React from "react";
// import vegetables from "../../assets/images/vegetables-752153_1920.jpg";
import "./Home.css";
import Styled from "styled-components";

const HomeStyled = Styled.div`
background-image: url("../../assets/images/landing-page-img.png");
  background-size: fill;
  background-repeat: no-repeat;
  background-position: center;
img {
  width: 50%;
}
.opaque {
  /* opacity: 0.6; */
  height: 40vh;
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 20px;
  font-size: 1.6rem;
  /* filter: brightness(60%); */
}
#motto {
  font-size: 2.4rem;
  opacity: 1;
  font-family:MarketingScript
}

`;

export default function Home() {
  return (
    <HomeStyled className="landing-backdrop">
      {/* <img className="opaque" src={vegetables} /> */}
      <div className="opaque">
        <h3 className="plantrFont">Let nature work for you</h3>
        <p>
          Here at Plantr,
          <br />
          we believe that everyone should have access to sustainable gardens
          that are good for your wallet and the environment.
        </p>
      </div>
      <h2 className="plantrFont">Why Plantr?</h2>
      <div className="why">
        <div>
          <h3 className="plantrFont">Easy</h3>
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
        </div>
        <div>
          <h3 className="plantrFont">Cost Effective</h3>
          <p>
            No more wasting water on dying grass. Instead, use your water to
            grow the garden of your dreams! It takes less water and you can grow
            your very own fruits and vegetables, which means savings on your
            water and grocery bills!
          </p>
        </div>
      </div>
    </HomeStyled>
  );
}
