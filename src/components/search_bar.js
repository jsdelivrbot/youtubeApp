import React, { Component } from 'react';

//creating SearchBar class component
// what 'extends' keyword does is it includes the Component class properties to ES6 class which we are creating

class SearchBar extends Component{
  constructor(props){
    super(props);
      this.state = {term:''};

  }
  render(){
    return(
      <div className="search-bar">
        <input type="text"
          value ={this.state.term}
          onChange ={event => this.textChangeHandler(event.target.value)} />
      </div>
    );
  }
  textChangeHandler(term){
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
