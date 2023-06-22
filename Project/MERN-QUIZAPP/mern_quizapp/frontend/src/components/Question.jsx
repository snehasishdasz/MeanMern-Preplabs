import { Container } from '@nextui-org/react'
import React, { useEffect } from 'react'
import { useState } from 'react';
import { Radio } from '@nextui-org/react';
import App from "../App.css"


function Question(props) {
    const [selectedOption, setSelectedOption] = useState("");

    const handleOptionChange = (value) => {
        setSelectedOption(value);
        console.log("selected op: "+selectedOption);
        localStorage.setItem("option",value);
    };
    useEffect(()=>{
      setSelectedOption(null);
    },[props]);
  return (
    <Container fluid>
        <p style={{fontSize:"1.5rem" ,fontWeight:"500"}}>Question {props.item.qno}| {props.item.question}</p>
        <Radio.Group value={selectedOption} onChange={handleOptionChange} css={{padding:"8px"}}>
            <Radio className='hover' value="op1" css={{width:"600px"}}>{props.item.op1}</Radio>
            <Radio className='hover' value="op2" css={{width:"600px"}}>{props.item.op2}</Radio>
            <Radio className='hover' value="op3" css={{width:"600px"}} >{props.item.op3}</Radio>
            <Radio className='hover' value="op4" css={{width:"600px"}}>{props.item.op4}</Radio>
        </Radio.Group>
    </Container>
  )
}

export default Question