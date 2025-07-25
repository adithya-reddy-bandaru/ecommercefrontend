import login from "./login.js";
import register from "./register.js";


const root=document.getElementById('root')
const allAnchors=document.querySelectorAll('a')

const router={
    "/login":login,
    "/register":register
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