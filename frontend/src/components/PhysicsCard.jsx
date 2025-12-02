
// import { useSpring, animated } from "@react-spring/web";
// import { useDrag } from "@use-gesture/react";
// import Img5 from '../images/img5.jpeg';
// import "./PhysicsCard.css";

// const PhysicsCard = () => {
//   const [{ x, y }, api] = useSpring(() => ({ x: 0, y: 0 }));

//   const bind = useDrag(({ down, movement: [mx, my], velocity: [vx, vy] }) => {
//     if (down) {
//       api.start({ x: mx, y: my, immediate: true });
//     } else {
//       api.start({
//         x: 0,
//         y: 0,
//         config: { tension: 200, friction: 20, velocity: vx + vy }
//       });
//     }
//   });

//   return (
//     <div className="card1">
//       <div className="strap-wrapper">
//         <animated.div
//           className="strap"
//           style={{
//             height: y.to((val) => `${60 + val * 0.3}px`)
//           }}
//         />

//         {/* Animate hook + profile-card together */}
//         <animated.div
//           className="hook-card-group"
//           {...bind()}
//           style={{ x, y, touchAction: "none" }}
//         >
//           <div className="hook"></div>

//           <div className="profile-card">
//             <div className="pcard1">
//               <img src={Img5} alt="Logo" className="img5" />
//             </div>
//             <div className="pcard2">
//               <i className="fa-solid fa-location-dot" id="fa-solid-1"></i>
//               <p className="pcard21">Pune, Maharastra, India</p>
//             </div>
//             <div className="pcard3">
//               <img width="45" height="45" src="https://img.icons8.com/3d-fluency/94/github-logo.png" alt="github-logo" loading="lazy" />
//               <img width="45" height="45" src="https://img.icons8.com/fluency/48/linkedin.png" alt="LinkedIn" loading="lazy" />
//               <img width="45" height="45" src="https://img.icons8.com/color/48/facebook-new.png" alt="Facebook logo" loading="lazy" />
//               <img width="45" height="45" src="https://img.icons8.com/3d-fluency/94/instagram-logo.png" alt="Instagram logo" loading="lazy" />
//             </div>
//           </div>
//         </animated.div>
//       </div>
//     </div>
//   );
// };

// export default PhysicsCard;




// PhysicsCard.jsx
import { useSpring, animated } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";
import Img5 from "../images/img5.jpeg";
import SocialIcons from "./SocialIcons";
import "./PhysicsCard.css";

const PhysicsCard = () => {
  const [{ x, y }, api] = useSpring(() => ({ x: 0, y: 0 }));

  const bind = useDrag(({ down, movement: [mx, my], velocity: [vx, vy] }) => {
    if (down) {
      api.start({ x: mx, y: my, immediate: true });
    } else {
      api.start({
        x: 0,
        y: 0,
        config: { tension: 200, friction: 20, velocity: vx + vy },
      });
    }
  });

  return (
    <div className="card1">
      <div className="strap-wrapper">
        <animated.div
          className="strap"
          style={{ height: y.to((val) => `${60 + val * 0.3}px`) }}
        />

        {/* Animate hook + profile-card together */}
        <animated.div
          className="hook-card-group"
          {...bind()}
          style={{ x, y, touchAction: "none" }}
        >
          <div className="hook" />
          <div className="profile-card">
            <div className="pcard1">
              <img src={Img5} alt="Profile" className="img5" />
            </div>

            <div className="pcard2">
              <i className="fa-solid fa-location-dot" id="fa-solid-1"></i>
              <p className="pcard21">Pune, Maharashtra, India</p>
            </div>

            <div className="pcard3">
              {/* Use SocialIcons component for clickable links */}
              <SocialIcons />
            </div>
          </div>
        </animated.div>
      </div>
    </div>
  );
};

export default PhysicsCard;
