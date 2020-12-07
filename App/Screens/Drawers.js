import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import FAndVList from './FAndVList';
import AddFruits from '../Components/AddFruits';
import DetailedFAndV from '../Components/DetailedFAndV';
import StackNavigator from './Hometry'
import Hometry from './Hometry';
import Recipes from './Recipes';

const Drawer = createDrawerNavigator();



export  default class Drawers extends React.Component { 
    render(){
  return (
        <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="Frugt og grønt i sæson" component={Hometry}/>
          <Drawer.Screen name="AddFruits" component={AddFruits}/>
        </Drawer.Navigator>
        </NavigationContainer>
  );
}

};
//<Drawer.Screen name='Opskrift' component={Recipes}/>
