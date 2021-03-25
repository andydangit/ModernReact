import React from "react";
import ReactDom from "react-dom";
import SeasonDisplay from './SeasonDisplay';
import Spinner from "./Spinner";


class App extends React.Component {
    // initialize state 
    state = { lat: null, errorMessage: ''};

    // example Lifecycle 
    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
            err => this.setState ({ errorMessage: err.message })
          );
    }

    componentDidUpdate(){
        console.log("My component was just updated -it rerendered!");
    }

    // create another function to Avoid conditional in render
    renderContent() { 
        if (this.state.errorMessage && !this.state.lat) {
            return <div> Error: {this.state.errorMessage} </div>;
        }
        
        if (!this.state.errorMessage && this.state.lat){
            return <SeasonDisplay lat = {this.state.lat} /> 
        }
     
         return <Spinner message = "Please accept location request"/>; 
     
    }

// Centralize in 1 location 
  render() {
    return(
       <div className="border red"> 
            {this.renderContent()}
       </div>
    );
  }
}

ReactDom.render(<App />, document.querySelector("#root"));
