import React from 'react';
import './styles/App.scss';

function Header() {
    return (
        <div className="App-header">
            <div className="header-logo">Logo goes here</div>
            <div className="header-navigation">
                <a href="#about">About</a>
                <div className="search-container">
                    <form action="">
                        <button className="search-button" type="submit"></button>
                        <input className="search-bar" type="text" placeholder="Find grocery item..." name="search"></input>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Header;
