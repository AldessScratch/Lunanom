const check = document.getElementById("check")
const body = document.querySelector('body'),
      sidebar = body.querySelector('nav'),
      toggle = body.querySelector(".toggle"),
      modeSwitch = body.querySelector(".toggle-switch"),
      modeText = body.querySelector(".mode-text");

if (localStorage.getItem('darkMode')===null){
    localStorage.setItem('darkMode', "false");
}

checkusername()
checkStatus()

function checkStatus(){
    if (localStorage.getItem('darkMode')==="true"){
        body.classList.toggle("dark");
    }else{
        body.classList.toggle("light");
    }
    
}
      
toggle.addEventListener("click" , () =>{
    sidebar.classList.toggle("close");
})

modeSwitch.addEventListener("click" , () =>{
    if (localStorage.getItem('darkMode')==="false"){
        body.classList.toggle("dark");
        localStorage.setItem('darkMode', "true")
    }else{
        localStorage.setItem('darkMode', "false")
        body.classList.toggle("clair");
    }
});

function checkusername(){
    if (localStorage.getItem('nickname')===null){
        let result = prompt("Entrez votre nom d'utilisateur, ce nom sera utilisé dans le tchat. Veuillez éviter les caractères spéciaux")
        localStorage.setItem('nickname', result)
        window.location.href = "./index.html"
    }   
}