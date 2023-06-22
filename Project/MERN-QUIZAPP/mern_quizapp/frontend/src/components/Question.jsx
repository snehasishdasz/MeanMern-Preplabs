import { Container } from '@nextui-org/react'
import React, { useEffect } from 'react'
import { useState } from 'react';
import { Radio } from '@nextui-org/react';


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
        <p style={{fontSize:"1.5rem"}}>Question {props.item.qno}| {props.item.question}</p>
        <Radio.Group value={selectedOption} onChange={handleOptionChange}>
            <Radio value="op1">Option 1--| {props.item.op1}</Radio>
            <Radio value="op2">Option 2--| {props.item.op2}</Radio>
            <Radio value="op3">Option 3--| {props.item.op3}</Radio>
            <Radio value="op4">Option 4--| {props.item.op4}</Radio>
        </Radio.Group>
    </Container>
  )
}

export default Question