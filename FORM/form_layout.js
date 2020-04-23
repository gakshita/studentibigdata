import React from "react";
import { View, Text, StyleSheet ,TouchableOpacity,TextInput,Dimensions, Picker} from "react-native";
const { width } = Dimensions.get("window");

const { height } = Dimensions.get("window");

export default class Form_layout extends React.Component {
  state = {
    education : "",
    college : "",
    stream : ""
  }
  render() {
    return (
      <View style={style.container}>
        {/* <View
          style={style.box}
        > */}
        <TextInput
                    placeholder="Name"
                    // onChangeText={this._onChange1}
                    // value={this.state.password}
                    style = {style.input}
                />
          <TextInput
                    placeholder="Contact"
                    // onChangeText={this._onChange1}
                    // value={this.state.password}
                    style = {style.input}
                />
          <TextInput
                    placeholder="Email"
                    // onChangeText={this._onChange1}
                    // value={this.state.password}
                    style = {style.input}
                />
          <Picker
                    selectedValue={this.state.education}
                    style={{...style.input, borderRadius:30}}
                    onValueChange={(itemValue, itemIndex) => this.setState({education: itemValue})}
                  >
                    <Picker.Item label="Java" value="java" />
                    <Picker.Item label="JavaScript" value="js" />
                </Picker>
          <Picker
                    selectedValue={this.state.college}
                    style={{...style.input, borderRadius:30}}
                    onValueChange={(itemValue, itemIndex) => this.setState({college: itemValue})}
                  >
                    <Picker.Item label="Java" value="java" />
                    <Picker.Item label="JavaScript" value="js" />
                </Picker>
          <Picker
                    selectedValue={this.state.stream}
                    style={{...style.input, borderRadius:30}}
                    onValueChange={(itemValue, itemIndex) => this.setState({stream: itemValue})}
                  >
                    <Picker.Item label="Java" value="java" />
                    <Picker.Item label="JavaScript" value="js" />
                </Picker>
                <TouchableOpacity 
                      style={style.button}
                  >
                <Text style={{color:"white"}}>Add Data</Text></TouchableOpacity>
        </View>
        
      // </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    flex:1
  },
  button: {
    borderRadius : 100,
    alignItems: "center",
    justifyContent: "center",
    width:120, 
    paddingLeft:0, 
    height:45, 
    backgroundColor:"#0dac86",
    marginTop: 10
    
  },
  box:{ 
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    width:width,
    height: 450, 
    elevation:4 ,
    borderTopLeftRadius:30,
    },
  input: {
        backgroundColor: "white",
        elevation: 5,
        width: 250,
        height:40,
        alignItems: "center",
        justifyContent: "center",
        marginBottom:20,
        paddingTop:10,
        paddingBottom:10,
        paddingLeft:30,
        borderRadius: 30,
    }
});
