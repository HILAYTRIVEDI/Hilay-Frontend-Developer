import React from 'react'

function Login() {
  return (
    <>
        <div className="form-container">
            <form action="" className="form-main">
                <h2 className="form-heading">Login</h2>
                <div className="form-field__wrapper">
                    <div className="form-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" />
                    </div>
                    <div className="form-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" />
                    </div>
                    <div className="form-field">
                        <input type="button" value="Login" />
                    </div>
                </div>
            </form>
        </div>
    </>
  )
}

export default Login