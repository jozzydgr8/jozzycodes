

import { advertisement } from "../Types";
import { FlatButton } from "./FlatButton";




export const Features = ({advertisement}:advertisement) => {
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


              <FlatButton title="Claim Deal" onCLick={ads.sendRequest} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
