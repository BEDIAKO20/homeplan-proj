import React from "react";
import Thumbsgallery from "../../ui/thumbsGallery/Thumbsgallery";



function Plandetail() {
 const thumbnailImage=[
    '../assets/houseplans1.jpg',
    '../../assets/houseplans1.jpg',
    '../../assets/houseplans1.jpg',
    '../../assets/houseplans1.jpg',
    '../../assets/houseplans1.jpg',
    '../../assets/houseplans1.jpg',
 ]

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-12">
            <Thumbsgallery images={thumbnailImage}/>
          </div>
          <div className="col-md-6 col-12"></div>
        </div>
      </div>
    </>
  );
}

export default Plandetail;
