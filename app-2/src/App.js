import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      stuff: ["Spider", "Goat", "Berry", "Pigeon", "Lion"]
    };
  }

  render() {
    let stuffToDisplay = this.state.stuff.map((element, index) => {
      return <h2 key={index}>{element}</h2>;
    });

    return <div className="App">{stuffToDisplay}</div>;
  }
}

export default App;