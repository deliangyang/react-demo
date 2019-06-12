import React from 'react';
import { ShoppingList } from './ShoppingList'
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Home() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <ShoppingList></ShoppingList>
            </header>
        </div>
    )
}

function Head() {
    return (
        <div>
            this is the path header
            <br />
            <Link to="/">go to home page</Link>
        </div>
    )
}


export class User extends React.Component {
    render() {
        return (
            <div>
                <Router>
                    <Route exact path="/" component={Home} />
                    <Route path="/gallery" component={Head} />
                </Router>
            </div>
        )
    }
}