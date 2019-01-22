import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import { Route } from 'react-router-dom';
import Details from './components/Details';
import Admin from './components/Admin';

class App extends Component {
  
  
  render() {
    var bcStyle = {
     backgroundColor: '#635e63'
    // backgroundImage: 'url(' + "https://source.unsplash.com/daily?nature" + ')'
    };
    return (
        <div className="App">
          <NavBar/>
          <div style={bcStyle}>
          <Route exact path="/" component={Home} />
          <Route exact path="/detail/:id" component={Details} />
          <Route path="/adminProfile" component={Admin}/>
          </div>
        </div>
          
    )
  }
}

export default App;
