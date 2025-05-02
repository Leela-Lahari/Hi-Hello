import './App.css';
// import { createContext, useContext, useState } from 'react';

// const BuildContext = createContext();


function App() {
  // const [bulbOn, setBulbOn] = useState(true);
    return (
      // <BuildContext.Provider value={{bulbOn, setBulbOn}}>
      //   <Light />
      // </BuildContext.Provider>
      <h1>Hello</h1>
    )

}

// function Light(){
//   return(
//     <div>
//       <LightOn />
//       <LightSwitch />
//     </div>
//   )
// }

// function LightOn(){
//   const {bulbOn} = useContext(BuildContext);
  
//   return(
//     <div className="light-on">
//       {bulbOn ? "Bulb is ON" : "Bulb is OFF"}
//     </div>
//   )
// }

// function LightSwitch(){
//   const {bulbOn, setBulbOn} = useContext(BuildContext);
//   return(
//     <div className="light-switch">
//       <button onClick={() => setBulbOn(!bulbOn)}>
//         {/* {bulbOn ? "OFF" : "ON"} */}
//         Toggle
//       </button>
//     </div>
//   )
// }

export default App;