import React from "react";
import "./App.css"
import abo from './images/abo.jpg'

const About=()=>{
    return(
        <div className="about">
            <div>
            <h2>About Us</h2>
            <h3> We have varieties of hydroponics systems .
You can select as per your need .</h3><h3>
We deals in commercial as well as small hydroponics setup which is suitable for indoor farming.</h3>
<h3>We also provide ready made systems which takes less space and give more production.</h3>
</div>
         <div>
         <img src={abo} alt='' />

     </div>
     </div>


    )
};

export default About;