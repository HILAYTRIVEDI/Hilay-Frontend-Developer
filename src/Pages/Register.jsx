import React from 'react'

function Register() {
  return (
    <>
    <div className="registerform-container">
        <form action="" className="registerform-main">
            <h2 className="registerform-heading">Register</h2>
            <div className="registerform-field__wrapper">
                <div className="registerform-field">
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" id="username" />
                </div>
                <div className="registerform-field">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" />
                </div>
                <div className="registerform-field">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" />
                </div>
                <div className="registerform-field">
                    <input type="button" value="Register" />
                </div>
            </div>
        </form>
    </div>
</>
  )
}

export default Register