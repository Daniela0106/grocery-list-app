import React, {Component} from 'react';
import '../styles/App.scss';
import axios from 'axios';

let products;

class ProductsService extends Component {

    /*
        handleClick () {
            //Add item to list
        }
    */

    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            items: []
        }
        //this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount() {
        axios.get('https://world.openfoodfacts.org/api/v0/product/737628064502.json', {'crossdomain': 'true'})
            .then(response => {
                products = response.data.product.ingredients;
                this.setState({
                    isLoaded: true,
                    items: products
                })
            })
            .catch(error => console.log('Request failed: ', error));
    };

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
                        <div className="product-item" key={item.id}>{item.text}</div>
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
