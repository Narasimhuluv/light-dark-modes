import React, { useState } from "react";

function App() {
  var [istoggle, setisToggle] = useState(false);
  function handleBright() {
    setisToggle(true);
  }
  function handleNight() {
    setisToggle(false);
  }
  return (
    <>
      {/* <div className={istoggle === true ? "dark" : "light"}>
        {istoggle === true ? (
          <i
            onClick={handleNight}
            className="fas fa-sun"
            style={{
              fontSize: "3rem",
              textAlign: "center",
              display: "block",
            }}
          ></i>
        ) : (
          <i
            onClick={handleBright}
            style={{
              fontSize: "3rem",
              textAlign: "center",
              display: "block",
            }}
            className="fas fa-cloud-moon"
          ></i>
        )}
      </div> */}

      {/* ----------------------------------------------- */}

      <div className={istoggle === true ? "dark" : "light"}>
        {istoggle === true ? (
          <>
            <div className="one">
              <div onClick={handleNight} className="darker">
                <div className="darkerdot"></div>
              </div>
              <h2>Light Mode</h2>
            </div>
          </>
        ) : (
          <>
            <div className="two">
              <div onClick={handleBright} className="lighter">
                <div className="lighterdot"></div>
              </div>
              <h2>Dark Mode</h2>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default App;
