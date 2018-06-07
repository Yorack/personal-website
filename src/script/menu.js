import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import About from "./about";
import Home from "./home";

export default class Menu extends Component {

    constructor(props) {
        super(props);

        this.state = {
            open: false,
            selectedTab: 'home',
        };
    }

    toggleMenu() {
        this.setState({open: !this.state.open})
    }

    render() {
        const menuClass = this.state.open ? "bt-menu-open" : "bt-menu-close";

        console.log(this.props);
        console.log(this.state);

        return <Router>
            <div className="menu">
                <nav id="bt-menu" className={`bt-menu ${menuClass}`}>

                    <a href="#" className="bt-menu-trigger" onClick={() => {this.toggleMenu()}}><span></span></a>

                    <ul>
                        <li> <Link className='bt-icon icon-zoom' to="/">Home</Link></li>
                        <li> <Link className='bt-icon icon-zoom' to="/about">About</Link></li>
                        <li> <Link className='bt-icon icon-zoom' to="/topics">Topics</Link></li>
                    </ul>

                </nav>

                {/*<Link to="/">Home</Link>*/}
                {/*<Link to="/about">About</Link>*/}
                {/*<Link to="/topics">Topics</Link>*/}

                <hr />

                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
            </div>
        </Router>
    }
}