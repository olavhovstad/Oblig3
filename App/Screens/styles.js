import {StyleSheet} from 'react-native';

//Felles styling for componenter
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            backgroundColor: "white",
          },
          scrollView: {
            backgroundColor: 'white',
          },
        oversigt: {
            fontSize: 14,
            fontWeight: "bold",
            textAlign: 'center',
            color: '#00a976',
            paddingTop: 30
            },
        datoStyle:{
            fontSize: 32,
  margin: 25,
  fontWeight: '500',
  lineHeight: 34,
  textAlign: 'center',
  color: '#000000',
        }
    });

    export default styles;