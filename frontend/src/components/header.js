// import "./header.css";
// import LightRays from "./LightRays";
// import Img1 from '../images/img1.png';
// import Img2 from '../images/img2.png';
// import Img3 from '../images/img3.png';
// import Img4 from '../images/img4.png';

// function Header() {
//   return (
//     <div className="header">
//       <LightRays
//         raysOrigin="top-center"
//         // raysColor="#00ffff"
//         raysSpeed={1.5}
//         lightSpread={0.8}
//         rayLength={1.8}
//         followMouse={true}
//         mouseInfluence={0.12}
//         noiseAmount={0.03}
//         distortion={0.03}
//         className="custom-rays"
//       />
//       <div className="header-content">
//         <div className="headeritem-1">
//           <div className="hdritem-1">
//             <div className="hdritem-11"><img src={Img2} alt="Logo" className="img2"></img></div>
//             <div className="hdritem-12"><p className="hdritem-121">Looking for an <br></br>affordable and budget <br></br>friendly Developer..!</p></div>
//             <div className="hdritem-13"><img src={Img3} alt="Logo" className="img3"></img></div>
//             <div className="hdritem-14">Hellow There!</div>
//           </div>
//           <div className="hdritem-2" >
//             <img src={Img1} alt="Logo" className="img1"></img>
//           </div>
//           <div className="hdritem-3">
//             <div className="hdritem-31"><p className="hdritem-311">Your next product deserves a <br></br> developer who sees the <br></br>whole stack.</p></div>
//             <div className="hdritem-32"><img src={Img4} alt="Logo" className="img4"></img></div>
//             <div className="hdritem-33">Nikhil Here ..</div>
//           </div>
//         </div>
//         <div className="headeritem-2">
//           {/* 1,2,3,4 */}
//           <div className="hdr-21">
//             <div className="hdr-211"><i class="fa-regular fa-face-smile" id="fa-regular-1"></i></div>
//             <a className="hdr-212">Me</a>
//           </div>
//           <div className="hdr-21">
//             <div className="hdr-211"><i class="fa-solid fa-briefcase" id="fa-regular-1"></i></div>
//             <a className="hdr-212">Project</a>
//           </div>
//           <div className="hdr-21">
//             <div className="hdr-211"><i class="fa-solid fa-trophy" id="fa-regular-1"></i></div>
//             <a className="hdr-212">Achievements</a>
//           </div>
//           <div className="hdr-21">
//             <div className="hdr-211"><i class="fa-solid fa-layer-group" id="fa-regular-1"></i></div>
//             <a className="hdr-212">Skills</a>
//           </div>
//           <div className="hdr-21">
//             <div className="hdr-211"><i class="fa-regular fa-address-book" id="fa-regular-1"></i></div>
//             <a className="hdr-212">Contact</a>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// }

// export default Header;




// src/components/header.js
import React, { useContext } from "react";
import "./header.css";
import LightRays from "./LightRays";
import Img1 from "../images/img1.png";
import Img2 from "../images/img2.png";
import Img3 from "../images/img3.png";
import Img4 from "../images/img4.png";
import { ScrollContext } from "./ScrollProvider";

export default function Header() {
  const { scrollTo } = useContext(ScrollContext);

  const handleKey = (e, name) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      scrollTo(name);
    }
  };

  return (
    <div className="header">
      <LightRays
        raysOrigin="top-center"
        // raysColor="#00ffff"
        raysSpeed={1.5}
        lightSpread={0.8}
        rayLength={1.8}
        followMouse={true}
        mouseInfluence={0.12}
        noiseAmount={0.03}
        distortion={0.03}
        className="custom-rays"
      />

      <div className="header-content">
        <div className="headeritem-1">
          <div className="hdritem-1">
            <div className="hdritem-11">
              <img src={Img2} alt="Logo" className="img2" />
            </div>
            <div className="hdritem-12">
              <p className="hdritem-121">
                Looking for an <br />
                affordable and budget <br />
                friendly Developer..!
              </p>
            </div>
            <div className="hdritem-13">
              <img src={Img3} alt="Logo" className="img3" />
            </div>
            <div className="hdritem-14">Hellow There!</div>
          </div>

          <div className="hdritem-2">
            <img src={Img1} alt="Logo" className="img1" />
          </div>

          <div className="hdritem-3">
            <div className="hdritem-31">
              <p className="hdritem-311">
                Your next product deserves a <br />
                developer who sees the <br />
                whole stack.
              </p>
            </div>
            <div className="hdritem-32">
              <img src={Img4} alt="Logo" className="img4" />
            </div>
            <div className="hdritem-33">Nikhil Here ..</div>
          </div>
        </div>

        {/* NAV / headeritem-2 */}
        <div className="headeritem-2">
          <div
            className="hdr-21"
            role="button"
            tabIndex={0}
            onClick={() => scrollTo("about")}
            onKeyDown={(e) => handleKey(e, "about")}
            aria-label="Go to Me section"
          >
            <div className="hdr-211">
              <i className="fa-regular fa-face-smile" id="fa-regular-1"></i>
            </div>
            <div className="hdr-212">Me</div>
          </div>

          <div
            className="hdr-21"
            role="button"
            tabIndex={0}
            onClick={() => scrollTo("project")}
            onKeyDown={(e) => handleKey(e, "project")}
            aria-label="Go to Project section"
          >
            <div className="hdr-211">
              <i className="fa-solid fa-briefcase" id="fa-regular-1"></i>
            </div>
            <div className="hdr-212">Project</div>
          </div>

          <div
            className="hdr-21"
            role="button"
            tabIndex={0}
            onClick={() => scrollTo("achievements")}
            onKeyDown={(e) => handleKey(e, "achievements")}
            aria-label="Go to Achievements section"
          >
            <div className="hdr-211">
              <i className="fa-solid fa-trophy" id="fa-regular-1"></i>
            </div>
            <div className="hdr-212">Achievements</div>
          </div>

          <div
            className="hdr-21"
            role="button"
            tabIndex={0}
            onClick={() => scrollTo("skills")}
            onKeyDown={(e) => handleKey(e, "skills")}
            aria-label="Go to Skills section"
          >
            <div className="hdr-211">
              <i className="fa-solid fa-layer-group" id="fa-regular-1"></i>
            </div>
            <div className="hdr-212">Skills</div>
          </div>

          <div
            className="hdr-21"
            role="button"
            tabIndex={0}
            onClick={() => scrollTo("contact")}
            onKeyDown={(e) => handleKey(e, "contact")}
            aria-label="Go to Contact section"
          >
            <div className="hdr-211">
              <i className="fa-regular fa-address-book" id="fa-regular-1"></i>
            </div>
            <div className="hdr-212">Contact</div>
          </div>
        </div>
      </div>
    </div>
  );
}
