import React, { useEffect, useState } from "react";
import { advertisement } from "../Data";
import { FlatButton } from "./FlatButton";
import { CountdownTimer } from "./CountDown";



export const Features = () => {
  return (
    <section id="features">
      <div className="container-fluid">
        <h3 style={{ textAlign: "center" }}>Deals</h3><br />
        <div className="advertGrid">
          {advertisement.map((ads, index) => (
            <div className="advertDisplay" key={index}>
              <h4>{ads.title}</h4>
              <p>{ads.desc}</p>
              <p>{ads.catch}</p>
              <strong>{ads.urgency}</strong>
              <div><small>**{ads.notice}</small></div>

              {/* Countdown Timer */}
              <CountdownTimer duration={10 * 24 * 60 * 60} /> {/* 600s = 10 mins */}

              <FlatButton title="claim Deal" onCLick={ads.sendRequest} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
