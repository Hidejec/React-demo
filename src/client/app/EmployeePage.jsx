import React from 'react';

import Header from './Header.jsx';

class EmployeePage extends React.Component {

	constructor(props){
		super(props);
		this.state = {employee: {}};
		this.componentDidMount = this.componentDidMount.bind(this);
		this.homepage = this.homepage.bind(this);
	}

	componentDidMount(){
		this.props.service.findById(this.props.employeeId).done(function(result) {
            this.setState({employee: result});
        }.bind(this));
	}

	homepage(){
		router.load('index.html');
	}

	render() {
	   	return (
            <div>
                <Header text="Employee Details"/>
                <h3>{this.state.employee.firstName} {this.state.employee.lastName}</h3>
                {this.state.employee.title}
                <button onClick={this.homepage}>Back!</button>
            </div>
        );
  	}
}

export default EmployeePage;