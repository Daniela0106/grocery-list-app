import React, {Component, useState} from 'react';
import '../styles/App.scss';

class ListComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listIsShowing: false
        };
    }

    handleClick(e) {
        this.state.listIsShowing = !this.state.listIsShowing;
        document.getElementById('list-container').style.display = this.state.listIsShowing ? 'block' : 'none';
    }

    removeFromList(e, item){
        //TODO Implement funcionality to remove item from the shopping list
    }

    render() {
        return <div>
            <div className="list" onClick={(e) => this.handleClick(e)}>
                <div className="description">My List</div>
                <div id="list-container">
                    {this.props.data.map(item => (
                        <div className="product-item" key={item.recipe_id}>
                            <div className="description">{item.title} {item.price}
                                <div className="remove" onClick={(e) => this.removeFromList(e, item)}></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    }
}

export default ListComponent;