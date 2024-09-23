import "./Slider.css";
import img12 from "./images/2.png"
import img334 from "./images/left.png"
import img335 from "./images/right.png"


export default function Slider(){

return(

<div className="Slide">
    <img className="photo1" src={img12}></img>
    <p className="Head1">We Have Small And Best O2 vPlants Collections</p>
    <p className="Head2"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error placeat commodi aspernatur recusandae rerum accusantium temporibus velit ad cumque, nisi, itaque quibusdam cupiditate fuga explicabo alias dicta nobis! Numquam, aliquid.Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore reiciendis omnis laboriosam eos sapiente, exercitationem officia at quo ratione unde.</p>
    <p className="Head3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum assumenda placeat earum? Exercitationem mollitia nemo, fuga sapiente repellendus aliquid autem?Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi eum aliquid molestiae quidem perspiciatis sequi inventore, doloremque quo. Molestias, ea!</p>
   <button className="btn">Explore</button>
   
   <div className="a11112"><img src={img334} className="img334"></img></div>
   
   <div className="a11113"><img src={img335} className="img335"></img></div>
   <button className="btn12">01/4</button>
    
</div>

);

}