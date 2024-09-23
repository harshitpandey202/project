import "./Navbar.css";
import img651 from "./images/plant 1.png"
import img652 from "./images/21.png"
import img653 from "./images/22.png"
import img654 from "./images/23.png"



export default function Navbar(){

return (

<div className="D0">
<div className="D1">
    <img src={img651} className="img651" ></img>
    <h2> Planto</h2>
</div>


<div className="D2">
<ul>
<li>Home</li>
<li>Types of Plants</li>
<li>Contact us</li>
<li>More</li>
</ul>
</div>


<div className="D3">

<img src={img652} className="img652"></img>
<img src={img653} className="img653"></img>
<img src={img654} className="img654"></img>
</div>

</div>);


}