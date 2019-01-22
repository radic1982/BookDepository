import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import { logout } from '../actions/authentication';


class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = { };
        this.handleLogout = this.handleLogout.bind(this);
    }
    handleLogout() {
       logout(); 
    }
    render() {
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <img className ="navbar-brand" src="https://d3ogvdx946i4sr.cloudfront.net/assets/v2.11.18/img/logo.svg" alt="Bookdepository"/>
          
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample05" aria-controls="navbarsExample05" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
    
          <div className="collapse navbar-collapse" id="navbarsExample05">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
              </li>
              
            </ul>
            <ul className="nav navbar-nav pull-right">
            <li><a className="nav-link" href="/login">Login</a></li>
            <li><a className="nav-link" onClick={this.handleLogout}>Logout</a></li>
            </ul>
          </div>
        </nav>
          
        
    
        );
      }
    }
    export default NavBar;
    