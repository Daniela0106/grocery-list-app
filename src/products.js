import React, {Component} from 'react';
import './styles/App.scss';
import axios from 'axios';

class Products extends Component {
    handleClick () {
        console.log('Success!');
        var config = {
            headers: {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'}
        };

        //let apiKey = '8d9d84e5124f5fec5f930e61ff746e47';
        //axios.get('https://www.food2fork.com/api/search?key='+ apiKey +'&q=chicken%20breast&page=2', config)

        axios.get('https://world.openfoodfacts.org/api/v0/products', { crossdomain: true })
            .then(function (response) {
                console.log(response.data);
        })
    }

    constructor () {
        super();
        this.handleClick = this.handleClick.bind(this)
    }

    render(){
        return (
            <div className="Products">
                <button className='button' onClick={this.handleClick}>
                    Click Me
                </button>
            </div>
        )
    }
}

export default Products;
