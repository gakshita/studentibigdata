import React from "react"
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput, 
  Dimensions,
  ImageBackground
} from "react-native";
import { connect } from 'react-redux';
import {login_action, update_Token} from "./../STORE/action/loginaction"

const { width } = Dimensions.get("window");

const { height } = Dimensions.get("window");

class LOGIN extends React.Component{
    state = {
        username : "9782220470",
        password : "Abc@12345",
        // username : "",
        // password : "",
       

    }
    check =() =>new Promise((resolve, reject) => {
            console.log("////////////")
            this.props.login({username: this.state.username, password: this.state.password})
            this.props.navigation.navigate(this.props.login_details.login ? "Home" : console.log("login"));
            return data
        })
    _onChange =(user) => {
        this.setState({username:user})
    }
    _onChange1 =(user) => {
            this.setState({password:user})
    }
    _onPress =async() => {
        const data = await this.check()
        console.log("----*****************------")
        return data
    }
    
    render(){
        return(
            <View >
            {/* <ImageBackground source={require('./../images/bg.jpg')} style={style.backgroundImage} > */}
            <View style={{
                flex:1, 
                top:400,
                alignItems: "center",
                justifyContent: "center",
            }}>
                <TextInput
                    placeholder="Username"
                    onChangeText={this._onChange}
                    value={this.state.username}
                    style = {style.input}
                />
                <TextInput
                    placeholder="Password"
                    onChangeText={this._onChange1}
                    value={this.state.password}
                    style = {style.input}
                />

                <TouchableOpacity 
                    onPress = {this._onPress}
                    style={{...style.input , width:120, paddingLeft:0, height:45, marginTop:20, backgroundColor:"#0dac86"}}
                >
                <Text style={{color:"white"}}>LOGIN</Text></TouchableOpacity>
                <TouchableOpacity style={{...style.input ,width:120, paddingLeft:0, height:45, backgroundColor:"#0dac86"}}>
                <Text style={{color:"white"}}>SIGNUP</Text>
                </TouchableOpacity>

                <Text>{this.props.login_details.token}</Text>
         </View>
         {/* </ImageBackground> */}
         </View>
        )
    }
}

const style = StyleSheet.create({
    backgroundImage:{
        flex: 1,
        resizeMode: "cover",
        // width: width,
        // height: height,
        justifyContent: "center",
        alignItems: "center",
    },
    input: {
        backgroundColor: "white",
        elevation: 5,
        width: width - 70,
        height:40,
        alignItems: "center",
        justifyContent: "center",
        marginBottom:10,
        paddingTop:10,
        paddingBottom:10,
        paddingLeft:40,
        borderRadius: 30,
    }
})

const mapStateToProps = state => {
    return { 
        login_details : state
    }
}

const mapDispatchToProps = {
    login : login_action,
    update_Token : update_Token
}
export default connect(mapStateToProps,mapDispatchToProps)(LOGIN)





