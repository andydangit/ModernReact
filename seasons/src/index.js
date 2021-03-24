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


    // React says we have to define render!!
  render() {
   if (this.state.errorMessage && !this.state.lat) {
       return <div> Error: {this.state.errorMessage} </div>;
   }
   
   if (!this.state.errorMessage && this.state.lat){
       return <SeasonDisplay lat = {this.state.lat} /> 
   }

    return <Spinner />; 


    // return (
    // <div>
    //     Latitude: {this.state.lat} 
    //      <br />
    //     Error: {this.state.errorMessage}
    //     </div>
    // );

  }
}

ReactDom.render(<App />, document.querySelector("#root"));
