import React from "react";
import Thumbsgallery from "../../ui/thumbsGallery/Thumbsgallery";
import Desription from "../../ui/PlansDetaideDesription/Desription";
import Paymentfile from "../../ui/PaymentFile/Paymentfile";



function Plandetail() {

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
           
                <Thumbsgallery/>
                <Desription/>
              </div>
            
          <div className="col-md-6 col-12">
          <Paymentfile/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Plandetail;
