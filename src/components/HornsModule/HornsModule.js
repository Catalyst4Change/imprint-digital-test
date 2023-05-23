import React from "react";
import "./HornsModule.scss";
import cyberHorns from "../../Assets/Cyber Horns";
import { CornerCard } from "../../components/CornerCard/CornerCard";
import arrow from "../../Assets/Arrow.svg";

// component takes in props of an array of card objects
// card: { title: string, copy: string }

export const HornsModule = ({ windowWidth, breakPoint }) => {
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
          Faster Growth with a
          <span style={{ color: "#E11F26" }}>fractional</span>
          <br />
          chief marketing officer
        </h2>
      </div>
      {windowWidth > breakPoint && (
        <div className="horns-svg">{cyberHorns}</div>
      )}
      <section
        className={`cards-container ${
          windowWidth > breakPoint ? "horizontal" : "vertical"
        }`}
      >
        {generateCards()}
      </section>
      <div className="horns-footer">
        <h4 className="footer-text">Hire your new CMO</h4>
        <div className="arrow">{arrow}</div>
      </div>
    </main>
  );
};
