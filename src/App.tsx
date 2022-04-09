import React from 'react';
import Color from './components/Color';
import InputData from './components/inputData';
import timeZones from './config/time-zones';
import Timer from './components/Timer';

type ComponentNames = "input" | "timer" | "color"
function App() {
  const [timeZone, setTimeZone] = React.useState("Asia/Jerusalem");
  const [color, setColor] = React.useState("red"); //TODO setColor
  const [componentName, setComponentName] = React.useState<ComponentNames>('input');
  const mapComponents: Map<ComponentNames, React.ReactNode> = new Map ();
  mapComponents.set("color", <Color color={color}></Color>);
  mapComponents.set("input", <InputData timeZones={timeZones} injectTimeZone={setTimeZone}></InputData>)
  mapComponents.set("timer", <Timer timeZone={timeZone}></Timer>)
    return  <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
      {Array.from(mapComponents.keys()).map(k => <button onClick={() => setComponentName(k)}>{k}</button>)}
      {mapComponents.get(componentName)}
      
      </div>
  }

export default App;
