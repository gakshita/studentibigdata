import React from "react"
import {
  View,
  ActivityIndicator,
    AsyncStorage,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput, 
  Dimensions,
  ImageBackground,StatusBar
} from "react-native";
import { connect } from 'react-redux';
import {update_Token} from "./../STORE/action/loginaction"

const ACCESS_TOKEN = "access_token";

class AuthLoadingScreen extends React.Component {
    componentDidMount() {
        this._bootstrapAsync();
    }

    _bootstrapAsync = async () => {
        const userToken = await AsyncStorage.getItem(ACCESS_TOKEN);
        this.props.update_Token(userToken);
        this.props.navigation.navigate(userToken ? "Home" : 'Login');
    };
    
    render() {
        return (
            <View>
                <ActivityIndicator/>
                <StatusBar barStyle="default"/>
            </View>
        );
    }
}

export default connect(null, {update_Token})(AuthLoadingScreen)