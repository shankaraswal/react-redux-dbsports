import React, { Component } from 'react';
import axios from 'axios';

export default class Login extends Component {

    render(){
        return (
            <div className="col-sm-4 col-sm-offset-4">
                <div className="form-signin">
                    <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                    <br />
                    <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required="" />
                    <br />
                    <input type="password" id="inputPassword" className="form-control" placeholder="Password" required="" />
                    <div className="checkbox mb-3">
                    <label>
                        <input type="checkbox" value="remember-me" /> Remember me
                    </label>
                    </div>
                    <br />
                    <button className="btn btn-lg btn-warning btn-block" type="button">Sign in</button>
                    <p className="mt-5 mb-3 text-muted">© 2017-2018</p>
            </div>
          </div>
        )
    }

}