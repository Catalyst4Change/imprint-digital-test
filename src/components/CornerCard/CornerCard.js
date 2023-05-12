import React from "react";
import "./CornerCard.scss";

// component takes in props of card
// card: { title: string, copy: string }

export const CornerCard = ({ card }) => {
  return (
    <main className="corner-card">
      <div class="angled-greeble" />
      <div class="angled-line" />
      <div className="angled-div">
        {/* <h3>{card.title}</h3>
      <p>{card.copy}</p> */}
      </div>
    </main>
  );
};
