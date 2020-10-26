import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      filterString: "",
      numbers: ["1", "2", "3", "4", "5"]
    };
  }

  handleChange(filter) {
    this.setState({ filterString: filter });
  }

  render() {
    let numsToDisplay = this.state.foods
      .filter((element) => {
        return element.includes(this.state.filterString);
      })
      .map((element, index) => {
        return <h2 key={index}>{element}</h2>;
      });

    return (
      <div className="App">
        <input onChange={e => this.handleChange(e.target.value)} type="text" />
        {numsToDisplay}
      </div>
    );
  }
}

export default App;