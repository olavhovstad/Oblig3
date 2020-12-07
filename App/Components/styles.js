import {StyleSheet} from 'react-native';
import Constants from 'expo-constants'
import Dimensions from 'react-native'; 

//Felles styling for componenter
    const styles = StyleSheet.create({
      
        container: {
            flex: 1,
            borderWidth: 1,
            margin: 5,
            padding: 5,
            height: 50,
            justifyContent:'center'
        },
        detailedcontainer: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            paddingTop: Constants.statusBarHeight,
            backgroundColor: "white",
            padding: 8,
        },
        oversigt:{
          fontSize: 14,
          fontWeight: '600',
          textAlign: 'center',
          color: '#00a976',
          marginTop: 30,   
        },
        paragraph: {
          fontSize: 32,
          marginBottom: 25,
          fontWeight: '500',
          lineHeight: 34,
          textAlign: 'center',
          color: '#000000',
          },
          box1: {
            borderColor: '#00a976',
            backgroundColor: '#00a976',
            borderWidth: 2,
            borderRadius: 5,
            margin: 7,
            marginBottom: 35,
          },
        label: { 
          borderColor: '#00a976',
          backgroundColor: 'white',
          borderWidth: 2,
          borderRadius: 5,
          margin: 7,
          shadowColor: "#000",
        },
        image:{
            width: 300,
            height: 250, 
            alignSelf: 'center'
        },
        header: {
            margin: 16,
            fontSize: 45,
            fontWeight: 'bold',
            textAlign: 'center',
            color: '#0ba100'
          },
          maintext:{
            fontSize: 18,
            fontWeight: '400',
            textAlign: 'left',
            color: '#000000',
            paddingLeft: 100,
            paddingBottom: 8,
            flex: 1,
          
          },
          subtext:{
            margin: 12,
            fontSize: 16,
            fontWeight: '400',
            textAlign: 'center',
            color: 'white',
            
          },
          recipeText:{
            margin: 12,
            fontSize: 12,
            textAlign: 'center',
            color: 'black',
            fontWeight:'400',
            }, 
            arrayImage:{
              width: 180, height: 150, alignSelf: 'center'
            },
            arrayHeader:{
              margin: 24,
              fontSize: 32,
              textAlign: 'center',
              color: '#000000'

            },
            arrayText:{
              margin: 12,
              fontSize: 18,
              fontWeight: 'bold',
              textAlign: 'center',
              color: '#000000'
            },
            climate: {
              fontSize: 18,
              fontWeight: 'bold',
              lineHeight: 34,
              color: '#000000',
              textAlign: 'center',
              marginBottom: 10,
              marginTop: 10,
              },
              recipeImage:{
                width: 140,
                height: 100,
                alignSelf: 'center'

              },
              recipeButton:{
                backgroundColor:'white',
                margin: 7,
              },

            
          
});
export default styles;
