const button_view =document.getElementById("view_image");
const button_remove =document.getElementById("remove_pic");

button_view.addEventListener("click",()=>{
    const div=document.getElementById("show_pic");
    const image=document.createElement("img");
    image.src="https://upload.wikimedia.org/wikipedia/commons/f/f3/Sunset_Sky_Wallpaper_%285080737981%29.jpg";
    image.style="width:700px;"
    div.append(image);
});




//-------------------------------------------Show and reomove text from text area--------------------------------------
const button1= document.getElementById("clickable1");
const button2= document.getElementById("clickable2");
const textarea= document.getElementById("content");

button1.addEventListener("click",() =>{
    textarea.innerText="This is my text";  //First the text area is empty so putting text when clicking 1st button (that is show button)
});

button2.addEventListener("click",() =>{
    textarea.innerText="";  //Second clear the text area while clicking 2nd button that is Remove
});

// ----------------------------------------------------------------
console.log("works");
function add(){
const content1 = document.getElementById("content1");
const content2 = document.getElementById("content2");
const p1 = document.createElement("p");
const p2 = document.createElement("p");
p1.innerHTML = "I am in a Flexbox🥳";
p2.innerHTML = "I am in a Grid🥳";
content1.appendChild(p1);
content2.appendChild(p2);
}
function remove(){
const content1 = document.getElementById("content1");
const content2 = document.getElementById("content2");
content1.innerHTML = "";
content2.innerHTML = "";
}





