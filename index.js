import login,{handelLoginBind} from "./login.js";
import register,{handelRegisterBind} from "./register.js";
import home from "./home.js";

const root=document.getElementById('root')
const allAnchors=document.querySelectorAll('a')

const router={
    "/login":[login,handelLoginBind],
    "/register":[register,handelRegisterBind],
    "/": () => "",
    "/index.html": () => "",
    "/home":[home]
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

    root.innerHTML=router[path][0]()
    if(router[path][1]){
    router[path][1]()
}
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
        root.innerHTML=router[path][0]()
         if( router[path][1]){
            router[path][1]()
        }
    }
})








