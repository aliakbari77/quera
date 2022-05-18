import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import Navbar from './components/navbar';
import Header from './components/header';
import SwitchButton from './components/switch';
import FormInput from './components/form';
import FormSelect from './components/formSelect';
import "font-awesome/css/font-awesome.css";
import {Component} from 'react'
import Test from './components/test';
import Questions from './components/questions';
import {Switch} from 'react-router-dom';
import Question from './components/question';
import { Route } from 'react-router-dom';
import EduSystem from './components/eduSystem';
import College from './components/college';
import Exercises from './components/exercises';
import Events from './components/events';
import Dashboard from './components/dashboard';

class App extends Component {
  state = {  } 
  render() { 
    return (
      <Switch>
        <div className='App'>
          <Navbar/>
          <div className='container' >
              <Route path="/questions/:id/" component={Question}/>
              <Route path="/edusys" component={EduSystem}/>
              <Route path="/college" component={College}/>
              <Route path="/exercises" component={Exercises}/>
              <Route path="/events" component={Events}/>
              <Route path="/" exact component={Dashboard}/>
          </div>
        </div>

      </Switch>
    );
  }
}
 
export default App;