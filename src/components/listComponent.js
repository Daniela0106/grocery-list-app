import React, {Component} from 'react';
import '../styles/App.scss';

class ListComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listIsShowing: false,
            chosenItems: []
        };
    }

    handleClick(e, message) {
        console.log(message);
        this.state.listIsShowing = !this.state.listIsShowing;
        document.getElementById('list-container').style.display = this.state.listIsShowing ? 'block' : 'none';
        console.log(this.state.listIsShowing);
    }

    render() {
        return (
            <div className="list">
                <div onClick={(e) => this.handleClick(e, "display-list")}>
                    <div>My List</div>
                    <div id="list-container">List</div>
                </div>
            </div>
        )

    }
}

export default ListComponent;