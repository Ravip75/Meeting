import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Calender from './calender';
import 'bootstrap/dist/css/bootstrap.min.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'

function App() {
  const [dropDownText,setDropDownText]=useState('');
  
    const change=(e)=>{
    setDropDownText('Training Room');
    console.log(e);
  }
  return (
    
    <div className="App">
      <div className="main1">
      <div className="header">
        <button className="btn">Logout</button>
      </div>
      <div className="head">
        <h3>MEETING ROOM BOOKING</h3>
        <label>
          Meeting Room
          <div>
        <DropdownButton
      title={dropDownText}
      className="menu"
      
        >
              <Dropdown.Item eventKey="option-1"></Dropdown.Item>
              <Dropdown.Item eventKey="option-2" onSelect={change}>Training Room</Dropdown.Item>
              <Dropdown.Divider />
      </DropdownButton></div></label>
        {dropDownText==='Training Room'?<Calender />:null}
        
             
          
        
      </div>
      </div>
      </div>
  );
}

export default App;
