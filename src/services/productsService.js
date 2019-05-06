import React, {Component} from 'react';
import '../styles/App.scss';
import axios from 'axios';

let products;

class ProductService extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        axios.get('https://world.openfoodfacts.org/api/v0/product/737628064502.json', {'crossdomain': 'true'})
            .then(response => {
                products = response.data.product.ingredients;
                this.setState({
                    isLoaded: true,
                    items: products
                });
            })
            .catch(error => console.log('Request failed: ', error));
    }

    render() {
        let {isLoaded, items} = this.state;
        return this.props.children({isLoaded, items});
    }
}


export default ProductService;
