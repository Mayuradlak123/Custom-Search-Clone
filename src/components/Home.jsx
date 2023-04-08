import React,{useState} from "react";

import { FaSistrix, FaMicrophone } from "react-icons/fa";
import GoogleIcon from "../images/googleLogo.png"
const Home = (props) => {
  const [state, setState] = useState("");
  const searchGoogle = (e) => {
    props.history.push({ pathname: "/search", state });
  };
  return (
    <div className="home">
    
      <div className="home__container">
        <div className="home__logo">
          <img src={GoogleIcon} alt="Logo" />
        </div>
        <form className="home__form" onSubmit={searchGoogle}>
          <input
            type="text"
            className="home__input"
            onChange={(e) => setState(e.target.value)}
            value={state}
            required
          />
          <div className="home__group">
            <input type="submit" className="home__btn" value="Google Search" />
          </div>
          <FaSistrix className="search__icon" />
          <FaMicrophone className="microphone" />
        </form>
      </div>
    </div>
  );
};

export default Home;
