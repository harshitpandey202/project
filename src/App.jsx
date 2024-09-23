import List from './List.jsx';
 import Commentlist from './Commentlist.jsx'
 import Sliderlist from './Sliderlist.jsx'
import Major from './Major.jsx';
import Footer from './Footer.jsx';
import "./App.css";
import pic from "./images/sliderss.png"
import Navbar from './Navbar.jsx';


function App() {
  

  return (
    
  <>
  <div>

    <Navbar/>
  </div>

     <div>
     <Major/>
      <div className='box'> <h4>Our Top Selling</h4></div>


    <List/>



    <h4 className='box1'>Customer Review</h4>


   <div>
   <Commentlist/>
  </div> 



  <h4 className='box2'>Our Best O2</h4>


  <Sliderlist/> 
  <div className='pic'>
   <img src={pic} className='pic1'></img>
  </div>
  <Footer/>


  </div>
  </>
  );
}

export default App
