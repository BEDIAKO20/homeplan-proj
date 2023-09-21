import React from "react";
import "../CardDl/card.css";
// import homeplan  from '../../assets/homeplans1.jpg'
import homeplanData from "../../assets/Data/homeplans";
import { NavLink } from "react-router-dom";

function Carddi() {
  // const {imgUrl,plantry,aboutplan,id} = props.item
  return (
    <div>
    <div className="container">
  <div className="row">
    {homeplanData.map((item) => (
      <div key={item.id} className="col-md-3 col-12">
        <div className="card-container">
          <div className="card-wrapper">
            <div className="card-top">
              <img className="image" src={item.imgUrl} alt="plantry" />
            </div>
            <div className="card-bottom">
              <span className="top-text text-sm-end">{item.plantry}</span>
              <br />
              <span className="bottom-text text-sm-end">{item.aboutplan}</span>
              <br />
              <NavLink to={`/plandetail/${item.id}`} className="button">
                Get it
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

    </div>
  );
}

export default Carddi;
