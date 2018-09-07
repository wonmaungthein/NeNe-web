import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import bagIMG from "./bag.JPG";

const imgStyle = {
  width: 350,
  height: 350
};
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">Welcome to GAW Website</h1>
          <h2>Girl's Awesome Wears</h2>
        </header>
        <p className="App-intro">
          <h3>
            <b>Hello Fashion lovers!!!! Welcome to my new website.</b>
          </h3>
          <div className="img-container">
            <img src={bagIMG} style={imgStyle} alt="bap img" />
            <div className="img-discription">
              <h2>Bag Title</h2>
              <p>
                Bag balalalala ေဒအိပ္ သည္ ကမာမွာ အေကာင္းဆံုး အိပ္ ၿဖစ္ ပါ သိည္။
                ေနြ ၊ မိုး ၊ ေအာင္း ရာသီ မေရြး သံုး စြဲ နိုင္ ပါသည္။{" "}
              </p>
              <button>Next</button>
              <button>Previous</button>
            </div>
          </div>
        </p>
        <footer className="App-footer">
          <li>Social Icons</li>
        </footer>
      </div>
    );
  }
}

export default App;
