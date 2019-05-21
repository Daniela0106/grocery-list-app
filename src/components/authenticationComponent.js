import React, {Component, useState} from 'react';
import '../styles/App.scss';
import Authentication from '../services/authenticationService';
import ProductsComponent from '../components/productsComponent';

let currentUsername, currentPassword, userIsIn= false;

class AuthenticationComponent extends Component {
    constructor(props) {
        super();
        this.state = {
            user: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e, users) {
        if(currentUsername !== '' && currentPassword !== ''){
            for (let i=0; i < users.length; i++){
                if (userIsIn===false && users[i] && users[i].username === currentUsername && users[i].password === currentPassword){
                    userIsIn = true;
                }
            }

            if(true === userIsIn){
                alert("welcome, "+ currentUsername +"!");
                this.setState({user: currentUsername, password: currentPassword});
            } else {
                alert("You need to register. Please do before using this web app!");
            }
        }
    }

    render() {
        return <Authentication>
            {({users}) => {
                if(users){
                    return <div>
                        {this.state.user == '' ?<div className="Login-container">
                            <h1>Login</h1><br/>
                            <label className="username-field">Username:</label>
                            <input type="email" ref="currentUsernameRef" name="currentUsername" onChange={function handleUsername(evt){ currentUsername = evt.target.value;}}/><br/>
                            <label className="password-field">Password:</label>
                            <input type="email" className="password-input" ref="currentPasswordRef" name="currentPassword" onChange={function handlePassword(evt){ currentPassword = evt.target.value;}}/>
                            <button value="Send" className="button-login"
                                    onClick={(e) => this.handleSubmit(e, users)}>
                                LOGIN!
                            </button>
                        </div> : null}
                        {this.state.user == currentUsername ? <ProductsComponent data={this.state.user}/> : null};
                    </div>
                }
            }}
        </Authentication>
    }
}

export default AuthenticationComponent;
