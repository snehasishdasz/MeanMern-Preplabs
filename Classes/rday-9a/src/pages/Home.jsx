import React, { useEffect, useState } from 'react';
import Card from '../Components/Card';

function Home() {
    const [querry,setQuerry] = useState("yeh");
    const [list, setList] = useState([]);
    const updateQuerry = (e) => {
        setQuerry(e.target.value);
    }
    const updateData = async ()=>{
        console.log(`https://www.omdbapi.com/?s=${querry}&apikey=385e25cb`);
        const responce = await fetch(`https://www.omdbapi.com/?s=${querry}&apikey=385e25cb`,{
            method: "GET"
        })
        const res = await responce.json();
        if(res.Response){
            console.log(res);
            setList(res.Search);
        }
        else{
            alert(res.Error);
        }
    }
    useEffect(()=>{
        updateData();
    },[querry]);
  return (
    <div>
        <label>Enter querry</label>
        <input type='text' onChange={updateQuerry} value={querry}/>
        {(list)?list.map((ele)=>{return (
            <Card title={ele.Title} year={ele.Year} type={ele.Type} key={ele.imdbID}/>
        )}): <div>No results</div>}
    </div>
  )
}

export default Home