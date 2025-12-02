import "./about.css";
import PhysicsCard from "./PhysicsCard"; 

function About() {
  return (
    <div className="Aboutt">
      <div className="cardd1"><PhysicsCard /></div>
      <div className="card3"></div>
      <div className="card2">
         <div className="card21"> 
            <div className="card211Q"> 
               <div className="card211"> 
                 <i class="fa-regular fa-calendar" id="fa-regular-1m"></i> <span className="card2111">Schedule a call</span>
                </div>
             </div>
             <div className="card212">Nikhil Jadhav</div>
             <p className="card213">Full-Stack Developer | Next.js, React, Node.js</p>
             <p className="card214">Self-taught Full-Stack Developer from India, specializing in modern web <br></br> technologies and open-source development. Passionate about building <br></br>scalable applications with Next.js and contributing to the developer <br></br>community through open-source projects.</p>
        </div>    
      </div>
      
    </div>
  );
}
export default About