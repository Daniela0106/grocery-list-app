import React, {Component} from 'react';
import '../styles/App.scss';

let registeredUsers = [];

class AuthenticationService extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: []
        };
    }

    addFakeRegisteredUsers() {
        if (!registeredUsers[0]){
            registeredUsers[0] = { username: "julio@gmail.com", password:"julio" };
            registeredUsers[1] = { username: "martha@gmail.com", password:"martha" };
            registeredUsers[2] = { username: "diego@gmail.com", password:"diego" };
            registeredUsers[3] = { username: "david@gmail.com", password:"david" };
            registeredUsers[4] = { username: "elena@gmail.com", password:"elena" };
        }
        return registeredUsers;
    }

    componentDidMount() {
        registeredUsers = this.addFakeRegisteredUsers();
        this.setState({
            users: registeredUsers
        });
    }

    render() {
        let { users } = this.state;
        return this.props.children({ users });
    }
}

export default AuthenticationService;
