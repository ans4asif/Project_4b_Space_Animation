import './App.css';
import Space from './images/blackspace.png';
import Ufo from './images/UFO.png';
import rocket from './images/rocket.png';
import mercury from './images/Mercury.png';
import rocketblue from './images/rocketblue.png';
import astronaut from './images/Astronaut.png';
import planets from './images/planets.png';
import useWebAnimations from "@wellyshen/use-web-animations";

function App() {

  const{ref:Ufoa}=useWebAnimations({
    keyframes:[
      
{transform:"translateX(-1500px)"},
    
      {transform:"translateX(1500px)"},

    ],
    timing:{
      iterations:"Infinity",
      duration:6000,
      easing:"ease-in-out"

    }

  })
  const{ref:rocket11}=useWebAnimations({
    keyframes:[
      {transform:"translateX(-1500px)"},{transform:"rotate(20deg)"},
    
      {transform:"translateX(1500px)"},
      
  
    ],
    timing:{
       iterations:"Infinity",
       duration:5000,
       easing:"ease-in-out"
    }

  })

  const{ref:rocket22}=useWebAnimations({
    keyframes:[
      {transform:"translateX(-1500px)"},
      
      {transform:"translateX(1500px)"},
     
    
  
    ],
    timing:{
       iterations:"Infinity",
       duration:5000,
       easing:"ease-in-out"
       
    }

  })

  const{ref:astronautm}=useWebAnimations({
    keyframes:[
      { transform: "translateX(-1000px)"},
      { transform: "translateX(1500px)"}   
    ],
    timing:{
       iterations:"Infinity",
       duration:5000,
       easing:"ease-in-out"
    }

  })

  const{ref:planetsm}=useWebAnimations({
    keyframes:[
      { transform: "translateX(1500px)"},
      { transform: "translateX(-1500px)"},

    
  
    ],
    timing:{
       iterations:"Infinity",
       duration:4000,
       easing:"ease-in-out"
    }

  })
  const{ref:mercurym}=useWebAnimations({
    keyframes:[
      { transform: "translateX(-1500px)"},
      { transform: "translateX(1500px)"},
       ],
    timing:{
       iterations:"Infinity",
       duration:4000,
       direction:"alternate",
       delay:"500"
    }

  })

  return (
    <div className="container">
      <div className="space" >
        <img  className="space1" src={Space} alt="space..." />
      </div> 
      <div >
        <img className="mercury" ref={mercurym}  src={mercury} alt="mercury"></img>
        <img className="planets" ref={planetsm} src={planets} alt="planets"/>
      </div>

      <div className="rocket1">
        <img ref={rocket11}id="rocket" src={rocket} alt="rocket"/>
      </div>

      <div >
        <img ref={Ufoa} className="Ufo" src={Ufo} alt="Ufo"/>
      </div>

      <div >
        <img ref={rocket22} className="rocketb" src={rocketblue} alt="rocket..."/>
      </div>
      <div>
        <img className="astronaut" ref={astronautm} src={astronaut} alt="astronaut"></img>
      </div>
      
  
    </div>
  );
}

export default App;
