import React from 'react';
import {ActivityIndicator} from 'react-native';
import firebase from 'firebase';
import {createStackNavigator} from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';

import LoginView from "../Authentication/LoginView";
import SignUp from "../Authentication/SignUp";

import {AppLoading, Icon} from 'expo';


//konstruerer en stacknavigator til å håndtere views(currency list)
const LoginStack = createStackNavigator({
    Login: {screen: LoginView},
    SignUp : {screen: SignUp},
   
},
    {initialRouteKey: LoginView},

    
	{
		navigationOptions: () => ({
			headerTransparent: true,
			headerBackTitle: 'Back',
			headerTintColor: 'white'
		}),
    }
)
  

const HomeStack = createStackNavigator({

});

const SettingsStack = createStackNavigator({

});

const MapsStack = createStackNavigator({
});

const MainAppStack = createBottomTabNavigator({
		Home: HomeStack,
		Maps: MapsStack,
		Settings: SettingsStack,
	},
	{
		navigationOptions: ({navigation}) => ({
			tabBarIcon: ({focused, horizontal, tintColor}) => {
				const {routeName} = navigation.state;
				let iconName;
				if (routeName === 'Home') {
					iconName = `ios-home${focused ? '' : '-outline'}`;
				} else if (routeName === 'Maps') {
					iconName = `ios-map${focused ? '' : '-outline'}`;
				} else {
					iconName = `ios-settings${focused ? '' : '-outline'}`
				}
				return <Icon.Ionicons name={iconName} size={horizontal ? 20 : 25} color={tintColor}/>;
			},
		}),
		tabBarOptions: {
			activeTintColor: '#80D0C7',
			inactiveTintColor: '#13547A',
			style: {
				backgroundColor: 'transparent',
			},
		},
		initialRouteName: 'Home',
	}
);

const AppContainer = createAppContainer(MainAppStack);

const LoginAppContainer = createAppContainer(LoginStack);

export default class Hometry extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loggedIn: null,
			isLoadingComplete: false,
			skipLoadingScreen: false,
			appIsReady: false,
		}
	}

	componentWillMount() {
		firebase.auth().onAuthStateChanged(user => {
			if (user) {
				firebase.email = user.email;
				firebase.password = user.password;
				this.setState({loggedIn: true});
			} else {
				this.setState({loggedIn: false});
			}
		});
	}

	_cacheResourcesAsync() {
		return true;
	}

	render() {
		if (!this.state.appIsReady) {
			return (
				<AppLoading
					startAsync={this._cacheResourcesAsync}
					onFinish={() => this.setState({appIsReady: true})}
					onError={console.warn}
				/>
			)
		}
		switch (this.state.loggedIn) {
			case true:
				return (
					<AppContainer/>
				);
			case false:
				return (
					<LoginAppContainer/>
				);
			default:
				return <ActivityIndicator size="large"/>;
		}
	}
}
