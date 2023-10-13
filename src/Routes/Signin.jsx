import { useState } from "react"
import { useNavigate, Link} from "react-router-dom"
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth'
import { Signup } from "./Signup"
export function Signin(){
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const auth = getAuth()
    const navigate = useNavigate();
    async function handleSignIn(e){
        e.preventDefault();
    signInWithEmailAndPassword(auth,email,password)
    .then((user) => {
        // Success...
      if (user.user.email){
        navigate("/admin");
      } console.log(user.user.email);
        navigate('/home')
        //...
    })
    .catch((error) => {
        // Error
        console.log(error)
    })
    }

    return (
      <div>
        <section className="vh-100 gradient-custom">
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                <div
                  className="card bg-dark text-white"
                  style={{ borderRadius: "1rem" }}
                >
                  <div className="card-body p-5 text-center">
                    <div className="mb-md-5 mt-md-4 pb-5">
                      <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                      <p className="text-white-50 mb-5">
                        Please enter your login and password!
                      </p>
                      <div className="form-outline form-white mb-4">
                        <input
                          onChange={(e) => {
                            setEmail(e.target.value);
                          }}
                          type="email"
                          id="typeEmailX"
                          placeholder="Email"
                          className="form-control form-control-lg"
                        />
                        <label className="form-label" htmlFor="typeEmailX">
                          Email
                        </label>
                      </div>
                      <div className="form-outline form-white mb-4">
                        <input
                          onChange={(e) => {
                            setPassword(e.target.value);
                          }}
                          type="password"
                          id="typePasswordX"
                          placeholder="Password "
                          className="form-control form-control-lg"
                        />
                        <label className="form-label" htmlFor="typePasswordX">
                          Password
                        </label>
                      </div>
                      
                      {/* <p className="small mb-5 pb-lg-2">
                        <a className="text-white-50" href="#!">
                          Forgot password?
                        </a>
                      </p> */}
                      <button
                        onClick={(e) => {
                          handleSignIn(e);
                        }}
                        className="btn btn-outline-light btn-lg px-5"
                        type="submit"
                      >
                        Login
                      </button>
                      <div className="d-flex justify-content-center text-center mt-4 pt-1">
                        <a href="#!" className="text-white">
                          <i className="fab fa-facebook-f fa-lg" />
                        </a>
                        <a href="#!" className="text-white">
                          <i className="fab fa-twitter fa-lg mx-4 px-2" />
                        </a>
                        <a href="#!" className="text-white">
                          <i className="fab fa-google fa-lg" />
                        </a>
                      </div>
                    </div>
                    <div className="mb-0">
                      <Link Link to="/Signup">
                        Already yet Account to Sign up
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
 
}