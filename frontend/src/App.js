import "./components/radar/Radar.css" 

import React, { useState, useRef } from "react";

import Glass from './components/Glass'

import RadarChart from "./components/radar/Radar";
import default_chart_data from './components/radar/Data';
import chartOptions from "./components/radar/Options";

function App() {
  const [prob, setProb] = useState([default_chart_data]);
  const glassRef = useRef(null);

  return (
    <div className="app">
      
      <Glass 
        setProb={setProb}
        glassRef={glassRef}
      />
      
      <div className="Radar">
        <RadarChart 
          data={prob[0]} 
          options={chartOptions} 
          ref={glassRef}
        />
      </div>

    </div>
  );
}

export default App;