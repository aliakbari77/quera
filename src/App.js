import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import 'react-toastify/dist/ReactToastify.css'
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
import Colleges from './components/colleges';
import Exercises from './components/exercises';
import Events from './components/events';
import Dashboard from './components/dashboard';
import Login from './components/loginForm';
import RegisterForm from './components/registerForm';
import Logout from './components/logout';
import College from './components/college';

class App extends Component {
  state = {  } 
  render() { 
    return (
      <Switch>
        <div className='App'>
          <Navbar/>
          <div className='container' >
              <Route path="/questions/:id/" component={Question}/>
              <Route path="/colleges/:id/" component={College}/>
              <Route path="/login" component={Login}/>
              <Route path="/logout" component={Logout} />
              <Route path="/register" component={RegisterForm}/>
              <Route path="/edusys" component={EduSystem}/>
              <Route path="/college" component={Colleges}/>
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