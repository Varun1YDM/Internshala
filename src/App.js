import "./App.css";
import trophy from "./asserts/1.png";
import logo from "./asserts/logo.png";
import highlight from "./asserts/2.png";
import assests from "./asserts/3.png";
import { FaSquarePhone } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import web from "./asserts/web.png";

function App() {
  return (
    <div className="App">
      <div className="top">
        <div className="top-left">
          <img src={trophy} className="trophy" />
        </div>
        <div className="top-right">
          <img src={logo} className="logo" />
          <div className="text">
            <b>
              C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for
              the 4th time.
            </b>
            <ul>
              <li>
                C.R.I.'s energy efficient products are well recognized by
                various Government Institutions, as trustworthy products for
                various projects across the globe to save energy.
              </li>
              <li>
                C.R.I. is the highest contributor in the country for the
                projects of EESL (Energy Efficiency Services Limited) to replace
                the old inefficient pumps with 5 Star rated energy efficient
                smart pumps with IoT enabled control panel.{" "}
              </li>
            </ul>
            <img src={highlight} className="highlight" />
            <p>
              Government of India has awarded the "National Energy Conservation
              Award 2018". Mr. G. Selvaraj, Joint Managing Director of C.R.I.
              Group received the award from Smt. Sumitra Mahajan, Speaker of Lok
              Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.
            </p>
          </div>
        </div>
      </div>
      <div className="btm">
        <p>
          INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY
          RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF
          POWER FOR THE NATION.
        </p>
        <img src={assests} className="assests" />
        <p>
          Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
          Solar Systems - Motors
        </p>
        <hr className="hr" />
        <h3>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h3>
        <p className="foot-text">
          CHEMICALS & PROCESS | POWER | WATER & WASTE WATER | OILS & GAS |
          PHARMA | SUGARS & DISTILLERIES | PAPER & PULP | MARINE & DEFENCE |
          METAL & MINING | FOOD & BEVERAGE | PETROCHEMICAL & REFINERIES | SOLAR
          | BUILDING | HVAC | FIRE FIGHTING | AGRICULTURE & RESIDENTIAL
        </p>
      </div>
      <footer>
        <div className="call">
          <FaSquarePhone className="icons" />
          <p>
            Toll free <b>1800 200 1234</b>
          </p>
        </div>
        <div className="face">
          <FaFacebook className="icons" />
          <p>www.facebook.com/cripumps</p>
        </div>
        <div className="call">
          <img src={web} className="web" />
          <p>www.crigroups.com</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
