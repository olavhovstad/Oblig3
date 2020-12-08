import * as React from 'react';
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    TouchableOpacity,
    Image,
    Linking
} from 'react-native';
import styles from './styles';

export default class RecipeItem extends React.Component {
    handlePress = () => {
        // Her pakker vi ting ud fra props
        const {recipeText1, RecipeURL1, recipeImage1,  onSelect} = this.props
        // Kalder den onSelect prop vi får, med det ID vi har fået som argument.
        onSelect(recipeText1, RecipeURL1, recipeImage1)
    };

    render() {
        const { fruitANDvegetables } = this.props;
        return (
            <TouchableOpacity style={styles.label} onPress={this.handlePress} onPress={() => Linking.openURL(fruitANDvegetables.RecipeURL1)}>
                <Text style={styles.arrayHeader}>
                    {fruitANDvegetables.recipeText1}                    
                </Text>
                <Image source={{uri: fruitANDvegetables.recipeImage1}}
               style={styles.arrayImage} />
               <Text style={styles.arrayText } onPress={() => Linking.openURL(fruitANDvegetables.RecipeURL1)}  >
                   Se opskriften - {fruitANDvegetables.RecipeURL1} her
               </Text>
            </TouchableOpacity>
        );
    }
}