import React, { Component } from 'react';
import { login } from '../actions/authentication';

const mapStateToProps = (state) => {
  
  return {
      user: state.login
  }
}

const mapDispatchToProps = (dispatch) =>{ 
  return { 
      loginUser: ({username,password}) => dispatch(login({username, password}))
  }
}


export class LoginPage extends Component {
    /* constructor(props) {
        super(props);
        
        this.state = {
          username: '',
          password: ''
        };
        
      } */

      onChange = (e) =>  {
        
        const user = this.props;
        user[e.target.name] = e.target.value;
        this.setState(user); 
      }

      onSubmit = (e)=> {
        e.preventDefault();
        const {username, password} = this.state;

        login({username, password})
    };

    render () {
        const { username, password } = this.state;
        return ( 
            <div className="container">
            <div className="row">
              <div className="col-md-3"></div>
              <div className="col-md-6">
                <form className="form-signin" onSubmit={this.onSubmit}>
                  <h2 className="form-signin-heading">Please sign in</h2>
                  <label htmlFor="username" className="sr-only">Username</label>
                  <input type="text" id="username" className="form-control" name="username" value={username} onChange={this.onChange}  placeholder="Username"
                    />
                  <label htmlFor="inputPassword" className="sr-only">Password</label>
                  <input type="password" id="inputPassword" className="form-control" name="password" value={password} onChange={this.onChange}  placeholder="Password"
                    />
                  <button className="btn btn-primary btn-block" type="submit">Sign in</button>
                </form>
                {/* <div *ngIf=wrongUsernameOrPass class="alert alert-warning box-msg" role="alert">
                  Wrong username or password.
                </div> */}
              </div>
              <div className="col-md-3"></div>
            </div>
          </div>
          
        )
    }
}

export default connect(mapDispatchToProps, mapStateToProps)(LoginPage);
