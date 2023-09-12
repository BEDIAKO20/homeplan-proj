import React from 'react'
import '../CardDl/card.css'
// import homeplan  from '../../assets/homeplans1.jpg'
import homeplanData from "../../assets/Data/homeplans"
 import { NavLink } from 'react-router-dom'






function Carddi() {
  console.log(homeplanData)
  return (
    <div>
    <div className='container-md    me-5   card-container'>
      <div className='row'>
        {homeplanData.map((item) => (
          <div className='col-md-3 col-12 me-5  ' key={item.id}>
            <div class="card-wrapper" >
              <div class="card-top ">
                <img class="image" src={item.imgUrl} alt={item.plantry} />
              </div>
              <div class="card-bottom">
                <span class="top-text  text-sm-end">{item.plantry}</span><br/>
                <span class="bottom-text text-sm-end">{item.aboutplan}</span><br/>
                <NavLink to="/plandetail"  className="button ">Get it</NavLink>
                {/* <button class="button text-sm-end" to>Join Us</button> */}

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  )
}

export default Carddi