import React from 'react'
import { Link } from 'react-router-dom'

export const RegisterScreen = () => {
    return (
        <>
 <form>
      <h3 className="auth__title">Create a new account </h3>
      <input
        type="text"
        required
        placeholder="full name"
        name="name"
        className="auth__input"
        autoComplete="off"

      />
      <input
        type="email"
        required
        placeholder="examplel@email.com"
        name="email"
        className="auth__input"
        autoComplete="off"
      />
      <input
        type="password"
        required
        placeholder="Password***"
        name="password"
        className="auth__input"
      />
            <input
        type="password"
        required
        placeholder="Confirm Password***"
        name="password2"
        className="auth__input"
      />
      <button className="btn btn-primary btn-block" >Submit</button>
      <div>
        <Link className="links" to="/auth/login">Already Registered ?....Login</Link>
      </div>
    </form>
        </>
    )
}
