import React, {Component} from 'react';
import HeaderComponent from './components/headerComponent';
import FooterComponent from './components/footerComponent';
import ProductsComponent from './components/productsComponent';
import './styles/App.scss';
import Products from "./services/productsService";

class App extends Component {

    render() {
        return (
            <div className="App">
                <HeaderComponent/>
                <div className="Products-main-container">
                    <ProductsComponent/>
                </div>
                <FooterComponent/>
            </div>
        )
    }
}

export default App;
