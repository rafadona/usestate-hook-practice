import React from "react";

function App() {
  const now = new Date().toLocaleTimeString();

  const [realTime, newTime] = React.useState(now);

function refreshTime(){
const time = new Date().toLocaleTimeString();
  newTime(time)
  setInterval(refreshTime, 1000);
}

  return (
    <div className="container">
      <h1>{realTime}</h1>
      <button onClick={refreshTime}>Get Time</button>
    </div>
  ); 
}

export default App;
