import React from 'react';
import '../styles/App.scss';

function HeaderComponent() {
    return (
        <div className="App-header">
            <div className="header-logo">Logo goes here</div>
            <div className="header-navigation">
                <a href="#about">My list</a>
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

export default HeaderComponent;