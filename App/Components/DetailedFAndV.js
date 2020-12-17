import styles from './styles';
import * as React from 'react';
import { View, Text, Platform, Button, Alert, Image, TouchableOpacity, Linking, SafeAreaView, ScrollView } from 'react-native';
import firebase from 'firebase';
import { YellowBox } from 'react-native';
import _ from 'lodash';


YellowBox.ignoreWarnings(['Setting a timer']);
const _console = _.clone(console);
console.warn = message => {
    if (message.indexOf('Setting a timer') <= -1){
        _console.warn(message);
    }
};

class DetailedFAndV extends React.Component {
    state = { fruitANDvegetables : null};
    
    //Utleseer navn fra navigation parameteret og loader frugt når komponent starter. 
    componentDidMount(){
        const name = this.props.navigation.getParam('name');
        this.loadFruitsAndVegetabels(name);
    }

    //Navnet på frugten fra funksjonens argument innsettes i stien.
    loadFruitsAndVegetabels = name => {
        firebase
        .database()
        .ref('/FruitsAndVegetables/' + name)
        .on('value', FAndV => {
            this.setState({fruitANDvegetables: FAndV.val()});
        });
    };

    render() {
        const {fruitANDvegetables} = this.state;
        if(!fruitANDvegetables){
            return <Text>No data input</Text>
        }
        return (
          //innhold i detaljert skjerm, bruker ref fra firebase til å hente alt innhold

            <SafeAreaView style={styles.detailedcontainer}>
               <ScrollView showsVerticalScrollIndicator={false}>
               <Text style={styles.oversigt}>
                OM VAREN
                </Text>
              <Text style={styles.paragraph}> {fruitANDvegetables.name} </Text>
              <TouchableOpacity style={styles.box1}>
              <Text style={styles.subtext}>
           I sæson fra {fruitANDvegetables.month}
              </Text>
              </TouchableOpacity>
              <Image source={{uri: fruitANDvegetables.url}}
               style={styles.image} />

              <Text style={styles.climate}>
                Næringsinhold pr. 100 gram
              </Text>

              <Text style={styles.maintext}>
              {fruitANDvegetables.nutrition.Kalorier}
              </Text>
              <Text style={styles.maintext}>
              {fruitANDvegetables.nutrition.Protein}
              </Text>
              <Text style={styles.maintext}>
              {fruitANDvegetables.nutrition.Kulhydrat}
              </Text>
              <Text style={styles.maintext}>
              {fruitANDvegetables.nutrition.Fedt}
              </Text>
             
              <Text style={styles.climate}>
              Klimapåvirkning
              </Text>
              <TouchableOpacity style={{  
                borderColor: fruitANDvegetables.climaColour,
                backgroundColor: fruitANDvegetables.climaColour,
                borderWidth: 2,
                borderRadius: 5,
                margin: 7,
                marginBottom: 15}}>

              <Text style={styles.subtext}>
              {fruitANDvegetables.climachange}
              </Text>
              </TouchableOpacity>

          
              <Text style={styles.climate}>
                Mangler du inspiration?
              </Text>
              <View style={{ flex: 1, alignSelf: 'stretch', flexDirection: 'row' }}>
                  <TouchableOpacity style={styles.recipeButton} onPress={() => Linking.openURL(fruitANDvegetables.RecipeURL1)}>
                    <Image source={{uri: fruitANDvegetables.recipeImage1}} style={styles.recipeImage}/>
                    <Text style={styles.recipeText}>{fruitANDvegetables.recipeText1}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.recipeButton} onPress={() => Linking.openURL(fruitANDvegetables.RecipeURL2)}>
                    <Image source={{uri: fruitANDvegetables.recipeImage2}} style={styles.recipeImage}/>
                    <Text style={styles.recipeText}>{fruitANDvegetables.recipeText2}</Text>
                    </TouchableOpacity>
                    </View>

                    <View style={{ flex: 1, alignSelf: 'stretch', flexDirection: 'row' }}>
                    <TouchableOpacity style={styles.recipeButton} onPress={() => Linking.openURL(fruitANDvegetables.RecipeURL3)}>
                    <Image source={{uri: fruitANDvegetables.recipeImage3}} style={styles.recipeImage}/>
                    <Text style={styles.recipeText}>{fruitANDvegetables.recipeText3}</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.recipeButton} onPress={() => Linking.openURL(fruitANDvegetables.RecipeURL4)}>
                    <Image source={{uri: fruitANDvegetables.recipeImage4}} style={styles.recipeImage}/>
                    <Text style={styles.recipeText}>{fruitANDvegetables.recipeText4}</Text>
              </TouchableOpacity>

              </View>

              </ScrollView>
            </SafeAreaView>
          );
    }
}
export default DetailedFAndV;