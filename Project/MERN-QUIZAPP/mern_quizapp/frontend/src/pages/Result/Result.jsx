import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Card, Text } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import Nav from '../../components/Nav';
import Foot from '../../components/Foot';

function Result() {
    const navigate = useNavigate();
    const Leaderboard = ()=>{
        navigate("/leaderboard");
    }
    const addResult = async ()=>{
        console.log("add res is called");
        const response = await fetch('http://localhost:5000/api/addresult', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({uname: localStorage.getItem("uname"), score: localStorage.getItem("score"), qname: localStorage.getItem("qname")})
        });
        const res=await response.json();
        if(!res.success){
            alert('result was not added to the leaderboard due to an err..');
        } 
    }
    
    
    return (<>
            <Nav/>
            <Card isHoverable variant="bordered" css={{ mw: "400px" }}>
                <Card.Body>
                    <Text>{localStorage.getItem("uname")}</Text>
                    <Text>Result: {localStorage.getItem("score")}</Text>
                    <Button color="success" auto onClick={Leaderboard}>Leaderboard</Button>
                </Card.Body>
            </Card>
            <Text>Do you give us the permissioon to use add your name in our leaderboards</Text>
            <Button auto color="secondary" rounded flat onPress={addResult}>
            Yes
            </Button>
            <Foot/>
            </>

    )
}

export default Result;