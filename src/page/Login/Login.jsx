import React, { useState } from 'react'
import "./Login.css"
import logo from "../../assets/logo.png"
import { signup, login } from '../../firebase'
import netflix_spinner from "../../assets/netflix_spinner.gif"
const Login = () => {

  const [signState, setSignState] = useState("Sign In")
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);


  const auth_user = async (event) => {
  event.preventDefault();
  console.log("Form submitted:", signState);
setLoading(true);
  if (signState === "Sign In") {
    console.log("Logging in with:", email);
    await login(email, password);
  } else {
    console.log("Signing up with:", name, email);
    await signup(name, email, password);
  }
  setLoading(false);
};


  return (
    loading?<div className="login-spinner">
      <img src={netflix_spinner} alt='loading' />
    </div>:
    <div className='login'>
      <img className='login-logo' src={logo} alt=''/>
      <div className='login-form'>
        <h1>{signState}</h1>
        <form onSubmit={auth_user}>
  {signState === "Sign Up" && (
    <input
      value={name}
      onChange={(e) => setName(e.target.value)}
      type="text"
      placeholder="your name"
    />
  )}

  <input
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    type="email"
    placeholder="Email"
  />
  <input
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    type="password"
    placeholder="Password"
  />
  <button type="submit">{signState}</button>
</form>

        <div className='form-switch'>
          {signState === "Sign In"?<p>New to Netflix? <span onClick={()=>{setSignState("Sign Up")}}>Sign Up Now</span></p>
          :<p>Already have account? <span onClick={()=>{setSignState("Sign In")}}>Sign in Now</span></p>}
        </div>
      </div>
    </div>
  )
}

export default Login
