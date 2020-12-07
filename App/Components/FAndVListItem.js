import * as React from 'react';
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    TouchableOpacity,
    Image
} from 'react-native';
import styles from './styles';

export default class FAndVListItem extends React.Component {
    handlePress = () => {
        // Her pakker vi ting ud fra props
        const {name,url, onSelect} = this.props
        // Kalder den onSelect prop vi får, med det ID vi har fået som argument.
        onSelect(name, url)
    };

    render() {
        const { fruitANDvegetables } = this.props;
        return (
            <TouchableOpacity style={styles.label} onPress={this.handlePress}>
                <Text style={styles.arrayHeader}>
                    {fruitANDvegetables.name}                    
                </Text>
                <Image source={{uri: fruitANDvegetables.url}}
               style={styles.arrayImage} />
               <Text style={styles.arrayText}>
                   Læs mere om {fruitANDvegetables.name} her
               </Text>
            </TouchableOpacity>
        );
    }
}