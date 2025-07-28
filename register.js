const register=()=>{
    return `
    <div class="register">
        <form action="">
            <div>
                <h1>Register</h1>
            </div>
            <div>
                <input type="text" name="text" placeholder="Name">
                <span><i class="fa-solid fa-signature"></i></span>
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
                <input type="password" name="re-password" placeholder="Re-Password">
                <span><i class="fa-solid fa-key"></i></span>
            </div>
            <div>
                <input type="text" name="address" placeholder="Address">
                <span><i class="fa-solid fa-location-dot"></i></span>
            </div>
            <div>
                <input type="file" name="" id="">
            </div>
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
    </div>`;
};

export default register