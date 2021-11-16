import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';

export const LoginScreen = () => {
  const [state,setState]= useState({});
  const [{email,password}, onHandleChange,reset]=useForm({email:'jonathan@correo.com',password:'123456'});
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setState({email,password});
    reset();
  }
  console.log(state);

  //console.log('{', email , password ,'}');
  return (
    <form onSubmit={handleSubmit} >
      <h3 className="auth__title">Login </h3>
      <input
        type="email"
        required
        placeholder="examplel@email.com"
        name="email"
        className="auth__input"
        onChange={onHandleChange}
        value={email}
      />
      <input
        type="password"
        required
        placeholder="Password***"
        name="password"
        className="auth__input"
        onChange={onHandleChange}
        value={password}
      />
      <button className="btn btn-primary btn-block" >Login</button>
      <div className="auth__social-networks" > 
      <h3 className="auth__h3">Login with Social Networks</h3>
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
      <Link className="links" to="/auth/register">Create new Account</Link>
    </form>
  );
};
