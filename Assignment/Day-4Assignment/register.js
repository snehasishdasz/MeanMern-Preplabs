const createBtn = document.getElementById("create");
createBtn.addEventListener("click", () => {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const num = document.getElementById("num").value;
  const pass = document.getElementById("pass").value;
  if (email !== "" && pass !== "" && num !== "" && name !== "") {
    fetch("http://localhost:8080/myData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: Date.now(),
        name: name,
        email: email,
        num: num,
        pass: pass,
      }),
    });
    window.location.href = "login.html";
  } else {
    alert("Fill in all the fields");
  }
});
