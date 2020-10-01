import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './Components/Home/Home';
import Course from './Components/CourseCards/CourseCards';
import Footer from './Components/Footer/Footer';
import MiddleSection from './Components/MiddleSection/MiddleSection';
import Form from './Components/Form/Form';
import Signup from './Components/Signup/Signup';
import FinalPage from './Components/Finalpage/FinalPage';


const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/Course' component={Course} />
            <Route exact path='/Footer' component={Footer} />
            <Route exact path='/MiddleSection' component={MiddleSection} />
            <Route exact path='/Form' component={Form} />
            <Route exact path='/Signup' component={Signup} />
            <Route exact path='/FinalPage' component={FinalPage} />
        </Switch>
    </BrowserRouter>
);

export default Routes;
