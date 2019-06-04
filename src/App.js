import React from "react";
import "./App.css";
import WisdomAPICall from "./components/WisdomAPICall";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userQuery: "life"
    };
  }

  render() {
    return (
      <div className="App">
        <WisdomAPICall userQuery={this.state.userQuery} />
        <header className="App-header">
          <img src="./1.jpg" className="App-logo" alt="The Wise Mist" />
        </header>
      </div>
    );
  }
}

export default App;
