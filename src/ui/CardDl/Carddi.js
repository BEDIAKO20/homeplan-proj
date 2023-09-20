import React from 'react'
import '../CardDl/card.css'
// import homeplan  from '../../assets/homeplans1.jpg'
// import homeplanData from "../../assets/Data/homeplans"
 import { NavLink } from 'react-router-dom'






function Carddi(props) {
const {imgUrl,plantry,aboutplan,id} = props.item
  return (
    <div>
    <div className=' me-5   card-container'>
            <div class="card-wrapper" >
              <div class="card-top ">
                <img class="image" src={imgUrl} alt='plantry' />
              </div>
              <div class="card-bottom">
                <span class="top-text  text-sm-end">{plantry}</span><br/>
                <span class="bottom-text text-sm-end">{aboutplan}</span><br/>
              <NavLink to={`/plandetail/${id}`}  className="button ">Get it</NavLink>
                {/* <button class="button text-sm-end" to>Join Us</button> */}
              </div>
            </div>
         
    </div>
  </div>
  )
}

export default Carddi