import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import AddFruits from '../Components/AddFruits';
import Hometry from './Hometry';
import Recipes from './Recipes';

//oppretter en drawer navigator.
const Drawer = createDrawerNavigator();



export  default class Drawers extends React.Component { 
    render(){
  return (
      //drawer navigator, navigerer til forskjellige screens (components)
        <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="Frugt og grønt i sæson" component={Hometry}/>
          <Drawer.Screen name='Opskrift' component={Recipes}/>
          <Drawer.Screen name="AddFruits" component={AddFruits}/>
        </Drawer.Navigator>
        </NavigationContainer>
  );
}

};
