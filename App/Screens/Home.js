/*import * as React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import { createAppContainer } from 'react-navigation';

import LoginView from '../Authentication/LoginView';
import SignUp from '../Authentication/SignUp';
import { ActivityIndicator } from 'react-native-paper';
import Drawers from './Drawers';

const LoginStack = createStackNavigator({
    Login : {screen: LoginView},
    SignUp : {screen: SignUp},

},
{
    navigationOptions: () => ({
        headerTransparent: true,
        headerBackTitle: 'Back',
        headerTintColor: 'white'
    }),
});

//konstruerer en stacknavigator til å håndtere views(currency list)
/*
const LoginStack = createStackNavigator({
    'Login': {screen: LoginView},
    'SignUp' : {screen: SignUp},

    
},
{initialRouteKey: 'Login'});






const LoginAppContainer = createAppContainer(LoginStack);
/*    
//eksporterer klassen home (og da appcontainer), som vil bli kaldt i index.js
export default class Home extends React.Component{
    render() {
        return <LoginAppContainer/>;
    }
};
 

//eksporterer klassen home (og da appcontainer), som vil bli kaldt i index.js
export default class Home extends React.Component{
    state = {
            loggedIn : false,
            email : "",
            password : ""
        }
renderAuth() {
        firebase.auth().onAuthStateChanged(currentUser => {
			if (currentUser) {
				email = currentUser.email;
				password = currentUser.password;
				this.setState({loggedIn: true});
			} else {
				this.setState({loggedIn: false});
            }
        
		});
    }

    render() {
        switch(this.state.loggedIn){
            case true:
                return (
                     <Drawers/>)
            case false: 
                return (
                    <LoginAppContainer/>
                );
            default:
                return <ActivityIndicator size='large'/>;
        }
    }
};*/