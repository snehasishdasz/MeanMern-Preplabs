import { Table } from '@nextui-org/react';
import { useEffect, useState } from 'react';
import Nav from '../../components/Nav';
import Foot from '../../components/Foot';
import { useNavigate } from 'react-router-dom';

export default function Leaderboard() {
  const navigate = useNavigate();
  const [data,setData] = useState([]);
  const columns = [
    {
      key: "username",
      label: "NAME",
    },
    {
      key:"quizname",
      label:"QUIZ ATTEMPTED"
    },
    {
      key: "score",
      label: "SCORE",
    },
  ];

  const getResults = async ()=>{
    const response = await fetch('http://localhost:5000/api/getresults', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        }
    });
    const res=await response.json();
    if(res.success){
      const d = res.results;
      const sortedData = [...d].sort((a, b) => b.score - a.score);
      console.log(sortedData);
      setData(sortedData);
    }
    else{
      alert('err fetching results');
    }
  }
  useEffect(()=>{
    if(!localStorage.getItem("authToken")){
      
      navigate("/signin");
    }
    getResults();
  },[]);
  return (
    <>
    <Nav/>
    <Table
      lined
      css={{
        height: "auto",
        minWidth: "100%",
      }}
    >
      <Table.Header columns={columns}>
        {(column) => (
          <Table.Column key={column.key}>{column.label}</Table.Column>
        )}
      </Table.Header>
      <Table.Body>
        {data.map((item, index) => (
          <Table.Row key={index}>
            {columns.map((column) => (
              <Table.Cell key={column.key}>{item[column.key]}</Table.Cell>
            ))}
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
    <Foot/>
    </>
  );
}
