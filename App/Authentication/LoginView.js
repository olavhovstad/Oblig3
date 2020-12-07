/*import * as React from 'react';
import {
    Button,
    Text,
    View,
    TextInput,
    ActivityIndicator,
} from 'react-native';
import firebase from "firebase";
import styles from './styles';
import Home from '../Screens/Home';
import { TouchableOpacity } from 'react-native-gesture-handler';
import SignUp from './SignUp';
import Drawers from '../Screens/Drawers';


//LoginView vil per dags dato ikke bli implementert, derfor ikke kommentert. 

export default class LoginView extends React.Component {
    state = {
        email: '',
        password: '',
        isLoading: false,
        errorMessage: null,
    };

    startLoading = () => this.setState({ isLoading: true });
    endLoading = () => this.setState({ isLoading: false });
    setError = errorMessage => this.setState({ errorMessage });
    clearError = () => this.setState({ errorMessage: null });
    handleChangeEmail = email => this.setState({ email });
    handleChangePassword = password => this.setState({ password });

    handleSubmit = async () => {
        const { email, password } = this.state;
        try {
            this.startLoading();
            this.clearError();

            // Here the data is passed to the service and we wait for the result
            let userCredential = await firebase
                .auth()
                .signInWithEmailAndPassword(email, password);

            this.setState({
                email: '',
                password: '',
            });
            const loggedInUser = firebase.auth().currentUser;
            if (loggedInUser !== null) {
                email = firebase.auth().currentUser.email;
                password = firebase.auth().currentUser.password;
            }
            this.endLoading();
            return(<Drawers/>)
        } catch (error) {
            this.setError(error.message);
            this.endLoading();
        }
    };

    render = () => {
        const { errorMessage, email, password } = this.state;
        return (
            <View style={styles.view}>

               <Text style={styles.Text}>Login</Text>
                <TextInput
                    placeholder="email"
                    value={email}
                    onChangeText={this.handleChangeEmail}
                    style={styles.inputField}
                />
                <TextInput
                    placeholder="password"
                    value={password}
                    onChangeText={this.handleChangePassword}
                    secureTextEntry
                    style={styles.inputField}
                />
                {errorMessage && (
                    <Text style={styles.error}>Error: {errorMessage}</Text>
                )}
                {this.renderButton()}
                <Button title="Create Account" clear buttonStyle={styles.buttonStyleText1}
										titleStyle={{fontSize: 15}} onPress={() => this.props.navigation.navigate('SignUp')}/>

            </View>
        );
    };

    renderButton = () => {
        const { isLoading } = this.state;
        if (isLoading) {
            return <ActivityIndicator />;
        }
        return <Button onPress={this.handleSubmit} title="Login" />;
    };
}

/*
import * as React from 'react';
import {
    Button,
    Text,
    View,
    TextInput,
    ActivityIndicator,
} from 'react-native';
import firebase from "firebase";
import styles from './styles';
import Home from '../Screens/Home';
import { TouchableOpacity } from 'react-native-gesture-handler';
import SignUp from './SignUp';


//LoginView vil per dags dato ikke bli implementert, derfor ikke kommentert. 

export default class LoginView extends React.Component {
    state = {
        email: '',
        password: '',
        isLoading: false,
        errorMessage: null,
    };

    startLoading = () => this.setState({ isLoading: true });
    endLoading = () => this.setState({ isLoading: false });
    setError = errorMessage => this.setState({ errorMessage });
    clearError = () => this.setState({ errorMessage: null });
    handleChangeEmail = email => this.setState({ email });
    handleChangePassword = password => this.setState({ password });

    handleSubmit = async () => {
        const { email, password } = this.state;
        try {
            this.startLoading();
            this.clearError();

            // Here the data is passed to the service and we wait for the result
            let userCredential = await firebase
                .auth()
                .signInWithEmailAndPassword(email, password);

            this.setState({
                email: '',
                password: '',
            });
            const loggedInUser = firebase.auth().currentUser;
            if (loggedInUser !== null) {
                email = firebase.auth().currentUser.email;
                password = firebase.auth().currentUser.password;
            }
            this.endLoading();
        } catch (error) {
            this.setError(error.message);
            this.endLoading();
        }
    };

    render = () => {
        const { errorMessage, email, password } = this.state;
        return (
            <View style={styles.view}>

               <Text style={styles.Text}>Login</Text>
                <TextInput
                    placeholder="email"
                    value={email}
                    onChangeText={this.handleChangeEmail}
                    style={styles.inputField}
                />
                <TextInput
                    placeholder="password"
                    value={password}
                    onChangeText={this.handleChangePassword}
                    secureTextEntry
                    style={styles.inputField}
                />
                {errorMessage && (
                    <Text style={styles.error}>Error: {errorMessage}</Text>
                )}
                {this.renderButton()}
                <Button title="Create Account" clear buttonStyle={styles.buttonStyleText1}
										titleStyle={{fontSize: 15}} onPress={() => this.props.navigation.navigate('SignUp')}/>

            </View>
        );
    };

    renderButton = () => {
        const { isLoading } = this.state;
        if (isLoading) {
            return <ActivityIndicator />;
        }
        return <Button onPress={this.handleSubmit} title="Login" />;
    };
}*/