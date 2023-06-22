import React, { useState } from 'react';
import { useEffect } from 'react';
import Nav from '../../components/Nav';
import Foot from '../../components/Foot';
import { Container, Button, Text } from '@nextui-org/react';
import Question from '../../components/Question';
import { useNavigate } from 'react-router-dom';


function Quiz() {
  const [questions,setQuestions] = useState([]);
  const [qno, setQno] = useState(1);
  const navigate = useNavigate();
  const getQuestions = async()=>{
    const response = await fetch('http://localhost:5000/api/getquestions', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({quizname: localStorage.getItem("qname")})
    });
    const res=await response.json();
    if(res.success){
      setQuestions(res.questions);
      console.log(res.questions);
    }
    else{
      alert('err fetching questions of '+localStorage.getItem("qname"));
    }
  }
  useEffect(() => {
    getQuestions();
  }, []);
  const save = ()=>{
    const currentQsn = questions.filter((item)=>(item.qno === qno));
    if(localStorage.getItem("option") === currentQsn[0].answer){
      localStorage.setItem("score",parseInt(localStorage.getItem("score"))+1);
    }
    setQno(qno+1);
    localStorage.setItem("option","");
  }
  const next = ()=>{
    setQno(qno+1);
    localStorage.setItem("option","");
  }
  const result = ()=>{
    const currentQsn = questions.filter((item)=>(item.qno === qno));
    if(localStorage.getItem("option") === currentQsn[0].answer){
      localStorage.setItem("score",parseInt(localStorage.getItem("score"))+1);
    }
    navigate("/result");
  }
  return (
    <>
      <Nav/>
      <Text
        h2
        css={{
          textGradient: "45deg, $blue600 -20%, $pink600 50%",pl:"2rem"
        }}
        weight="bold"
      >Attempting quiz ...</Text>
      <Container fluid>
        
        {(questions).filter((item)=>{ return item.qno === qno}).map((ele)=>{return <>
          <Question item={ele}/>
        </>})}


        <hr/>
        {qno === 10 ? (
          <>
            <Button shadow color="success" auto style={{display:'inline-block'}} onClick={result}>Submit</Button>
          </>
        ) : (
          <>
            <Button shadow color="success" auto style={{display:'inline-block'}} onClick={save}>Save and Next</Button>
            <Button shadow color="warning" auto style={{display:'inline-block'}} onClick={next}>Next</Button>
          </>
        )}
        
      </Container>
      <Foot/>
    </>
  )
}

export default Quiz;