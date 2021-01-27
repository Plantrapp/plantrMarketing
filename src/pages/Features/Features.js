import React from "react";
import "./Features.css";

export default function Features() {
  return (
    <div className="nav-bar-padding">
      <h1 className="plantrFont">Features</h1>
      <div className="features">
        <section>
          <h3 className="plantrFont">Plantrs</h3>
          <p>
            The homeowners and/or hobby gardners who are looking to hire
            professional help
          </p>
          <hr />
          <ul className="lists">
            <li>Find nearby Growrs</li>
            <li>View a Growr's inventory</li>
            <li>Send messages to Growrs you're interested in working with</li>
            <li>
              Learn more about permaculture and climate change through the Learn
              tab
            </li>
            <li>
              Virtual Garden gives you reminders and tips on caring for your
              plants
            </li>
            <li>Save the world.</li>
          </ul>
        </section>
        <section>
          <h3 className="plantrFont">Growrs</h3>
          <p>The permaculture experts who are marketing their skills</p>
          <hr />
          <ul className="lists">
            <li>Set your hourly rate</li>
            <li>Set your discovery radius</li>
            <li>Add new plants to your inventory</li>
            <li>Respond to messages from Plantrs</li>
            <li>Post permaculture and climate change tips to the Learn tab</li>
            <li>View and manage your customer base</li>
            <li>Save the world.</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
