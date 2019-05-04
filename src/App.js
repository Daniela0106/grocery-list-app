import React, {Component} from 'react';
import HeaderComponent from './components/headerComponent';
import FooterComponent from './components/footerComponent';
import './styles/App.scss';
import Products from "./services/productsService";

class App extends Component {

    render() {
        console.log(this.props);
        return (
            <div className="App">
                <HeaderComponent/>
                <div className="Products-main-container">
                    <Products/>
                </div>
                <FooterComponent/>
            </div>
        )
    }
}

export default App;
