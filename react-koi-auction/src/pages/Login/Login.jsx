import { FaGoogle } from "react-icons/fa";

function Login() {
    return (
        <div class="modal modal-sheet position-static d-block bg-body-secondary p-4 py-md-5" tabindex="-1" role="dialog" id="modalSignin">
            <div class="modal-dialog" role="document">
                <div class="modal-content rounded-4 shadow">
                    <div class="modal-header p-5 pb-4 border-bottom-0" style={{justifyContent: "center"}}>
                        <h1 class="fw-bold mb-0 fs-2">Login</h1>
                    </div>

                    <div class="modal-body p-5 pt-0">
                        <form class="">
                            <div class="form-floating mb-3">
                                <input type="email" class="form-control rounded-3" id="floatingInput" placeholder="name@example.com" />
                                <label for="floatingInput">Email address</label>
                            </div>
                            <div class="form-floating mb-3">
                                <input type="password" class="form-control rounded-3" id="floatingPassword" placeholder="Password" />
                                <label for="floatingPassword">Password</label>
                            </div>
                            <a href="">Forgot password?</a>
                            <hr />  
                            <button class="w-100 mb-2 btn btn-lg rounded-3 btn-warning" type="submit">Log In</button>
                            <button class="w-100 py-2 mb-2 btn btn-outline-danger rounded-3" type="submit">
                                <svg class="bi me-1" width="16" height="16"><use xlink:href="#facebook"></use></svg>
                                Log in with Google <FaGoogle />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login