import React, {Component} from 'react';
import '../styles/App.scss';
import axios from 'axios';

let products, results;

class ProductsService extends Component {

/*
    handleClick () {
        //Add item to list
    }
*/

    constructor (props) {
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

    render(){

        var { isLoaded, items } = this.state;

        if (!isLoaded){
            return <div>Loading...</div>
        } else {
            return <div>
                <ul>
                    {items.map(item => (
                        <li key={item.id}>{item.text}</li>
                    ))};
                </ul>
            </div>
        }

        return (

            <div className="Products">

{/*                <button className='button' onClick={this.handleClick}>
                    Click Me
                </button>*/}
            </div>
        )
    }
}

export default ProductsService;
