import React, {Component} from 'react';
import ListComponent from './listComponent';
import '../styles/App.scss';

class HeaderComponent extends Component{

    render(){
        return (
            <div className="App-header">
                <div className="header-logo"></div>
                <div className="header-navigation">
                    <div className="search-container">
                        <form action="">
                            <button className="search-button" type="submit"></button>
                            <input className="search-bar" type="text" placeholder="Find grocery item..." name="search"></input>
                        </form>
                    </div>
                    <ListComponent/>
                </div>
            </div>
        );
    }
}

export default HeaderComponent;
