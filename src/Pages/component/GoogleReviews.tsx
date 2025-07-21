import { useEffect } from "react";
import { FlatButton } from "../../shared/FlatButton";
import {GoogleCircleFilled} from '@ant-design/icons'
import Marquee from "react-fast-marquee";

export const GoogleReviews = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://widgets.sociablekit.com/google-reviews/widget.js";
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <p>Customer Satisfaction</p>
            <h3>Hear from Our Happy Customers</h3>
            <div>
              <a href="#"><FlatButton title="Review us on " icon={<GoogleCircleFilled/>}/></a>
            </div>
          </div>
          <div className="col-md-9">
            <div className="fade-marquee">
              <Marquee>
              <div className="sk-ww-google-reviews" data-embed-id="25579832"></div>
            </Marquee>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

