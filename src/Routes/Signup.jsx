import { useState } from "react"
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth'
import { useNavigate, Link, useHref ,Navigate } from "react-router-dom";
import { Signin } from "./Signin";
export function Signup(){
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const auth = getAuth()
    const navigate = useNavigate();
    async function handleSignUp(e){
    e.preventDefault();
    createUserWithEmailAndPassword(auth,email,password)
    .then((user) => {
        // Success...
        console.log(user)
        navigate("/signin");
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
                      <h2 className="fw-bold mb-2 text-uppercase">SignUp</h2>
                      <p className="text-white-50 mb-5">
                        Please enter your email and password!
                      </p>
                      <div className="form-outline form-white mb-3">
                        <input
                          onChange={(e) => {
                            setEmail(e.target.value);
                          }}
                          placeholder="Email"
                          type="email"
                          id="typeEmailX"
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
                          placeholder="Password"
                          type="password"
                          id="typePasswordX"
                          className="form-control form-control-lg"
                        />
                        <label className="form-label" htmlFor="typePasswordX">
                          Password
                        </label>
                      </div>
                      <div className="form-outline form-white mb-4">
                        <input
                          type="password"
                          id="typePasswordXConfirmed"
                          placeholder="Password Confirmed"
                          className="form-control form-control-lg"
                        />
                        <label className="form-label" htmlFor="typePasswordX">
                          Password Confirmed
                        </label>
                      </div>
                      {/* <p className="small mb-5 pb-lg-2">
                        <a className="text-white-50" href="">
                          Forgot password?
                        </a>
                      </p> */}
                      <button
                        onClick={(e) => {
                          handleSignUp(e);
                        }}
                        className="btn btn-outline-light btn-lg px-5"
                        type="submit"
                      >
                        SignUp
                      </button>
                      <div className="d-flex justify-content-center text-center mt-4 pt-1">
                        <a href="" className="text-white">
                          <i className="fab fa-facebook-f fa-lg" />
                        </a>
                        <a href="" className="text-white">
                          <i className="fab fa-twitter fa-lg mx-4 px-2" />
                        </a>
                        <a href="" className="text-white">
                          <i className="fab fa-google fa-lg" />
                        </a>
                      </div>
                    </div>
                    <div>
                      <p className="mb-0">
                        <Link Link to="/signin">
                          Don't have account yet?{" "}
                        </Link>
                      </p>
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