import React, { useState } from 'react'
import Age from "./Assets/age-icon.png"
import ISI from "./Assets/isi-icon.png"
import Weight from "./Assets/weight-icon.png"
import Height from "./Assets/height-icon.png"
import Moon from "./Assets/moon-icon-white.png"
import BarChart from "./BarChart"
import "../style.css"
import axios from 'axios';
import { useHistory } from "react-router-dom";
export default function Main() {
  const history = useHistory();
  const [wake, setWake] = useState("");
  const [naps, setNaps] = useState("");
  const [nm, setNm] = useState("");
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [i, setI] = useState("");
  const [h, setH] = useState("");
  const [c, setC] = useState("");
  const [ac, setAc] = useState("");
  const [s, setS] = useState("");
  const [ns, setNs] = useState("");
  const handleSubmit = (evt) => {
    evt.preventDefault();
    alert(`Output ${wake}`)
  }

  const handleClick = () => {
    if (naps !== "") {
      axios.post("http://localhost:5000/OSP",
        {
          "wake": wake, "naps": naps,
          "nm": nm, "age": age,
          "weight": weight, "i": i, "h": h, "c": c, "ac": ac, "s": s, "ns": ns
        })
        .then((response) => {
          console.log(response);
          history.push({
            pathname: '/predict',
            state: response["data"]["test"],
          });
          //document.getElementsByClassName("sentiment-text")[0].innerText = response["data"]["sentiment"];
        })
        .catch((err) => {
          console.log(err);
          //document.getElementsByClassName("sentiment-text")[0].innerText = "Error"
        });
    }
  }
  return (

    <div >
      <div className="row" >

        <h1 style={{ fontFamily: "Montserrat", color: "#5620B4", fontSize: "35px", position: "absolute", left: "50px", top: "35px" }}>Optimal Sleep</h1>
        <h1 style={{ fontFamily: "Montserrat", color: "#5620B4", fontSize: "35px", position: "absolute", left: "50px", top: "75px" }}>Pattern Prediction:</h1>

        <div className="col-5" style={{ paddingTop: "150px", paddingLeft: "70px" }}>
          <br /><br /><br />
          <div id="sleep-card">
            <div id="sleep-card-content">
              <div id="sleep-form-module">
                <form action="/action_page.php" >
                  <label for="sleep_end_time" style={{ paddingLeft: "120px", paddingTop: "60px", color: "white", fontSize: "27px" }} > Setup your wake up time:  </label>
                  <select value={wake} onChange={e => setWake(e.target.value)} id="sleep_end_time" name="sleep_end_time" style={{ paddingLeft: "170px", fontFamily: "Montserrat", color: "white", fontSize: "60px", backgroundColor: "transparent", border: "transparent" }}>
                    <option value="0100">01:00</option>
                    <option value="0130">01:30</option>
                    <option value="0200">02:00</option>
                    <option value="0230">02:30</option>
                    <option value="0300">03:00</option>
                    <option value="0330">03:30</option>
                    <option value="0400">04:00</option>
                    <option value="0430">04:30</option>
                    <option value="0500">05:00</option>
                    <option value="0530">05:30</option>
                    <option value="0600">06:00</option>
                    <option value="0630">06:30</option>
                    <option value="0700">07:00</option>
                    <option value="0730">07:30</option>
                    <option value="0800">08:00</option>
                    <option value="0830">08:30</option>
                    <option value="0900">09:00</option>
                    <option value="0930">09:30</option>
                    <option value="1000">10:00</option>
                    <option value="1030">10:30</option>
                    <option value="1100">11:00</option>
                    <option value="1130">11:30</option>
                    <option value="1200">12:00</option>
                    <option value="1230">12:30</option>
                  </select>
                </form>
              </div>
              <img className="moon-icon" src={Moon} alt="moon" />
            </div></div>

<br /><br /><br />
          <div className="buttons" style={{marginLeft:"100px"}}>
            <button className="btn-hover color-1" onClick={handleClick}>Predict Now</button>
          </div>
        </div>


        <div className="col-7" style={{ paddingTop: "140px", paddingRight: "100px" }}>
          <div id="nap-card">
            <div id="nap-card-content" >
              <div id="nap-card-title">
                <h2>Today’s Nap Data:</h2>
              </div>
              <br />
              <div id="nap-form-module">
                <form method="post" className="form" style={{marginLeft:"30px"}}>
                  <div className="row">
                    <div className="col-6">
                      <label for="nap_total_freq" style={{ paddingTop: "10px" }}>Number Of Naps:</label>
                      <input value={naps} onChange={e => setNaps(e.target.value)} id="nap_total_time" className="nap-form-content" type="number" name="nap_total_time" placeholder="... times" required />
                    </div>
                    <div className="col-6">
                      <label for="nap_total_time" style={{ position: "relative", bottom: "18px" }}><br />Total Nap Minutes:</label>
                      <input style={{ position: "relative", bottom: "18px" }} value={nm} onChange={e => setNm(e.target.value)} id="nap_total_time" className="nap-form-content" type="number" name="nap_total_time" placeholder="... mins" required />
                    </div></div>
                </form>
              </div>

            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <br />  <br />
              <div id="data-card">
                <div id="data-card-content">
                  <img src={Age} alt="age-image" ></img>
                  <div id="age-form-module" style={{ position: "relative", bottom: "90px", left: "70px", width: "150px" }}>
                    <form method="post" className="form">
                      <label for="age" ><br />Age:</label>
                      <input value={age} onChange={e => setAge(e.target.value)} id="age" className="data-form-content" type="number" name="age" autocomplete="on" placeholder="... years old" required />
                    </form>
                  </div>
                </div>
              </div>
              <br /><br />

              <div id="data-card">
                <div id="data-card-content">
                  <img src={Weight} alt="isi-image" style={{ position: "relative", bottom: "27px", }} ></img>
                  <div id="weight-form-module" style={{ position: "relative", bottom: "110px", left: "70px", width: "150px" }}>
                    <form method="post" className="form">
                      <label for="weight"><br />Weight:</label>
                      <input value={weight} onChange={e => setWeight(e.target.value)} id="weight" className="data-form-content" type="number" name="isi" autocomplete="on" placeholder="... kg" required />
                    </form>
                  </div>
                </div></div></div>



            <div className="col-6">
              <br />  <br />
              <div id="data-card">
                <div id="data-card-content">
                  <img src={ISI} alt="isi-image"></img>
                  <div id="isi-form-module" style={{ position: "relative", bottom: "90px", left: "70px", width: "150px" }}>
                    <form method="post" className="form">
                      <label for="isi"><br />ISI:</label>
                      <input value={i} onChange={e => setI(e.target.value)} id="isi" className="data-form-content" type="number" name="weight" autocomplete="on" placeholder="..." required />
                    </form>
                  </div>
                </div></div>

              <br /><br />
              <div id="data-card">
                <div id="data-card-content">
                  <img src={Height} alt="height-image" style={{ position: "relative", bottom: "27px", }}></img>
                  <div id="height-form-module" style={{ position: "relative", bottom: "110px", left: "70px", width: "150px" }}>
                    <form method="post" className="form">
                      <label for="height" ><br />Height:</label>
                      <input value={h} onChange={e => setH(e.target.value)} id="height" className="data-form-content" type="number" name="height" autocomplete="on" placeholder="... cm" required />
                    </form>
                  </div>
                </div>


              </div>
            </div>
          </div>

        </div></div>

      <div className="row ">
        <div className="col-2"></div>
        <div className="col-7">
          <div id="cal-card">
            <div id="cal-card-content">
              <div id="cal-card-title" >
                <h2 styles={{ paddingRight: "20px" }}>Today’s Caloric Data:</h2>
              </div>
              <div id="cal-form-module">
                <form method="post" className="form">
                  <div className="row">
                    <div className="col-1"></div>
                    <div className="col-5" >
                      <label for="cal_consume" style={{ paddingTop: "27px" }}><br />Calories Consumed:</label>
                      <input value={c} onChange={e => setC(e.target.value)} id="cal_consume" className="nap-form-content" type="number" name="cal_consume" placeholder="... cal" required />
                      <label for="active_cal" style={{ paddingTop: "27px" }}><br />Active Calories:</label>
                      <input value={ac} onChange={e => setAc(e.target.value)} id="active_cal" className="nap-form-content" type="number" name="active_cal" placeholder="... cal" required />
                    </div>
                    <div className="col-5">

                      <label for="stairs" style={{ paddingTop: "27px" }}><br />Stairs Climbed:</label>
                      <input value={s} onChange={e => setS(e.target.value)} id="stairs" className="nap-form-content" type="number" name="stairs" placeholder="... stairs" required />
                      <label for="active_ratio" style={{ paddingTop: "27px" }}><br />Number of Steps:</label>
                      <input value={ns} onChange={e => setNs(e.target.value)} id="active_ratio" className="nap-form-content" type="number" name="active_ratio" placeholder="...steps" required />
                    </div></div>
                </form>
              </div>


            </div>
            <BarChart />
          </div>  </div>

      </div>
    </div>
  )
}
