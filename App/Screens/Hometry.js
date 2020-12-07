import firebase from 'firebase';
import * as React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import FAndVList from './FAndVList';
import DetailedFAndV from '../Components/DetailedFAndV';
import AddFruits from '../Components/AddFruits';



const StackNavigator = createStackNavigator(
    {
   
    FAndVList: { screen: FAndVList},
    DetailedFAndV : { screen: DetailedFAndV },
    AddFruits:{screen: AddFruits},
 
    },
    { initialRouteKey: 'FAndVList', headerMode: "none" }
);

const AppContainer = createAppContainer(StackNavigator);


export default class Hometry extends React.Component {

render(){
    return( <AppContainer/>)
  
}
}