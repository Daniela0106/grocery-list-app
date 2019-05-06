import React, {Component} from 'react';
import '../styles/App.scss';
import axios from 'axios';

let products;

class ProductsService extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            items: []
        }
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount() {
        axios.get('https://world.openfoodfacts.org/api/v0/product/737628064502.json', {'crossdomain': 'true'})
            .then(response => {
                console.log(response);
                products = response.data.product.ingredients;
                this.setState({
                    isLoaded: true,
                    items: products
                });
            })
            .catch(error => console.log('Request failed: ', error));
    };

    handleClick(e) {
        //Add item to list
/*
        console.log(e.target.id);
        console.log("Event: " + e.target.text);
        console.log("Event data: " + e.target.data);*/
    }

    randomPriceGenerator(){
        let randomPrice = Math.random();
        return randomPrice.toFixed(2);
    }

    render() {
        var {isLoaded, items} = this.state;
        if (!isLoaded) {
            return <div className="Products">
                <div>Loading...
                </div>
            </div>
        } else {
            return <div className="Products">
                    {items.map(item => (
                        <div className="product-item" key={item.id} onClick={this.handleClick}>
                            <div className="description">{item.text}</div>
                            <div className="price">${this.randomPriceGenerator()}</div>
                        </div>
                    ))}
                {console.log(this.props)}
                <div className="search-placeholder"></div>
                <div className="search-placeholder"></div>
                <div className="search-placeholder"></div>
                <div className="search-placeholder"></div>
            </div>

        }
        {/*                <button className='button' onClick={this.handleClick}>
                    Click Me
                </button>*/
        }


    }
}

export default ProductsService;
