import React from 'react';
import {render} from 'react-dom';

import HomePage from './HomePage.jsx';
import EmployeePage from './EmployeePage.jsx';

router.addRoute('', function() {
    render(
        <HomePage service={employeeService}/>,
        document.getElementById('app')
    );
});

router.addRoute('employees/:id', function(id) {
    render(
        <EmployeePage employeeId={id} service={employeeService}/>,
        document.getElementById('app')
    );
});

router.start();