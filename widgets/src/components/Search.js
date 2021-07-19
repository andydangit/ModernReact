import React, { useState, useEffect } from "react";
import axios from 'axios';

const Search = () => {
  const [term, setTerm] = useState("");



  useEffect(() => {
    // different way of using async in useEffect 2nd way 
   ( async() => { 
      await axios.get('');
    })();


  }, [term]);

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label> Enter Search Term</label>
          <input
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            className="input"
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
