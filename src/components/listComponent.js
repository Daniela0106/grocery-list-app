import React, {Component, useState} from 'react';
import '../styles/App.scss';

class ListComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listIsShowing: false
        };
    }

    handleClick(e, message) {
        this.state.listIsShowing = !this.state.listIsShowing;
        document.getElementById('list-container').style.display = this.state.listIsShowing ? 'block' : 'none';
        console.log("this.state ::: " + this.state.chosenItems? this.state.chosenItems : '');
        console.log(this.state.listIsShowing);
    }

    render() {
        console.log(this.props);
        //return this.props.children({isLoaded, items});
        return <div>
            <div className="list" onClick={(e) => this.handleClick(e, "display-list")}>
                <div className="description">My List</div>
                <div id="list-container">this.state.chosenItems</div>
            </div>

        </div>
    }
}

export default ListComponent;