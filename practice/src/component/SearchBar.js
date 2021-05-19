import React from "react";

class SearchBar extends React.Component {
    state = { term: '' };

    inputChange = (e) => {
        this.setState({ term: e.target.value})
    };

    formSubmit = (e) => {
        e.preventDefault();
    }

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.formSubmit} className = "ui form">
          <div className="field">
            <label>Search video</label>
            <input 
            type="text" 
            value = {this.state.term}
            onChange = {this.inputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
