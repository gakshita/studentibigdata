import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { post_api } from "../../api/api";

import { connect } from "react-redux";
import { login } from "../../store/Action/login_action";
import { Toast } from "native-base";

const { width } = Dimensions.get("window");
class Login extends React.Component {
  state = {
    username: "akshita",
    password: "akshita15",
    name: "akshita",
    signUp: false,
    loading: false,
  };

  login = async () => {
    console.log("hii");
    this.setState({ loading: true });
    var login_status = await post_api("login", {
      username: this.state.username,
      password: this.state.password,
    });
    this.setState({ loading: false });
    {
      login_status.success
        ? this.props.login({
            token: login_status.token,
            type: login_status.type,
          })
        : Toast.show({
            text: "Invalid username or password",
            buttonText: "Okay",
            duration: 3000,
            position: "top",
            type: "error",
            style: {
              borderRadius: 10,
              margin: 10,
              backgroundColor: "#ea4335f5",
            },
          });
    }
  };

  register = async () => {
    this.setState({ loading: true });
    var register = await post_api("register", {
      username: this.state.username,
      password: this.state.password,
      name: this.state.name,
    });
    this.setState({ loading: false });
    {
      register.success
        ? this.login()
        : Toast.show({
            text: register.message,
            buttonText: "Okay",
            duration: 3000,
            position: "top",
            type: "error",
            style: {
              borderRadius: 10,
              margin: 10,
              backgroundColor: "#ea4335f5",
            },
          });
    }
  };

  render() {
    return (
      <View style={{ justifyContent: "center", flex: 1, padding: 20 }}>
        <Text style={{ fontSize: 30, fontWeight: "bold" }}>
          {this.state.signUp ? "Create Account" : "Login"}
        </Text>
        {!this.state.signUp && (
          <Text style={{ color: "#9d9d9d" }}> Please sign in to continue</Text>
        )}

        <View style={{ marginTop: 20 }}>
          <TextInput
            style={{ ...styles.input, marginTop: 10 }}
            placeholder="Username"
            onChangeText={(username) => this.setState({ username })}
            defaultValue={this.state.username}
          />
          {this.state.signUp && (
            <TextInput
              style={{ ...styles.input, marginTop: 10 }}
              placeholder="Name"
              onChangeText={(name) => this.setState({ name })}
              defaultValue={this.state.name}
            />
          )}
          <TextInput
            style={{ ...styles.input, marginTop: 10 }}
            placeholder="Password"
            onChangeText={(password) => this.setState({ password })}
            defaultValue={this.state.password}
          />
        </View>
        {this.state.signUp ? (
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.register()}
          >
            <Text style={{ color: "white", fontSize: 20 }}>Sign Up</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.button} onPress={() => this.login()}>
            <Text style={{ color: "white", fontSize: 20 }}>Login</Text>
          </TouchableOpacity>
        )}
        <View style={{ marginTop: 20 }}>
          {this.state.signUp ? (
            <View style={{ flexDirection: "row" }}>
              <Text>Already have an account ?</Text>
              <TouchableOpacity
                onPress={() => {
                  this.setState({ signUp: false });
                  console.log(this.state.signUp);
                }}
                style={{ marginLeft: 5 }}
              >
                <Text
                  style={{
                    color: "#f67757",
                    fontWeight: "bold",
                    marginRight: 5,
                  }}
                >
                  Login
                </Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={{ flexDirection: "row" }}>
              <Text>Don't have an account ?</Text>
              <TouchableOpacity
                onPress={() => {
                  this.setState({ signUp: true });
                  console.log(this.state.signUp);
                }}
                style={{ marginLeft: 5 }}
              >
                <Text
                  style={{
                    color: "#f67757",
                    fontWeight: "bold",
                    marginRight: 5,
                  }}
                >
                  Sign Up
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
        <View style={{ marginTop: 20 }}>
          {this.state.loading && <ActivityIndicator />}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#f67757",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },
  input: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#c5c7cd",
    marginBottom: 10,
  },
});

const mapStateToProps = (state) => {
  console.log(state.login_reducer);
  return {
    login_details: state.login_reducer,
  };
};

const mapDispatchToProps = {
  login: login,
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
