import * as React from 'react';
import { Button, View, TouchableOpacity } from 'react-native';
import firebase from 'firebase';

//import { createDrawerNavigator } from '@react-navigation/drawer';
import {createStackNavigator} from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import { createAppContainer } from 'react-navigation';

import { SimpleLineIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import LoginView from '../Authentication/LoginView';
import SignUp from '../Authentication/SignUp';
import { AppLoading } from 'expo';
import { ActivityIndicator } from 'react-native-paper';
/*
const LoginStack = createStackNavigator({
    Login : LoginView,
    Register : SignUp,

},
{
    navigationOptions: () => ({
        headerTransparent: true,
        headerBackTitle: 'Back',
        headerTintColor: 'white'
    }),
});
*/
//konstruerer en stacknavigator til å håndtere views(currency list)
const LoginStack = createStackNavigator({
    Login: {screen: LoginView},
    SignUp : {screen: SignUp},

    
},
{initialRouteKey: LoginView});

/*
const FruitsStackNavigator = createStackNavigator({
    'List of Fruits' : {screen : FruitList} 
})

/*
const Drawer = createDrawerNavigator({
Country: 
{screen: CountryStackNavigator, 
    navigationOptions:{
        
    }
},

Fruits: {
    screen: FruitsStackNavigator,
    navigationOptions:{

    } 
}
});

*/
const TabNavigator = createBottomTabNavigator({
    Camera: {screen: LoginStack,
        navigationOptions: {
            tabBarLabel:"Scan",
            tabBarIcon: ({ tintColor }) => (
                <SimpleLineIcons name="camera" size={24} color={tintColor} />
            )
        },
    },
    Currency: {screen: SignUp,
        navigationOptions: {
            tabBarLabel:"Currency",
            tabBarIcon: ({ tintColor }) => (
                <Entypo name="credit" size={24} color={tintColor} />
            )
        },
    },
  });
/*
const FreeAppContainer = createStackNavigator({
    Country : {screen: FreeCScreen}

})*/

const AppContainer = createAppContainer(TabNavigator);

const LoginAppContainer = createAppContainer(LoginStack);
    
    
 

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
                     <SignUp/>)
            case false: 
                return (
                    <LoginAppContainer/>
                );
            default:
                return <ActivityIndicator size='large'/>;
        }
    }
};
