import React, {Component, useState} from 'react';
import '../styles/App.scss';
import Authentication from '../services/authenticationService';

let currentUsername, currentPassword, userIsIn= false;

class AuthenticationComponent extends Component {
    constructor(props) {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e, users) {
        if(currentUsername != '' && currentPassword != ''){
            for (let i=0; i < users.length; i++){
                if (userIsIn===false && users[i] && users[i].username === currentUsername && users[i].password === currentPassword){
                    userIsIn = true;
                }
            }

            if(true === userIsIn){
                alert("welcome, "+ currentUsername +"!");
            } else {
                alert("You need to register. Please do before using this web app!");
            }
        }
    }

    render() {
        return <Authentication>
            {({users}) => {
                if(users){
                    return <div className="Login-container">
                        <h1>Login</h1><br/>
                        <label>Username:</label>
                        <input type="email" ref="currentUsernameRef" name="currentUsername" onChange={function handleUsername(evt){ currentUsername = evt.target.value;}}/><br/>
                        <label>Password:</label>
                        <input type="email" ref="currentPasswordRef" name="currentPassword" onChange={function handlePassword(evt){ currentPassword = evt.target.value;}}/>
                        <button value="Send" className="button-login" onClick={(e) => this.handleSubmit(e, users)}>
                            LOGIN!
                        </button>
                    </div>
                }
            }}
        </Authentication>
    }
}

export default AuthenticationComponent;
