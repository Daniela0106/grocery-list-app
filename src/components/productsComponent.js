/*import React, {Component} from 'react';
import productsService from '../services/productsService';
import '../styles/App.scss';

class ProductsComponent extends Component {

    constructor (props) {
        super(props);
        this.state = {isLoaded: false,
            items: []};
        console.log(this.state);
        //this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount(){
        this.setState = productsService();
        this.state.isLoaded = true;
    }

    render(){

        if(this.state){
            var { isLoaded, items } = this.state;

            if (!isLoaded){
                return <div>Loading...</div>
            } else {
                return <div className="Products">
                    <ul>
                        {items.map(item => (
                            <li key={item.id}>{item.text}</li>
                        ))};
                    </ul>
                </div>
            }
        }

    };
}

export default ProductsComponent;*/
