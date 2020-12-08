import * as React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import FAndVList from './FAndVList';
import DetailedFAndV from '../Components/DetailedFAndV';
import AddFruits from '../Components/AddFruits';


//kontruerer en stack navigator, som inneholder screens relatert til frukt & grønt
const StackNavigator = createStackNavigator(
    {
   
    FAndVList: { screen: FAndVList},
    DetailedFAndV : { screen: DetailedFAndV },
    AddFruits:{screen: AddFruits},
 
    },
    { initialRouteKey: 'FAndVList', headerMode: "none" }
);

//Oppretter en appcointainer
const AppContainer = createAppContainer(StackNavigator);


export default class Hometry extends React.Component {

render(){
  //returnerer appcontainer, når Hometry blir kalt i Drawers 
    return( <AppContainer/>)
  
}
}