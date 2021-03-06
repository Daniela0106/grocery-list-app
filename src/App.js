import React, {Component} from 'react';
import HeaderComponent from './components/headerComponent';
import FooterComponent from './components/footerComponent';
import AuthenticationComponent from './components/authenticationComponent';
import './styles/App.scss';

class App extends Component {

    render() {
        return (
            <div className="App">
                <AuthenticationComponent/>
                <HeaderComponent/>
                <FooterComponent/>
            </div>
        )
    }
}

export default App;
