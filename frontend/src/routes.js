import React from 'react';

import{Switch, Route} from 'react-router-dom';

import Login from './components/Login';
import Dashboard from './components/Dashboard';
import WizardOne from './components/WizardOne';
import WizardTwo from './components/WizardTwo';
import WizardThree from './components/WizardThree';




export default (
    <Switch>
        <Route exact path = '/' component={Login}/>
        <Route path = '/dashboard' component={Dashboard}/>
        <Route path = '/wizard/1' component={WizardOne}/>
        <Route path = '/wizard/2' component={WizardTwo}/>
        <Route path = '/wizard/3' component={WizardThree}/>
    </Switch>
)