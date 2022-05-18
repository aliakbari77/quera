import React, { Component } from 'react';
import Header from './header';
import SwitchButton from './switch';
import FormInput from './formInput';
import FormSelect from './formSelect';
import Questions from './questions';

class Exercises extends Component {
    state = {  } 
    render() { 
        return (
            <div>
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
        );
    }
}
 
export default Exercises;