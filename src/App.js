import React, { useState } from "react";
import ReactDOM from "react-dom";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import "./styles.css";
import Card from "./components/Card";

const renderTime = ({ remainingTime }) => {
  if (remainingTime === 0) {
    return <div className="timer">00:00</div>;
  }
  

  return (
    <div className="timer">
     
      <div className="value">{remainingTime}</div>
    </div>
  );
};

function App() {

  const [remainingTime, setRemainingTime] = useState(20);
  const handleClick = () => {
    setRemainingTime(prevRemainingTime => prevRemainingTime + 10);
  }


  return (
    <div className="App">
      <h2>
        Routine Starting in...
      </h2>
      <p>Subheading here</p>

      
      {/* Timer */}

      <div className="timer-wrapper">
        <CountdownCircleTimer
          isPlaying
          duration={remainingTime}
          colors={"purple"}
          onComplete={() => [true, 1000]}
        >
          {renderTime}
        </CountdownCircleTimer>
      </div>
      <div>
      
      </div>
     

     
{/* button-left */}

<div style={{ display: 'flex', justifyContent: 'center', maxWidth: '500px', margin: '0 auto' }}>
  <button onClick={handleClick} 
    style={{ 
      borderRadius: '50px',
      backgroundColor: 'white',
      color: 'purple',
      padding: '5px 15px',
      border: 'none',
      cursor: 'pointer',
      boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.5)',
      marginTop:'20px',
      marginRight: '70px'
    }}
  >+ 10 sec
  </button>

{/* button-right */}


  <button  className="button-right"
    style={{ 
      borderRadius: '50px',
      backgroundColor: 'white',
      color: 'purple',
      padding: '5px 15px',
      border: 'none',
      cursor: 'pointer',
      boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.5)',
      marginTop:'20px',
      marginLeft: '70px',
      spaceBetween:'20px'
    }}
  >
    ⏭️  Skip
  </button>
</div>

{/* Card */}

<Card/>




    </div>
  );
}



export default App