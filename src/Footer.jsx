import "./Footer.css";
import photo from "./images/plant 1.png"
import img34 from "./images/FB.png"
import img35 from "./images/LI.png"
import img36 from "./images/TW.png"
export default function Footer(){

return(


<footer>

<div className="div6">



      <div className="div9">
       <img src={photo} className="Photo"></img>
       <h3>Planto.</h3>
       <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum nam quaerat odit quae, adipisci, possimus soluta iure voluptates aliquam laborum illo architecto maiores totam quo doloremque. Tenetur nemo qui blanditiis.</p>
       <img src={img34} className="Photo12"></img>
       <img src={img35} className="Photo13"></img>
       <img src={img36} className="Photo14"></img>
      </div>
      


    <div className="div8">
        <h3>Quick Links</h3>
        <ul className="ull">
            <li className="liii">Home</li>
            <li  className="liii">Types of Plants</li>
            <li  className="liii">Contact</li>
            <li  className="liii">Privacy</li>
        </ul>
    </div>



   <div className="div7">
    <h2>For Every Update</h2>
    <div className="booxxx">
    <input className="Searchbox" type="textbox" placeholder="Enter Email"></input><button>SUBSCRIBE</button>
    </div>
    <p>Plants &copy; all right reserve</p>
   </div>




</div>
</footer>
);


}