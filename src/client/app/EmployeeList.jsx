import React from 'react';

class EmployeeListItem extends React.Component{
	render(){
		return (
		 	<li>
                <a href={"#employees/" + this.props.employee.id}>
                    {this.props.employee.firstName} {this.props.employee.lastName}
                </a>
            </li>
		);
	}
}


class EmployeeList extends React.Component {

	render() {
	    var items = this.props.employees.map(function (employee) {
            return (
                <EmployeeListItem key={employee.id} employee={employee} />
            );
        });
        return (
            <ul>
                {items}
            </ul>
        );
  	}
}

export default EmployeeList;