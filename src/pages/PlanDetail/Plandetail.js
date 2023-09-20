import React from "react";
import Thumbsgallery from "../../ui/thumbsGallery/Thumbsgallery";
import Desription from "../../ui/PlansDetaideDesription/Desription";
import Paymentfile from "../../ui/PaymentFile/Paymentfile";
// import planDetailData from "../../assets/Data/plansDetails";
import homeplanData from "../../assets/Data/homeplans";
import { useParams } from "react-router-dom";



function Plandetail() {
  const {params} = useParams()
  // const houses  = [1,2,3,4,5,6,7,8]
  const  singleplantIem = homeplanData.find((item) => item.id== params)
  // console.log(singleplantIem)


  return (
    <>
      <div className="container">
        <div className="row">
          {/* {params} */}
          <div className="col-md-6">
      
                   <Thumbsgallery house={singleplantIem}/>
                <Desription desriptionhome={singleplantIem}/>
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
