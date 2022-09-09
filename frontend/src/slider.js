import React, { Component } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import h2 from './images/h2.jpg'
import h4 from './images/h4.jpg'
import h3 from './images/h3.jpg'
import h5 from './images/h5.jpg'
import h1 from './images/h1.jpg'
import h7 from './images/tray.jpg'
import h6 from './images/greens.jpeg'
import pump from './images/pump.jpg'




export default class SimpleSlider extends Component {
  render(){
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "50px",
      slidesToShow: 3,
      speed: 500,
    };
  
    return (
        
        <div className="card">
        <div className="card-top">
        <h1>Different Types of Hydroponics System</h1>
        <Slider {...settings}>

          <div  className="car">
          <img src={h2} alt="" />
          <h4>DWC hydroponic system</h4>
          <h4>Deep Water Culture is one of the most simple and efficient hydroponics technique, 
            the plant grows in a net pot filled in a small quantity of clay pebbles,
             the roots develop immersed in a water based mineral solution costantly oxygenated by an air pump</h4>
          </div>
          <div className="car">
          <img src={h4} alt="" />
          <h3>NFT system</h3>
          <h4>Nutrient film technique (NFT) systems suspend plants 
            above a stream of continuously flowing nutrient solution that washes 
            over the ends of the plant’s root systems. The channels holding the 
            plants are tilted, allowing water to run down the length of the grow tray
             before draining into the reservoir below. The water in the reservoir is then 
             aerated via air stone.  </h4>
          </div>
          <div className="car">
          <img src={h6} alt="" />
          <h3>Industrial level hydroponic system</h3>
          <h4>Nutrient film technique (NFT) systems suspend plants 
            above a stream of continuously flowing nutrient solution that washes 
            over the ends of the plant’s root systems. The channels holding the 
            plants are tilted, allowing water to run down the length of the grow tray
             before draining into the reservoir below. The water in the reservoir is then 
             aerated via air stone.  </h4>
          </div>
          <p></p>
          <div className="car">
          <img src={h3} alt="" />
          <h3>Tray system</h3>
          <h4>Effective • Low maintenance • Power efficient • Seamless finish • Reliable •
                     High performance Plastic Tray For Making Hydrophonic Grass, hydroponic tray in pune,
                     green fodder grass growing tray, tray for green fodder growing in maharashtra,
                     green fodder grass trays , maize fodder tray, maize hydroponic grow trays.
                    plastic tray, agricultural tray, tray for grass growing, corn tray.</h4>
          </div>
          
        </Slider>
        </div>
        <div className="cart">
        <h1>Equipments Used in Hydroponics System</h1>
                <Slider {...settings}>
                <div  className="car">
                <img src={h5} alt="" />
                <h3>Net Pots</h3>
                <h4>Net pots come in various sizes and can be used in various applications to suit your needs.
                     We at Hydrilla meticulously working to provide Net pots which suit variety of 
                     growing medium and provide plants good support. Net Pots allow liquid to flow freely
                      past the roots of the plants they contain, facilitating the uptake of nutrients. 
                </h4>
                </div>
                <div className="car">
                <img src={h1} alt="" />
                <h3>NFT Pipes</h3>
                <h4>A properly designed NFT system is based on using the right channel slope, 
                    the right flow rate, and the right channel length. The plant roots are exposed to 
                    adequate supplies of water, oxygen and nutrients. In earlier production systems,
                     there was a conflict between the supply of these requirements, since excessive or deficient amounts of one results in an imbalance of one .</h4>
                </div>
                <div className="car">
                <img src={h7} alt="" />
                <h3>Oasis cubes</h3>
                <h4>Oasis cubes are high density high drainage grow media for hydroponics farming. 
                    They provide more than 90% germination rate and are easy to handle. 
                    Inorganic and Sterile Growing Medium A Superior Medium For Rooting Cuttings Encourages
                     Faster Initial Rooting and Its Firmness Is Guaranteed Provides 20% Air Space When Saturated !</h4>
                </div>
                <p></p>
                <div className="car">
                <img src={pump} alt="" />
                <h3>Oxygen Pump</h3>
                <h4>The function of an aquarium air pump is to provide more oxygen to the water. 
                    The pump pulls in atmospheric air through airline tubing, 
                    passes it across an air stone, and releases it as bubbles into the aquarium water. 
                    These bubbles are then consumed by fish and other aquatic life, providing them with more oxygen.</h4>
                </div>
                
              </Slider>
              </div>
              </div>
    );
  }
}