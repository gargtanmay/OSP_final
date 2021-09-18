import React from 'react'
import Moon from "./Assets/moon-icon-white.png"
import { useLocation } from "react-router-dom";
import LineChart from "./LineChart"
export default function Prediction(props) {
  const location = useLocation();
  const myparam = location.state["pred"];
  const myparam1 = location.state["wake"];
  const myparam2 = location.state["time1"];
  console.log(location.state);
  return (
    <div>

      <h1 style={{ fontFamily: "Montserrat", color: "#5620B4", fontSize: "35px", position: "absolute", left: "50px", top: "35px" }}>Optimal Sleep</h1>
      <h1 style={{ fontFamily: "Montserrat", color: "#5620B4", fontSize: "35px", position: "absolute", left: "50px", top: "75px" }}>Pattern Prediction:</h1>

      <div className="row">
        <div className="col-5" style={{ paddingTop: "140px", paddingLeft: "100px" }}>
          <div id="sleep-card">
            <div id="sleep-card-content">
              <div id="sleep-form-module" style={{ fontFamily: "Montserrat", paddingLeft: "180px", paddingTop: "10px", color: "white" }}>
                <p style={{fontSize:"27px"}} >
                  <br /> Go to bed at: <br/></p>
                  <p style={{fontSize:"60px"}}>{myparam} {myparam2}</p>

              </div>
              <img className="moon-icon" src={Moon} alt="moon" style={{ position: "relative", bottom: "150px" }} />
            </div>
          </div>
          <br/><br /><br />
          <div className="buttons">
            <button className="btn-hover color-1" style={{ position: "relative", left: "80px", }}>To Wake up at <br/> {myparam1} AM</button>
          </div>
        </div>

        <div className="col-7" style={{ paddingTop: "140px", paddingRight: "100px" }}>
          <div id="awaken-card">
            <div id="awaken-card-content">
              <div id="awaken-card-title">
                <h4>Predicted Awaken Data:</h4>
              </div>
              <LineChart />
            </div>
          </div>
        </div>
      </div>

    </div>


  )
}
