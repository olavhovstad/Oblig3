/*import * as React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import firebase from 'firebase';

import FAndVListItem from '../Components/FAndVListItem';
import styles from './styles';
import { FlatList } from 'react-native-gesture-handler';
import Dato from '../Components/Dato';


export default class Recipies extends React.Component {
    state = {
        items: {},
        recipeURL1:{},
    };

    componentDidMount() {
        firebase
            .database()
            .ref('/FruitsAndVegetables')
            .on('value', snapshot => {
                this.setState({ items: snapshot.val() });
            });
    }

   
    render() {
        const { items } = this.state;
        // Vi viser ingenting hvis der ikke er data
        if (!items) {
            return null;
        }
        // Flatlist forventer et array. Derfor tager vi alle values fra vores cars objekt, og bruger som array til listen
        const itemArray = Object.values(items);
        // Vi skal også bruge alle IDer, så vi tager alle keys også.
        const itemKeys = Object.keys(items);
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView>
                <Text style={styles.oversigt}>
                            Opskrifter
                     </Text>
                
                <FlatList style={styles.scrollView}
                    data={itemArray}
                    // Vi bruger carKeys til at finde ID på den aktuelle bil og returnerer dette som key, og giver det med som ID til CarListItem
                    keyExtractor={(item, index) => itemKeys[index]}
                    renderItem={({ item, index }) => (
                        <RecipeItem
                            fruitANDvegetables={item}
                            name={itemKeys[index]}
                            onSelect={this.handeRecipe}
                            
                        
                        />
                    )}
                >
                   
                </FlatList>
                </ScrollView>
            </SafeAreaView>
        );
    }
}*/