import * as React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import firebase from 'firebase';

import FAndVListItem from '../Components/FAndVListItem';
import styles from './styles';
import { FlatList } from 'react-native-gesture-handler';
import Dato from '../Components/Dato';


export default class FAndVList extends React.Component {
    state = {
        items: {},
        name:{},
    };
//refereanse til firebase databasen. 
    componentDidMount() {
        firebase
            .database()
            .ref('/FruitsAndVegetables')
            .on('value', snapshot => {
                this.setState({ items: snapshot.val() });
            });
    }

    //navigerer med navn som prop, til den detaljerte skjermen.
    handleSelectItems = name => {
        this.props.navigation.navigate('DetailedFAndV',{ name });
    };

    render() {
        const { items } = this.state;
        // Vi viser ingenting hvis der ikke er data
        if (!items) {
            return null;
        }
        // Flatlist forventer et array. Derfor tar vi alle values fra vores frukt objekt, og bruger som array til listen
        const itemArray = Object.values(items);
        // Vi skal også bruge alle navn, så vi tager alle keys også.
        const itemKeys = Object.keys(items);
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView>
                <Text style={styles.oversigt}>
                            OVERSIGT
                     </Text>
                     <Text style={styles.datoStyle}>
          <Text>
            Frugt og grønt i sæson i
          </Text>
           
          <Dato/>
        </Text>

                <FlatList style={styles.scrollView}
                    data={itemArray}
                    // Vi bruger itemKeys til å finde navn på den aktuelle frugt og returnerer dette som key, og giver det med som ID til FAndVListItem
                    keyExtractor={(item, index) => itemKeys[index]}
                    renderItem={({ item, index }) => (
                        <FAndVListItem
                            fruitANDvegetables={item}
                            name={itemKeys[index]}
                            onSelect={this.handleSelectItems}
                        
                        />
                    )}
                >
                   
                </FlatList>
                </ScrollView>
            </SafeAreaView>
        );
    }
}