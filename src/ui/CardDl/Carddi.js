import React from 'react'
import '../CardDl/card.css'
// import homeplan  from '../../assets/homeplans1.jpg'
import homeplanData from "../../assets/Data/homeplans"







function Carddi() {
  console.log(homeplanData)
  return (
    <div>
    <div className='container mb-5'>
      <div className='row'>
        {homeplanData.map((item) => (
          <div className='col-lg-3 col-md-3 col-6  ' key={item.id}>
            <div class="card-wrapper w-100" >
              <div class="card-top w-100">
                <img class="image" src={item.imgUrl} alt={item.plantry} />
              </div>
              <div class="card-bottom">
                <span class="top-text  text-sm-end">{item.plantry}</span><br/>
                <span class="bottom-text text-sm-end">{item.aboutplan}</span><br/>
                <button class="button text-sm-end">Join Us</button>
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