import logo from "./logo.svg";
import "./App.css";
import { Card } from "./components/card";
import { useEffect, useState } from "react";
import "./components/Card.css";

function App() {
  const [arr, setArr] = useState([]);
  const [newarr, setnewArr] = useState([]);
  const [searchStr, getSearchStr] = useState("");
  useEffect(() => {
    getSearchedData();
  }, [searchStr]);
  /*getData*/
  const getData = async () => {
    await fetch("http://localhost:3001/users", {
      method: "GET",
    })
      .then(res => res.json())
      .then(data => {
        // data = data.slice(0, 10);
        console.log(data);
        setArr(data);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  /*Handle Post*/
  const handlePost = async () => {
    const obj = {
      id: "99",
      title: "Your Name",
      url: "https://e0.pxfuel.com/wallpapers/972/674/desktop-wallpaper-your-name-kimi-no-na-wa-names-member-and-cosplay-costumes-anime-your-name-live-thumbnail.jpg",
      thumbnailUrl: "9/10",
    };
    await fetch("http://localhost:3001/users", {
      method: "POST",
      body: JSON.stringify(obj),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(res => {
      res.json();
      getData();
    });
  };

  /*handleput*/
  const handlePut = async id => {
    const input = prompt("", 0);
    await fetch(`http://localhost:3001/users/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // id:"19",
        title: "Name",
        url: "https://e0.pxfuel.com/wallpapers/972/674/desktop-wallpaper-your-name-kimi-no-na-wa-names-member-and-cosplay-costumes-anime-your-name-live-thumbnail.jpg",
        thumbnailUrl: input,
      }),
    }).then(res => {
      if (res.ok) {
        getData();
        // alert("updated!!");
      }
    });
  };

  /*delete */
  const handleDelete = async id => {
    await fetch(`http://localhost:3001/users/${id}`, {
      method: "DELETE",
    }).then(res => {
      if (res.ok) {
        alert("Deleted");
        getData();
      }
    });
  };

  /*searching*/
  const getSearchedData = () => {
    const newData = arr.filter(item => item.title.includes(searchStr));
    console.log(newData);
    setnewArr(newData);
  };
  const handleChange = e => {
    getSearchStr(e.target.value);
  };
  console.log(newarr);

  return (
    <div className="App">
      <h2>Movie Info</h2>
      <div className="upp">
        <button onClick={handlePost} className="btn">
          Add New Data
        </button>
        <input
          type="text"
          placeholder="Search"
          id="search"
          value={searchStr}
          onChange={e => handleChange(e)}
        />
        <button onClick={getSearchedData} className="btn">
          Search
        </button>
      </div>
      {newarr.length > 0 ? (
        <div>
          {newarr.map(el => {
            return (
              <Card
                title={el.title}
                url={el.url}
                thumbnailUrl={el.thumbnailUrl}
              />
            );
          })}
        </div>
      ) : (
        <h1>No data found</h1>
      )}
    </div>
  );
}

export default App;
