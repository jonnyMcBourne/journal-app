import React, { useState } from 'react'
import { Link } from 'react-router-dom'
//components
import {Button} from '../commons/Button.js'

// fucntion
const onSubmitLogin=(e)=>{
  e.preventDefault();
  console.log("hola")
}


export const LoginScreen = () => {

  const [disabledButton,setDisabledButton] = useState(false);

  return (
      <div>
        <h3 className="auth__title" >Login</h3>

        <form>
          <input
           className="auth__input"
           type="text" 
           name="email" 
           placeholder="Email @"
           autoComplete="off"
            />
          <input
           className="auth__input"
            type="password"
            name="password"
            autoComplete="off"
            placeholder="Password"
          />
           <Button 
            children="LOGIN"
           buttonType="submit" 
           buttonStyle="btn-outline" 
           buttonSize="btn-large" 
           onClick={onSubmitLogin}
           disabled={disabledButton}
           buttonAligned="center"
           />
           {/*<button className="btn btn-primary btn-large"  >Login</button>*/} 
       
          <div className="auth__social-networks" >
            <p>Login with social networks</p>
            <div className="google-btn">
              <div className="google-icon-wrapper">
                <img
                  className="google-icon"
                  src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                  alt="google button"
                />
              </div>
              <p className="btn-text">
                <b>Sign in with google</b>
              </p>
            </div>
          </div>

          <Link to="/auth/register">Create new account</Link>
        </form>
      </div>
    );
}
