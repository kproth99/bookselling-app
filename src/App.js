import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Login from './Components/Login';
import Sales from './Components/Sales';
import Explore from './Components/Explore';
import Profile from './Components/Profile';
import MyNetwork from './Components/MyNetwork';
import Messaging from './Components/Messaging';
import './App.css';

class App extends Component {
    render() {  
        return (
            <div>
                <Router>
                    <nav className="navbar"> 
                        <ul className="navbar-list">
                        <li className="navbar-item">
                                <Link to="/Explore" className="navbar-link">Explore</Link>
                            </li>
                            <li className="navbar-item">
                                <Link to="/Users" className="navbar-link">Users</Link>
                            </li>
                            <li className="navbar-item">
                                <Link to="/Sales" className="navbar-link">Sales</Link>
                            </li>
                            <li className="navbar-item">
                                <Link to="/Inbox" className="navbar-link">Inbox</Link>
                            </li>
                            <li className="navbar-item">
                                <Link to="/Profile" className="navbar-link">Profile</Link>
                            </li>
                        </ul>
                    </nav>
                    <Route path="/" exact component={Login}/> 
                    <Route path="/Sales" component={Sales}/>
                    <Route path="/Users" component={MyNetwork}/>
                    <Route path="/Explore" component={Explore}/>
                    <Route path="/Inbox" component={Messaging}/>
                    <Route path="/Profile" component={Profile}/>
                </Router>
            </div>
        );
    }
}
export default App;