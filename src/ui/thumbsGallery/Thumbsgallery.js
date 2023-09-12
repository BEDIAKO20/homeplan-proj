import React ,{useState}from 'react'
import "../thumbsGallery/Thumbsgallery.css"
import   homePlans from "../../assets/houseplan3.jpg"
import homePlans2 from "../../assets/houseplan4.jpg"
import homePlans3 from "../../assets/houseplan5.jpg"
import homePlans4 from "../../assets/houseplan6.jpg"

function Thumbsgallerys() {

  const image=[
    {id:0, value:homePlans},
    {id:1, value:homePlans4},
    {id:2, value:homePlans3},
    {id:3, value:homePlans2},
  ]
  const [sliderData,setSliderData]=useState(image[0])

  const handleClick =(index)=>{
    console.log(index);
    const slider =image[index];
    setSliderData(slider);
  }
  
  return (
    <div> 
      <img src={sliderData.value} height="300" width="500"/>
      <div className='flex_row'>

      
      {
        image.map((data,i) =>
        <div className='thumbgallery'>
 <img key={data.id} src={data.value} onClick={()=>handleClick(i)} height="70" width="100" className='thumbgimage' />
        </div>
       
        )
      }
      </div>
    </div>
  )
}

export default Thumbsgallerys