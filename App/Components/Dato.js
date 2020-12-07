import React, {useState, useEffect} from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

//Denne funktion bruges til at finde dags dato
export default function Dato (){

  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    var monthNames = [ 'Januar', 'Februar', 'Marts', 'April', 'Maj','Juni',
    'Juli', 'August', 'September', 'October', 'November', 'December'];
    var month = monthNames[new Date().getMonth()]; //Nuværende måned
    setCurrentDate(
      month
    );
  }, []);

//Det der vises i selve appen
  return (
          <Text>
              {" " + currentDate}
          </Text>
  );
}
