const login=()=>{
    return `
    <div class="login">
        <form action="">
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
export default login