import * as React from 'react';
import {View,Text,StyleSheet,TextInput,Button,Alert,ScrollView,SafeAreaView} from 'react-native';
import firebase from 'firebase';

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center' },
    row: {
        flexDirection: 'row',
        height: 30,
        margin: 10,
    },
    label: { fontWeight: 'bold', width: 150 },
    input: { borderWidth: 1, flex: 1 },
});

//Brukes for å legge inn frugt, samt div innhold inn til databasen
//eksisterer ikke som et View, pga er kun admin som skal ha tilgang.
export default class AddCurrency extends React.Component {
    state = {
        name: '',
        month: '',
        climachange: '',
        url:'',
        recipeURL: ''
    };
    handleNameChange = text => this.setState({ name: text });

    handleMonthChange = text => this.setState({ month: text });

    handleClimaChange = text => this.setState({ climachange: text});

    handleUrlChange = text => this.setState({ url: text});

    handlerecipeURLChange = text => this.setState({recipeURL: text});


    handleSave = () => {
        const { name, month, climachange, url, recipeURL } = this.state;
        try {
            const reference = firebase
                .database()
                .ref('/FruitsAndVegetables/')
                .push({ name, month, climachange, url, recipeURL  });
            Alert.alert(`Saved`);
            this.setState({
                name,
                month,
                climachange,
                url,
                recipeURL
            });
        } catch (error) {
            Alert.alert(`Error: ${error.message}`);
        }
    };
    render() {
        const { name, month, climachange, url, recipeURL } = this.state;
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView>
                    <View style={styles.row}>
                        <Text style={styles.label}>Name</Text>
                        <TextInput
                            value={name}
                            onChangeText={this.handleNameChange}
                            style={styles.input}
                        />
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.label}>Month</Text>
                        <TextInput
                            value={month}
                            onChangeText={this.handleMonthChange}
                            style={styles.input}
                        />
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.label}>Clima factor:</Text>
                        <TextInput
                            value={climachange}
                            onChangeText={this.handleClimaChange}
                            style={styles.input}
                        />
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.label}>Link to picture</Text>
                        <TextInput
                            value={url}
                            onChangeText={this.handleUrlChange}
                            style={styles.input}
                        />
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.label}>Link to recipe:</Text>
                        <TextInput
                            value={recipeURL}
                            onChangeText={this.handlerecipeURLChange}
                            style={styles.input}
                        />
                    </View>
                    <Button title="Add Fruit" onPress={this.handleSave} />
                </ScrollView>
            </SafeAreaView>
        );
    }
}
