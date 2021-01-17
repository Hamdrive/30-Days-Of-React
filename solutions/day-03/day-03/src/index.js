import React from 'react';
import ReactDOM from 'react-dom';
// https://react-icons.github.io/react-icons/
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaNodeJs,
  FaReact,
  FaSass,
  
} from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { IconContext } from 'react-icons/lib';

const rootElement = document.getElementById("root");

const Header = () =>{
  return(
    <div className="header">
    <p>&nbsp;</p>
    <h1>Hello World!</h1>
    <h2>This is your captain speaking!</h2>
    <br/>
    <h3>Join me as I work my way around all the nitty-gritty that is Web Development!</h3>
    <p>~Hamza Husein</p>
    <p>&nbsp;</p>
  </div>
  )
}

const Mains = () => {
  return (
    <div className="main">
      <p>&nbsp;</p>
      <h2 className="mainTitle">
        My journey will take me through the various stops along the Web
        Development Path
      </h2>
      <br />
      {/* icons using react-icons */}
      <ul className="mainLogos">
        <li>
          <IconContext.Provider value={{ size: "10rem" }}>
            <div>
              <FaHtml5 />
            </div>
          </IconContext.Provider>
        </li>
        <li>
          <IconContext.Provider value={{ size: "10rem" }}>
            <div>
              <FaCss3Alt />
            </div>
          </IconContext.Provider>
        </li>
        <li>
          <IconContext.Provider value={{ size: "10rem" }}>
            <div>
              <FaJsSquare />
            </div>
          </IconContext.Provider>
        </li>
        <li>
          <IconContext.Provider value={{ size: "10rem" }}>
            <div>
              <FaNodeJs />
            </div>
          </IconContext.Provider>
        </li>
        <li>
          <IconContext.Provider value={{ size: "10rem" }}>
            <div>
              <FaSass />
            </div>
          </IconContext.Provider>
        </li>
        <li>
          <IconContext.Provider value={{ size: "10rem" }}>
            <div>
              <FaReact />
            </div>
          </IconContext.Provider>
        </li>
        <li>
          <IconContext.Provider value={{ size: "10rem" }}>
            <div>
              <DiMongodb />
            </div>
          </IconContext.Provider>
        </li>
      </ul>
      <br />
      <h3 className="mainEnd">Come, join me!</h3>
      <p>&nbsp;</p>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="footer">
      <p>&nbsp;</p>
      <p>
        <b>© Copyright 2021</b>
      </p>
      <p>&nbsp;</p>
    </div>
  );
};

const App = () =>{
  return (
    <div className="mainPage">
      <Header />
      <Mains />
      <Footer />
    </div>
  );
  
}


ReactDOM.render(<App />, rootElement)


