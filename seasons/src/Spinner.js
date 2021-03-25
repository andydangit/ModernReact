import React from "react";

const Spinner = (props) => {
  return (
    <div className="ui active dimmer"> 
      <div className="ui massive text loader"> {props.message}  </div>
    </div>
  );
};

// incase forget to pass props to index.js 
Spinner.defaultProps = {
  message: "Loading..."
  
};


export default Spinner;