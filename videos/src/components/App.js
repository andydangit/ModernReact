import React from "react";
import SearchBar from "./SearchBar";
import yotube from "../apis/Youtube" 

class App extends React.Component {
  onTermSubmit = term => { 
    
  }

  render() {
    return (
      <div className = "ui container">
        <SearchBar onFormSubmit = {this.onTermSubmit} />
      </div>
    );
  }
}

export default App;
