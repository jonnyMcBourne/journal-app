import React,{ useState} from 'react'
import { Link } from 'react-router-dom'
//components
import {Button} from '../commons/Button.js'
import {Input} from '../commons/Input.js';
// fucntion
const onSubmitLogin=(e)=>{
  e.preventDefault();
  console.log("hola")
}




export const RegisterScreen = () => {
    
    const [disabledButton,setDisabledButton] = useState(false);

  return (
    <div>
      <h3 className="auth__title">Register</h3>

      <form>

      <Input
          placeholder="Name"
          name="name"
          type="text"
          inputStyles="input-primary"
          inputSize="input-large"
        />

        <Input
          placeholder="Email"
          name="email"
          type="text"
          inputStyles="input-primary"
          inputSize="input-large"
        />

        <Input
          placeholder="Password"
          name="password"
          type="password"
          inputStyles="input-primary"
          inputSize="input-large"
        />

        <Input
          placeholder="Repear password"
          name="password2"
          type="password"
          inputStyles="input-primary"
          inputSize="input-large"
        />

        <Button
          children="LOGIN"
          buttonType="submit"
          buttonStyle="btn-primary"
          buttonSize="btn-large"
          onClick={onSubmitLogin}
          disabled={disabledButton}
          buttonAligned="center"
        />

        <div className="auth__social-networks">
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

        <Link className="link" to="/auth/register">
          Already registered
        </Link>
      </form>
    </div>
  );
};
