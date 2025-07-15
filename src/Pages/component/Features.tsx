

import { advertisement } from "../../shared/Types";
import { FlatButton } from "../../shared/FlatButton";




export const Features = ({advertisement}:advertisement) => {
  return (
    <section id="features">
      <div className="container-fluid">
        <h2>Deals</h2><br />
        <div className="advertGrid">
          {advertisement.map((ads, index) => (
            <div className="advertDisplay" key={index}>
              <h4>{ads.title}</h4>
              <p>{ads.desc}</p>
              <p>{ads.catch}</p>
              <strong>{ads.urgency}</strong>
              <div><small>**{ads.notice}</small></div>


              <FlatButton title="Claim Deal" onClick={ads.sendRequest} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
