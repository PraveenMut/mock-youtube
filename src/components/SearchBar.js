import React, {Component} from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {}

    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(e) {
    const {currentTarget} = e;
    this.setState({
      [currentTarget.name]: currentTarget.value
    });
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input 
              name="searchBar"
              type="text" 
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;