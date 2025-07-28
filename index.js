import login from "./login.js";
import register from "./register.js";


const root=document.getElementById('root')
const allAnchors=document.querySelectorAll('a')

const router={
    "/login":login,
    "/register":register,
    "/": () => "",
    "/index.html": () => "",
}

function handleClick(e){
    e.preventDefault()
    let path=e.target.pathname;

    history.pushState(null,"",`${path}`)
    // if(path=="/login"){
    //     root.innerHTML=login()
    // }
    // else if(path=="/register"){
    //     root.innerHTML=register()
    // }

    root.innerHTML=router[path]()
}


allAnchors.forEach((anchor)=>{
    anchor.addEventListener("click",handleClick)
    
})

window.addEventListener('popstate',(e)=>{
    let path=location.pathname;
    if(path=="/index.html"){
        root.innerHTML=""
    }
    else{
        root.innerHTML=router[path]()
    }
})