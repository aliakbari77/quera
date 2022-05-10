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

class App extends Component {
  state = {  } 
  render() { 
    return (
      <Switch>
        <div className='App'>
          <Navbar/>
          <div className='container' >
              <Route path="/questions/:id/" component={Question}/>
          <Header/>
          <div className='row' style={{marginTop: "36px"}}>
            <div className='col-3'>
              <SwitchButton/>
            </div>
            <div className='col-7'>
              <FormInput/>
            </div>
            <div className='col-2'>
              <FormSelect/>
            </div>
          </div>
          <div className='row'>
            <div className='col-3'>
              {/* <Accordion filter={"category"}/>
              <Accordion filter={"solution-status"}/>
            <Accordion filter={"tags"}/> */}
            </div>
            <div className='col-9'>
              <Questions/>
            </div>
          </div>
          </div>
        </div>

      </Switch>
    );
  }
}
 
export default App;

