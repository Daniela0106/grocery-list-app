import React, {Component} from 'react';
import Header from './header';
import './styles/App.scss';
import Products from "./services/productsService";

class App extends Component {

    render(){
        return (
            <div className="App">
                <Header/>
                <Products/>
            </div>
        )
    }
}

export default App;
