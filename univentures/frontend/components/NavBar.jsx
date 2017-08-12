import React from 'react';
import { Link, Route } from 'react-router-dom';

const NavBar = () => (
    <nav className="navbar">
        <div className="container-fluid">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#topNavBar">
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
            </div>
            <div className="logo">
                <Link to={"/"}><span>Univentures</span></Link>
            </div>
        </div>

        <div className="collapse navbar-collapse" id="topNavBar">
            <ul className="nav navbar-nav">
                <li className="">
                    <a href="">
                        <span className="glyphicon glyphicon-cd" aria-hidden="true">Startups</span>
                    </a>
                </li>
                <li className="">
                    <a href="">
                        <span className="glyphicon glyphicon-music" aria-hidden="true">Users</span>
                    </a>
                </li>
            </ul>

            <ul className="nav navbar-nav navbar-right">
                <li className="">
                    <a href="#">
                        <span className="glyphicon glyphicon-plus" aria-hidden="true"></span>
                    </a>
                </li>
                <li className="">
                    <a href="#">
                        <span className="glyphicon glyphicon-off" aria-hidden="true"></span>
                    </a>
                </li>
            </ul>
        </div>    
    </nav>
)

export default NavBar;
