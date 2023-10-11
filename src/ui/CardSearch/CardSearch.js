import React from "react";
import Cardpic1 from "../../assets/Cardpic1.jpg";
import Cardpic2 from "../../assets/Cardpic2.jpg";
import Cardpic3 from "../../assets/Cardpic3.jpg";
import { Form, FormGroup } from "react-bootstrap";
import "../CardSearch/CardSearch.css";
const FindForm = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div class="card  image-card">
              <div class="card-body">
                <img src={Cardpic1} class="img-thumbnail" alt="..." />
                <div className="mt-5">
                  <p className="card-text">
                    Welcome to your tranquil haven. Each corner whispers warmth,
                    inviting you to unwind in this comforting space.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div class="card">
              <div class="card-body">
                <img src={Cardpic2} class="img-thumbnail" alt="..." />
                <div className="mt-5">
                  <p className="card-text">
                    Step into serenit. This home is a sanctuary of peace, where
                    every room tells a story of comfort and coziness.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div class="card">
              <div class="card-body">
                <img src={Cardpic3} class="img-thumbnail" alt="..." />
                <div className="mt-5">
                  <p className="card-text">
                    Discover comfort in every detail. From soft lighting to
                    soothing sounds, this inviting home is your refuge of calm.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindForm;
