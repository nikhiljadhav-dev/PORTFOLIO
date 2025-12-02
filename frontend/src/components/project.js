import "./project.css";
import Img6 from '../images/img6.png';
import Img7 from '../images/img7.png';
import Readmore from './readmore'
import Readmoree from './readmoree'

function Project() {
  return (
    <div className="Project">
      <div className="procont">
        <div className="procont1">
          <i class="fa-solid fa-code" id="fa-regular-ach1"></i>
          <h1 className="procont1-1">PROJECTS</h1>
        </div>
        <div className="procont2"></div>
        <div className="procont3">
          <div className="procont3-1d">
            <div className="procont3-1">
              <div className="procont3-1-1">
                <img src={Img6} alt="Logo" className="img6"></img>
              </div>
              <div className="procont3-1-2">
                <h1 className="procont3-1-21">ResumeMatch</h1>
                <div className="procont3-1-22">
                  <img width="35" height="35" src="https://img.icons8.com/color/48/javascript--v1.png" alt="JavaScript" loading="lazy" />
                  <img width="35" height="35" src="https://img.icons8.com/color/480/python--v1.png" alt="Python" loading="lazy" />
                  <img width="35" height="35" src="https://img.icons8.com/color/144/nodejs.png" alt="Node.js" loading="lazy" />
                </div>
              </div>
              <Readmore />
              <div className="procont3-1-3">
                <a href="https://ats-resume-analyzer-pi.vercel.app/" target="_blank" className="procont3-1-31"><i class="fa-solid fa-arrow-up-right-from-square" id="fa-solid-pro1"></i>Live Demo</a>
                <a href="https://github.com/nikhiljadhav-dev/ATS-Resume-Analyzer" target="_blank" className="procont3-1-32"><i class="fa-brands fa-github" id="fa-solid-pro2"></i>GitHub</a>
              </div>
            </div>
          </div>
          <div className="procont3-1dd">
            <div className="procont3-1b">
              <div className="procont3-1-1">
                <img src={Img7} alt="Logo" className="img6"></img>
              </div>
              <div className="procont3-1-2">
                <h1 className="procont3-1-21">CROPIC-Prototype</h1>
                <div className="procont3-1-22b">
                  <img width="35" height="35" src="https://img.icons8.com/color/48/javascript--v1.png" alt="JavaScript" loading="lazy" />
                  <img width="35" height="35" src="https://img.icons8.com/color/480/python--v1.png" alt="Python" loading="lazy" />
                  <img width="35" height="35" src="https://img.icons8.com/color/144/nodejs.png" alt="Node.js" loading="lazy" />
                </div>
              </div>
              <Readmoree />
              <div className="procont3-1-3">
                <a href="https://cropic-prototype.onrender.com/" target="_blank" className="procont3-1-31"><i class="fa-solid fa-arrow-up-right-from-square" id="fa-solid-pro1"></i>Live Demo</a>
                <a href="https://github.com/nikhiljadhav-dev/CROPIC-Prototype" target="_blank" className="procont3-1-32"><i class="fa-brands fa-github" id="fa-solid-pro2"></i>GitHub</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project