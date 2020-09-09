import React, { useState } from 'react'
import { User } from '../Utils/Models'
import { Utils } from '../Utils/Utils'
import LoginService from '../Services/LoginService'

function Home(props) {

    const [user, setUser] = useState(new User())

    const handleLoginDataChange = (e) => {
        let name = e.target.name
        let value = e.target.value
        let userCopy = { ...user }
        userCopy[name] = value
        setUser(userCopy)
    }

    const login = (e) => {
        e.preventDefault();  
        sessionStorage.setItem("loggedIn", true);
        window.location = "dashboard";      
        LoginService.checkUser(user.email, user.password)
          .then(res => {  
           // res.headers['content-type']
              debugger;
            var uname = user.email; //TODO: Needs to replace with actual name from response
            sessionStorage.setItem("loggedIn", true);
            sessionStorage.setItem("uname", uname);
            window.location = "dashboard";
          })
          .catch(function(error) {
              debugger;
            new Utils().showErrorMessage("Invalid Username or Password1.");
        });
    }

    return (
        <div  className="home-wrapper">
            <div className="overlay">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-2"></div>
                        <div className="col-sm-8 login-container">
                            <div className="login-content">
                                <h4 className="center-content">Welcome to Practitioner App</h4>
                                <form onSubmit={login}>
                                    <div className="form-group">
                                        <label htmlFor="email">Email*:</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            name="email"
                                            placeholder="E.g. jhon@gmail.com"
                                            value={user.email}
                                            onChange={handleLoginDataChange} required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">Password*:</label>
                                        <input 
                                            type="password" 
                                            className="form-control" 
                                            id="password" 
                                            name="password" 
                                            placeholder="Enter your password" 
                                            value={user.password} 
                                            onChange={handleLoginDataChange} required />
                                    </div>
                                    <div className="right-content">
                                        <button type="submit" className="btn btn-primary">
                                            Login to Continue <i className="fa fa-arrow-right" aria-hidden="true"></i>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Home
