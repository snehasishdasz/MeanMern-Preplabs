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
        alert("your account has been created. Login now");
        
    }).catch((err)=>{
        console.log(err);
    })
})
/* ----------------------- */
function signin(){
    const email = document.getElementById("email").value;
    const pass = document.getElementById("pass").value;
    fetch("http://localhost:8080/myData",{
        method: "GET",
    }).then(async (res)=>{
        const data = await res.json();
        let flag=0;
        for(let i=0;i<data.length;++i){
            if(data[i].email == email && data[i].pass == pass){
                alert("Welcome");
                window.location.href = "as3.html";
                flag=1;
                break;
            }
        }
        if(flag==0){
            alert("You gave wrong password or email");
        }
        
    }).catch((err)=>{
        console.log(err);
    })
}