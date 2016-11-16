import React from 'react';

import Header from './Header.jsx';
import SearchBar from './SearchBar.jsx';
import EmployeeList from './EmployeeList.jsx';

class HomePage extends React.Component {

	constructor(props){
		super(props);
		this.state = {
      employees: [],
      findMethod: 'Find by Name'
    };
		this.searchHandler = this.searchHandler.bind(this);
	}

	searchHandler(key) {
   	this.props.service.findByName(key).done(function(result) {
        this.setState({searchKey: key, employees: result});
    }.bind(this));
  }

	render() {
	    return (
     	 	<div>
          <Header text="Employee Directory" />
          <SearchBar searchHandler={this.searchHandler} findMethod={this.state.findMethod} />
          <EmployeeList employees={this.state.employees} />
      </div>
	    );
  	}
}

export default HomePage;