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

    randomPriceGenerator() {
        let randomPrice = Math.random();
        return randomPrice.toFixed(2);
    }

    putPricesOnProducts(items) {
        if (!!items[0]){
            for (var i = 0; i < items.length; ++i) {
                items[i].price = this.randomPriceGenerator();
            }
        }
        return items;
    }

    componentDidMount() {
        axios.get('https://world.openfoodfacts.org/api/v0/product/737628064502.json', {'crossdomain': 'true'})
            .then(response => {
                products = response.data.product.ingredients;
                //Since the API doesnt bring any prices, will add those manually
                products = this.putPricesOnProducts(products);
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
