import React from 'react'
// Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';
// import houseplan  from "../../assets/houseplans1.jpg"
// import houseplan2  from "../../assets/houseplans2.jpg"
// import houseplan3  from "../../assets/houseplan3.jpg"
// import houseplan4  from "../../assets/houseplan4.jpg"
// import houseplan5  from "../../assets/houseplan5.jpg"
// import houseplan6  from "../../assets/houseplan6.jpg"
// import houseplan7  from "../../assets/houseplan7.jpg"
 import "../carousel/carousel.css"


function Carousel() {
  return (
    <div id="welcomeCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#welcomeCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Welcome 1"></button>
      <button type="button" data-bs-target="#welcomeCarousel" data-bs-slide-to="1" aria-label="Welcome 2"></button>
      <button type="button" data-bs-target="#welcomeCarousel" data-bs-slide-to="2" aria-label="Welcome 3"></button>
    </div>
    <div className="carousel-inner">
      <div className="carousel-item welcome-carousel-image1 active">
        <div className="carousel-caption">
          <h1>Welcome to Manaspace group</h1>
          <p>High-quality images and visual representations of the building plan.</p>
        </div>
      </div>
      <div className="carousel-item welcome-carousel-image2">
        <div className="carousel-caption text-start">
          <h1>Download Options, <br/> Including Different File Format</h1>
          <p>Download Your Building Plans.</p>
          <p><a className="btn btn-lg " href="piesubscription.html" role="button" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap">Sign up today</a></p>
        </div>
      </div>
      <div className="carousel-item welcome-carousel-image3">
        <div className="carousel-caption ">
          <h1> Provide Useful Tips For Users Interested In Construction And Architecture</h1>
          <p>Download And Enjoy  Now.</p>
          <button type="button" className="btn " id="liveToastBtn">SUBSCRIBE</button>
          {/* ... Toast component */}
        </div>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#welcomeCarousel" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#welcomeCarousel" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
    )
}

export default Carousel
