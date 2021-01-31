import { useState } from 'react';
import Calender from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import moment from 'moment'
function Calendar(){
    const [date,setDate]=useState(new Date());
    const [name,setName]=useState('');
    const change=(date)=>{
          setDate(date);
    }
    const submit1=(e)=>{
        setName(e.target.value);
    }
    const submit=()=>{
       if(name.length>0 && (click===true))
       {
           
            alert(`Hey ${name} Your meeting fixed at ${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()} at 10:00 A.M.`);
           
        
       }
       else if(name.length>0 && (click1===true))
       {
           
            alert(`Hey ${name} Your meeting fixed at ${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()} at 10:30 A.M.`);
           
        
       }
       else if(name.length>0 && (click2===true))
       {
           
            alert(`Hey ${name} Your meeting fixed at ${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()} at 11:00 A.M.`);
           
        
       }
       else if(name.length>0 && (click3===true))
       {
           
            alert(`Hey ${name} Your meeting fixed at ${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()} at 11:30 A.M.`);
           
        
       }
       else if(name.length>0 && (click4===true))
       {
           
            alert(`Hey ${name} Your meeting fixed at ${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()} at 12:00 P.M.`);
           
        
       }
       else if(name.length>0 && (click5===true))
       {
           
            alert(`Hey ${name} Your meeting fixed at ${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()} at 12:30 A.M.`);
           
        
       }
       else if(name.length>0 && (click6===true))
       {
           
            alert(`Hey ${name} Your meeting fixed at ${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()} at 01:00 P.M.`);
           
        
       }
       else if(name.length>0 && (click7===true))
       {
           
            alert(`Hey ${name} Your meeting fixed at ${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()} at 01:30 P.M.`);
           
        
       }
       else if(name.length>0 && (click8===true))
       {
           
            alert(`Hey ${name} Your meeting fixed at ${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()} at 02:00 P.M.`);
           
        
       }
       else if(name.length>0 && (click9===true))
       {
           
            alert(`Hey ${name} Your meeting fixed at ${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()} at 02:30 P.M.`);
           
        
       }
       else if(name.length>0 && (click10===true))
       {
           
            alert(`Hey ${name} Your meeting fixed at ${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()} at 03:00 P.M.`);
           
        
       }
       else if(name.length>0 && (click11===true))
       {
           
            alert(`Hey ${name} Your meeting fixed at ${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()} at 03:30 P.M.`);
           
        
       }
       else if(name.length>0 && (click12===true))
       {
           
            alert(`Hey ${name} Your meeting fixed at ${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()} at 04:00 P.M.`);
           
        
       }
       else if(name.length>0 && (click13===true))
       {
           
            alert(`Hey ${name} Your meeting fixed at ${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()} at 04:30 P.M.`);
           
        
       }
       else if(name.length>0 && (click14===true))
       {
           
            alert(`Hey ${name} Your meeting fixed at ${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()} at 05:00 P.M.`);
           
        
       }
       else if(name.length>0 && (click15===true))
       {
           
            alert(`Hey ${name} Your meeting fixed at ${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()} at 05:30 P.M.`);
           
        
       }
       else if(name.length>0 && (click16===true))
       {
           
            alert(`Hey ${name} Your meeting fixed at ${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()} at 06:00 P.M.`);
           
        
       }
       else if(name.length>0 && (click17===true))
       {
           
            alert(`Hey ${name} Your meeting fixed at ${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()} at 06:30 P.M.`);
           
        
       }

    }
    const [count,setCount]=useState(0);
    const [count1,setCount1]=useState(0);
    const [count2,setCount2]=useState(0);
    const [count3,setCount3]=useState(0);
    const [count4,setCount4]=useState(0);
    const [count5,setCount5]=useState(0);
    const [count6,setCount6]=useState(0);
    const [count7,setCount7]=useState(0);
    const [count8,setCount8]=useState(0);
    const [count9,setCount9]=useState(0);
    const [count10,setCount10]=useState(0);
    const [count11,setCount11]=useState(0);
    const [count12,setCount12]=useState(0);
    const [count13,setCount13]=useState(0);
    const [count14,setCount14]=useState(0);
    const [count15,setCount15]=useState(0);
    const [count16,setCount16]=useState(0);
    const [count17,setCount17]=useState(0);
    
    const [click,setClick]=useState(false);
    const [click1,setClick1]=useState(false);
    const [click2,setClick2]=useState(false);
    const [click3,setClick3]=useState(false);
    const [click4,setClick4]=useState(false);
    const [click5,setClick5]=useState(false);
    const [click6,setClick6]=useState(false);
    const [click7,setClick7]=useState(false);
    const [click8,setClick8]=useState(false);
    const [click9,setClick9]=useState(false);
    const [click10,setClick10]=useState(false);
    const [click11,setClick11]=useState(false);
    const [click12,setClick12]=useState(false);
    const [click13,setClick13]=useState(false);
    const [click14,setClick14]=useState(false);
    const [click15,setClick15]=useState(false);
    const [click16,setClick16]=useState(false);
    const [click17,setClick17]=useState(false);
    const color=()=>{
        setCount(count+1);
        if(count%2===1){
        setClick(false);}
        else{
            setClick(true);
        }
        console.log(click);
        
    }
    const color1=()=>{
        setCount1(count1+1);
        if(count1%2===1){
        setClick1(false);}
        else{
            setClick1(true);
        }
        console.log(click1);
        
    }
    const color2=()=>{
        setCount2(count2+1);
        if(count2%2===1){
        setClick2(false);}
        else{
            setClick2(true);
        }
        console.log(click2);
        
    }
    const color3=()=>{
        setCount3(count3+1);
        if(count3%2===1){
        setClick3(false);}
        else{
            setClick3(true);
        }
        console.log(click3);
        
    }
    const color4=()=>{
        setCount4(count4+1);
        if(count4%2===1){
        setClick4(false);}
        else{
            setClick4(true);
        }
        console.log(click4);
        
    }
    const color5=()=>{
        setCount5(count5+1);
        if(count5%2===1){
        setClick5(false);}
        else{
            setClick5(true);
        }
        console.log(click5);
        
    }
    const color6=()=>{
        setCount6(count6+1);
        if(count6%2===1){
        setClick6(false);}
        else{
            setClick6(true);
        }
        console.log(click6);
        
    }
    const color7=()=>{
        setCount7(count7+1);
        if(count7%2===1){
        setClick7(false);}
        else{
            setClick7(true);
        }
        console.log(click7);
        
    }
    const color8=()=>{
        setCount8(count8+1);
        if(count8%2===1){
        setClick8(false);}
        else{
            setClick8(true);
        }
        console.log(click8);
        
    }
    const color9=()=>{
        setCount9(count9+1);
        if(count9%2===1){
        setClick9(false);}
        else{
            setClick9(true);
        }
        console.log(click9);
        
    }
    const color10=()=>{
        setCount10(count10+1);
        if(count10%2===1){
        setClick10(false);}
        else{
            setClick10(true);
        }
        console.log(click10);
        
    }
    const color11=()=>{
        setCount11(count11+1);
        if(count11%2===1){
        setClick11(false);}
        else{
            setClick11(true);
        }
        console.log(click11);
        
    }
    const color12=()=>{
        setCount12(count12+1);
        if(count12%2===1){
        setClick12(false);}
        else{
            setClick12(true);
        }
        console.log(click12);
        
    }
    const color13=()=>{
        setCount13(count13+1);
        if(count13%2===1){
        setClick13(false);}
        else{
            setClick13(true);
        }
        console.log(click13);
        
    }
    const color14=()=>{
        setCount14(count14+1);
        if(count14%2===1){
        setClick14(false);}
        else{
            setClick14(true);
        }
        console.log(click14);
        
    }
    const color15=()=>{
        setCount15(count15+1);
        if(count15%2===1){
        setClick15(false);}
        else{
            setClick15(true);
        }
        console.log(click15);
        
    }
    const color16=()=>{
        setCount16(count16+1);
        if(count16%2===1){
        setClick16(false);}
        else{
            setClick16(true);
        }
        console.log(click16);
        
    }
    const color17=()=>{
        setCount17(count17+1);
        if(count17%2===1){
        setClick17(false);}
        else{
            setClick17(true);
        }
        console.log(click17);
        
    }

   return (
       <>
       <label>Name
           <div>
               <input type="text" placeholder="Name" className="menu" onChange={submit1}></input>
           </div>
       </label>
       <label>Description
           <div>
               <input type="text" placeholder="Description" className="menu"></input>
           </div>
       </label>
       <div className="calendar">
           <Calender className="calendar1" onChange={change} value={date}></Calender>
       </div>
       <p className="date">{moment(date).format('MMMM Do YYYY')}</p>
       <h3>Please Select Your Prefered Slot</h3>
        <div className="slot">
        <button className={click===true?"slot2":"slot1"} onClick={color}>10:00 A.M.</button>
        <button className={click1===true?"slot2":"slot1"} onClick={color1}>10:30 A.M.</button>
        <button className={click2===true?"slot2":"slot1"} onClick={color2}>11:00 A.M.</button>
        <button className={click3===true?"slot2":"slot1"} onClick={color3}>11:30 A.M.</button>
        <button className={click4===true?"slot2":"slot1"} onClick={color4}>12:00 P.M.</button>
        <button className={click5===true?"slot2":"slot1"} onClick={color5}>12:30 P.M.</button>
        </div>
        <div className="slot">
        <button className={click6===true?"slot2":"slot1"} onClick={color6}>01:00 P.M.</button>
        <button className={click7===true?"slot2":"slot1"} onClick={color7}>01:30 P.M.</button>
        <button className={click8===true?"slot2":"slot1"} onClick={color8}>02:00 P.M.</button>
        <button className={click9===true?"slot2":"slot1"} onClick={color9}>02:30 P.M.</button>
        <button className={click10===true?"slot2":"slot1"} onClick={color10}>03:00 P.M.</button>
        <button className={click11===true?"slot2":"slot1"} onClick={color11}>03:30 P.M.</button>
        </div>
        <div className="slot">
        <button className={click12===true?"slot2":"slot1"} onClick={color12}>04:00 P.M.</button>
        <button className={click13===true?"slot2":"slot1"} onClick={color13}>04:30 P.M.</button>
        <button className={click14===true?"slot2":"slot1"} onClick={color14}>05:00 P.M.</button>
        <button className={click15===true?"slot2":"slot1"} onClick={color15}>05:30 P.M.</button>
        <button className={click16===true?"slot2":"slot1"} onClick={color16}>06:00 P.M.</button>
        <button className={click17===true?"slot2":"slot1"} onClick={color17}>06:30 P.M.</button>
        </div>
        <div className="button2">
        <button className="button" onClick={submit}>Book Appointment</button>
         
      </div>
      
       </>
   );
}

export default Calendar;