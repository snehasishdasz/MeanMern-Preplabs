const data = [
    {
        image:"https://assets-global.website-files.com/6009ec8cda7f305645c9d91b/6408f6e7b5811271dc883aa8_batman-min.png",
        title:"Batman",
        rating:5,
    },
    {
        image:"https://i.etsystatic.com/13367669/r/il/db21fd/2198543930/il_570xN.2198543930_4qne.jpg",
        title:"EndGame",
        rating:5,
    },
    {
        image:"https://m.media-amazon.com/images/I/71Jxq2p5YWL._AC_UF894,1000_QL80_.jpg",
        title:"Joker",
        rating:5,
    },
    {
        image:"https://i.etsystatic.com/18242346/r/il/fd61f8/2933715225/il_570xN.2933715225_a913.jpg",
        title:"Wanda",
        rating:5,
    },
    {
        image:"https://s.yimg.com/ny/api/res/1.2/ZzAHlDHi8a2xdBRRbruaYQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTkyOA--/https://media.zenfs.com/en/homerun/feed_manager_auto_publish_494/d05a3f087fa57f6d41b865d53a42a5f5",
        title:"MoonLight",
        rating:5,
    },
    {
        image:"https://lumiere-a.akamaihd.net/v1/images/p_blackwidow_21043_v2_6d1b73b8.jpeg?region=0%2C0%2C540%2C810",
        title:"BlackWidow",
        rating:5,
    },
    {
        image:"https://marketplace.canva.com/EAFVCFkAg3w/1/0/1131w/canva-red-and-black-horror-movie-poster-AOBSIAmLWOs.jpg",
        title:"Dark",
        rating:5,
    },
    {
        image:"https://artloversaustralia.com.au/wp-content/uploads/2022/02/Sue-Dowse_Jaws-Movie-Poster_Primary-scaled.jpg",
        title:"Jaws",
        rating:5,
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0969/9128/products/1917_-_Sam_Mendes_-_Hollywood_War_Film_Classic_English_Movie_Poster_a12704bd-2b25-4aa7-8c8d-8f40cf467dc7_large.jpg?v=1582781089",
        title:"1917",
        rating:5,
    },
    {
        image:"https://cdn.marvel.com/content/1x/snh_online_6072x9000_posed_01.jpg",
        title:"Spiderman",
        rating:5,
    },
];

const movieBox = document.getElementById("showmovies");

// data.map((el)=>{
//     const div = document.createElement("div");
//     const image = document.createElement("img");
//     image.src = el.image;
// });


data.map((el)=>{
    const div=document.createElement("div");
    const img=document.createElement("img");
    img.src=el.image;
    const movieTitle = document.createElement("h3");
    movieTitle.innerText = el.title;
    const rating = document.createElement("p");
    rating.innerText = "Rating : " + el.rating;
    const button =document.createElement("button");
    button.innerText = "Click Movie";
    button.addEventListener("click",()=>{
        alert(`You clicked on ${el.title}`);
    }),
    div.append(img, movieTitle, rating,button);
    movieBox.append(div);
}
);

// for(let i=0; i<data.length; i++)
// {
    
//     const div = document.createElement("div");
//     const image = document.createElement("img");
//     image.src = data[i].image;
//     const movieTitle = document.createElement("h3");
//     movieTitle.innerText = data[i].title;
//     const rating = document.createElement("p");
//     rating.innerText = "Rating : "+el.rating;
//     div.append(image,movieTitle,rating);
//     const button=document.createElement("button");
//     button.innerText="Click Movie";
//     button.addEventListener("click",()=>{
//       alert(`You clicked on ${data[i].title}`);
//     });
//     div.append(image,movieTitle,rating,button);

//     movieBox.append(div);
// }