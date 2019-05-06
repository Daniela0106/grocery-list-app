import React, {Component} from 'react';
import Product from '../services/productsService';
import '../styles/App.scss';

class ProductsComponent extends Component {

    constructor(props) {
        super();
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e, item) {
        console.log(item);

    }

    randomPriceGenerator() {
        let randomPrice = Math.random();
        return randomPrice.toFixed(2);
    }

    putPricesOnProducts(items) {
        for (var i = 0; i < items.length; ++i) {
            items[i].price = this.randomPriceGenerator();
        }
        return items;
    }

    render() {
        return <Product>
            {({ isLoaded, items }) => {
                if (!isLoaded) {
                    return <div className="Products">
                        <div>Loading...
                        </div>
                    </div>
                } else {
                    this.putPricesOnProducts(items);

                    return <div className="Products">
                        {items.map(item => (
                            <div className="product-item" key={item.id} onClick={(e) => this.handleClick(e, item)}>
                                <div className="description">{item.text}</div>
                                <div className="price">{item.price}</div>
                            </div>
                        ))}

                        <div className="search-placeholder"></div>
                        <div className="search-placeholder"></div>
                        <div className="search-placeholder"></div>
                        <div className="search-placeholder"></div>

                    </div>

                }
            }}
        </Product>
    }
}

export default ProductsComponent;
