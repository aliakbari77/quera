import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import Navbar from './components/navbar';
import Header from './components/header';
import Switch from './components/switch';
import FormInput from './components/form';
import FormSelect from './components/formSelect';
import "font-awesome/css/font-awesome.css";
import {Component} from 'react'
import Test from './components/test';
import Questions from './components/questions';

class App extends Component {
  state = {  } 
  render() { 
    return (
      <div className='App'>
        <Navbar/>
        <div className='container' >
        <Header/>
        <div className='row' style={{marginTop: "36px"}}>
          <div className='col-3'>
            <Switch/>
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
          {/* navbar
          header
          tab
          selected
          searchbax
          sort
          dropdownbox
          table
          footer */}
        </div>
      </div>
    );
  }
}
 
export default App;

