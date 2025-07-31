import home from "./home.js";

const login=()=>{
    return `
    <div class="login">
        <form>
            <div>
                <h1>Login</h1>
            </div>
            <div>
                <input type="email" name="email" placeholder="Email">
                <span><i class="fa-solid fa-envelope"></i></span>
            </div>
            <div>
                <input type="password" name="password" placeholder="Password">
                <span><i class="fa-solid fa-key"></i></span>
            </div>
            <div>
                <button type="submit">Login</button>
            </div>
        </form>
    </div>`;
};


export let handelLoginBind = () => {
  const state = {
    setState(name, value) {
      this[name] = value;
    }
  };

  const form = document.querySelector('form');
  const inputs = document.querySelectorAll('input');
  const root=document.getElementById('root')

  function handleChange(e) {
    const { name, value } = e.target;
    state.setState(name, value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const { email, password } = state;

    if (!email || !password) {
      alert("All fields are mandatory");
      return;
    }

    const payload = { email, password };
    const formData = new FormData();

    for (let key in payload) {
      formData.append(key, payload[key]);
    }

    (async () => {
      try {
        let res = await fetch("http://localhost:5000/api/auth/login", {
          method: "POST",
          body: JSON.stringify(payload),
          headers:{
            "Content-Type": "application/json"
          }
        });
        console.log(res);
        

        const data = await res.json();
        console.log("Login response:", data);

        if(res.status==200){
        alert(`${data.message}`)
        history.pushState({},"","/home")
        root.innerHTML=home()
        }else{
            alert(`${data.message}`)

        }
    } catch (error) {
        console.log(error);
        alert("Something went wrong")
        
    }
    })();
  }

  form.addEventListener('submit', handleSubmit);
  inputs.forEach(input => {
    input.addEventListener('change', handleChange);
  });
};


export default login