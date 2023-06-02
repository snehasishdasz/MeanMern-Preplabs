console.log(2)
const createBtn = document.getElementById("create");
createBtn.addEventListener("click", () => {
    const email = document.getElementById("email");
    const pass = document.getElementById("pass");
    if (email.value !== "" && pass.value !== "") {
        fetch("http://localhost:8080/myData", {
            method: "GET",
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                const user = data.find(
                    (el) => el.email === email.value && el.pass === pass.value
                );
                console.log(user);
                if (user) {
                    window.location.href = "add.html";
                } else {
                    alert("wrong credintials");
                    window.location.href = "error.html";
                }
            });
        console.log(data);
    }
    else {
        alert("Fill in all the fields");
    }
})