import React from "react";
import "./HornsModule.scss";
import cyberHorns from "../Assets/Cyber Horns";
import { CornerCard } from "../components/CornerCard/CornerCard";

// component takes in props of an array of card objects
// card: { title: string, copy: string }

export const HornsModule = ({ windowWidth }) => {
  const cards = [
    {
      title: "Highly Sought Experts",
      copy: "A Fractional CMO's MO is to take your business' marketing by the horns and run with it. Our client's enjoy the luxury of having experienced and competent marketing direction without the pains of in-house infrastructure.",
    },
    {
      title: "All-American Team of Marketers",
      copy: "Imagine hiring a Fractional CMO that has an all-American team of marketers behind them. Our team is full of the best copywriters, SEO specialists, Ad Managers, Social Media Managers, Graphic Designers, Web Developers, and Email Marketing Managers.",
    },
    {
      title: "Entrepreneur Mindset",
      copy: "The team we've built has been hand-selected for people that have worked with hundreds of businesses so we can understand the pain you are facing and the things you are thinking about and meet you where you are.",
    },
  ];

  const generateCards = () => {
    return cards.map((card) => {
      return <CornerCard key={card.title} card={card} />;
    });
  };

  return (
    <main id="horns-module">
      <div className="horns-title">
        <h2 className="title">
          Faster Growth with a{" "}
          <span style={{ color: "#E11F26" }}>fractional</span>
          <br />
          chief marketing officer
        </h2>
      </div>
      <div className="horns-svg">{cyberHorns}</div>
      <section
        className={`cards-container ${
          windowWidth > 700 ? "horizontal" : "vertical"
        }`}
      >
        {generateCards()}
      </section>
      <div className="horns-footer">
        <h4 className="footer-text">Hire your new CMO</h4>{" "}
        <svg
          width="28"
          height="16"
          viewBox="0 0 28 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M27.7071 8.70695C28.0976 8.31643 28.0976 7.68326 27.7071 7.29274L21.3431 0.92878C20.9526 0.538255 20.3195 0.538255 19.9289 0.92878C19.5384 1.3193 19.5384 1.95247 19.9289 2.34299L25.5858 7.99985L19.9289 13.6567C19.5384 14.0472 19.5384 14.6804 19.9289 15.0709C20.3195 15.4614 20.9526 15.4614 21.3431 15.0709L27.7071 8.70695ZM0 8.99985L27 8.99985V6.99985L0 6.99985L0 8.99985Z"
            fill="#E11F26"
          />
        </svg>
      </div>
    </main>
  );
};
