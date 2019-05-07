import React, {Component} from 'react';
import Product from '../services/productsService';
import ListComponent from './listComponent';
import '../styles/App.scss';

class ProductsComponent extends Component {

    constructor(props) {
        super();
        this.state = {
            chosenItems: []
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e, item) {
        console.log(item);
        let joined = this.state.chosenItems.concat(item);
        console.log(JSON.stringify(joined));
        this.setState({chosenItems: joined});
        console.log("this.state: ****** " + this.state);
    }

    render() {
        console.log(this.props);
        return <Product>
            {({isLoaded, items}) => {
                if (!isLoaded) {
                    return <div className="Products">
                        <div>Loading...
                        </div>
                    </div>
                } else {
                    return <div>
                        <ListComponent/>
                        <div className="Products-main-container">
                            <div className="Products">
                                {items.map(item => (
                                    <div className="product-item" key={item.id}
                                         onClick={(e) => this.handleClick(e, item)}>
                                        <div className="description">{item.text}</div>
                                        <div className="price">{item.price}</div>
                                    </div>
                                ))}

                                <div className="search-placeholder"></div>
                                <div className="search-placeholder"></div>
                                <div className="search-placeholder"></div>
                                <div className="search-placeholder"></div>
                            </div>
                        </div>
                    </div>
                }
            }}
        </Product>
    }
}

export default ProductsComponent;
