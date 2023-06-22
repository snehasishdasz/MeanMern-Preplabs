
import logo from './logo.svg';
import './App.css';
import Navbar from "./components/navbar";
import Card from "./components/card";

function App() {

  const data=[{
    image: "https://i0.wp.com/media.tumblr.com/tumblr_m7gi3yFRJd1qjs7e9.png?zoom=2",
    title: "The Dark Knight Rises",
    rating: "8.4/10",
},
{
    image: "https://e0.pxfuel.com/wallpapers/947/677/desktop-wallpaper-avengers-infinity-war-superheroes-marvel-movie-poster-2018.jpg",
    title: "Avengers: Infinity war,",
    rating: "9.4/10",
},


{
    image: "https://static1.moviewebimages.com/wordpress/wp-content/uploads/2022/12/mv5bmdk4mtdhyzetodk3os00zdbjlwfhntqtmdi2oddjnzqzzta3xkeyxkfqcgdeqxvymjmxote0oda-_v1_.jpg?q=50&fit=crop&h=720&dpr=1.5",
    title: "Megan",
    rating: "6.4/10",
}

];

  return (

<div>
<Navbar />

{data.map((el) => {
  return( <Card image={el.image} title={el.title} rating={el.rating} />);
  })}

</div>


  );
}

export default App;
