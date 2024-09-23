import img856 from "./images/6.png"
import img97 from "./images/SHOP.png";
import "./Card.css";

export default function Card5() {
    return (
        <div className="Card">
            <img src={img856} className="pp1"></img>
            
            <h2>Calathea plants </h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis, possimus?</p>
            <div className="price">
                <h2>Rs - 359/-</h2>
            </div>
            <img src={img97} className="img97" alt="Shop" />
        </div>
    );
}