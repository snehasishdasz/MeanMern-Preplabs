const createBtn = document.getElementById("create");

createBtn.addEventListener("click",()=>{
    const email = document.getElementById("email").value;
    const pass = document.getElementById("pass").value;
    console.log(email,pass);
    fetch("http://localhost:8080/myData",{
        method: "POST",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify({
            "id":Date.now(),
            "email":email,
            "pass":pass
        })
    }).then(async (res)=>{
        const data = await res.json();
        console.log(data);
        
    }).catch((err)=>{
        console.log(err);
    })
}
)