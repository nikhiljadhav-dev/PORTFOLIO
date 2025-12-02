import "./achivements.css";
import Img11 from '../images/img11.png';
import Img12 from '../images/img12.jpg';
import Img13 from '../images/img13.jpg';
import Img14 from '../images/img14.png';



function Achivements() {
  return (
  <div className="Achivements">
      <div className="Achcont">
        <div className="Achcard1"> 
              <i class="fa-solid fa-trophy" id="fa-regular-ach1"></i>
              <h1 className="Achcard1-1">ACHIVEMENTS</h1>
        </div>
        <div className="Achcard2"></div>
        <div className="Achcard3">
             <div className="Achcard3-1">
                  <div className="Achcard3-11">
                       <img src={Img11} alt="Logo" className="img7"></img>
                  </div>
                  <div className="Achcard3-11">
                       <img src={Img12} alt="Logo" className="img7"></img> 
                  </div>
             </div>
             <div className="Achcard3-1b">
                  <div className="Achcard3-11b">
                       <img src={Img13} alt="Logo" className="img7"></img>
                  </div>
                  <div className="Achcard3-11b">
                       <img src={Img14} alt="Logo" className="img7"></img>
                  </div>
             </div>
        </div>
      </div>
  </div>
  );
}

export default Achivements