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
        let joined = this.state.chosenItems.concat(item);
        this.setState({chosenItems: joined});
    }

    render() {
        return <Product>
            {({isLoaded, items}) => {
                if (!isLoaded) {
                    return <div className="Products-main-container">
                        <div className="Products">
                            Loading...
                        </div>
                    </div>
                } else {
                    return <div>
                        <ListComponent data={this.state.chosenItems}/>
                        <div className="Products-main-container">
                            <div className="Products">
                                {items.map(item => (
                                    <div className="product-item" key={item.recipe_id}
                                         onClick={(e) => this.handleClick(e, item)}>
                                        <div className="description">{item.title}</div>
                                        <img className="recipeImg" src={item.image_url} />
                                        <div className="price">${item.price}</div>
                                    </div>
                                ))}

                                <div className="spacing-item-placeholder"></div>
                                <div className="spacing-item-placeholder"></div>
                                <div className="spacing-item-placeholder"></div>
                                <div className="spacing-item-placeholder"></div>
                            </div>
                        </div>
                    </div>
                }
            }}
        </Product>
    }
}

export default ProductsComponent;
