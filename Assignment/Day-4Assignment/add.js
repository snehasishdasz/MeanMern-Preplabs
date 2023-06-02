console.log(2);
const createBtn = document.getElementById("create");
createBtn.addEventListener("click", () => {
    const image = document.getElementById("image").value;
    const foodname = document.getElementById("foodname").value;
    const recipe = document.getElementById("recipe").value;
    if (image !== "" && foodname !== "" && recipe !== "") {
        fetch("http://localhost:8080/dish", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "image": image,
                "foodname": foodname,
                "recipe": recipe,
            })
        })
        window.location.href = "restaurant.html";
    }
    else {
        alert("Fill in all the fields");
    }
})