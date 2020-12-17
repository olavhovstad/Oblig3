import * as React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, ScrollView, Linking } from 'react-native';
import firebase from 'firebase';

import styles from './styles';
import { FlatList } from 'react-native-gesture-handler';
import RecipeItem from '../Components/RecipeItem';

export default class Recipies extends React.Component {
    state = {
        items: {},
        recipeURL1:{},
    };
     
//ref til firebase database
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
        // Flatlist forventer et array. Derfor tar vi alle values fra vores fruits&vegetables objekt, og bruger som array til listen
        const itemArray = Object.values(items);
        // Vi skal også bruge alle navn, så vi tager alle keys også.
        const itemKeys = Object.keys(items);
        return (
            <SafeAreaView style={styles.container}>
              
                <Text style={styles.oversigt}>
                            Opskrifter
                     </Text>
                
                <FlatList style={styles.scrollView}
                    data={itemArray}
                    // Vi bruger itemKeys til at finde navn på den aktuelle frugt og returnerer dette som key, og giver det med som ID til RecipeItem
                    keyExtractor={(item, index) => itemKeys[index]}
                    renderItem={({ item, index }) => (
                        <RecipeItem
                            fruitANDvegetables={item}
                            recipeURL1={itemKeys[index]}
                        />
                    )}
                >
                   
                </FlatList>
              
            </SafeAreaView>
        );
    }
}