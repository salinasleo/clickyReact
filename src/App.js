import React, { Component } from "react";
import Jumbotron from "./components/Jumbotron";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Game from "./components/Game";


class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron />
        <Game />
        <br /><br />
        <Footer />
      </div>
    );
  }
}

export default App;
