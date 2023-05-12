import React from "react";
import "./HornsModule.scss";
import cyberHorns from "../Assets/Cyber Horns";
import { CornerCard } from "../components/CornerCard/CornerCard";

// component takes in props of an array of card objects
// card: { title: string, copy: string }

export const HornsModule = () => {
  const cards = [
    {
      title: "Highly Sought Experts",
      copy: "A Fractional CMO's MO is to take your business' marketing by the horns and run with it. Our client's enjoy the luxury of having experienced and competent marketing direction without the pains of in-house infrastructure.",
    },
  ];

  const generateCards = () => {
    return cards.map((card) => {
      return <CornerCard card={card} />;
    });
  };

  return (
    <main>
      <div className="horns">{cyberHorns}</div>
      <section>{generateCards()}</section>
    </main>
  );
};
