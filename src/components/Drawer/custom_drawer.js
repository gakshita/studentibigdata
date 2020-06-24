import React from "react";
import { View, Image, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { DrawerItemList, DrawerItem } from "@react-navigation/drawer";
import Icon from "react-native-vector-icons/Feather";
import { connect } from "react-redux";

import { logout } from "../../store/Action/login_action";
import { Toast } from "native-base";

class CustomDrawerContent extends React.Component {
  _logout = () => {
    console.log("hii");
    this.props.logout();
    Toast.show({
      text: "Logged out",
      buttonText: "Okay",
      duration: 3000,
      position: "top",
      type: "success",
      style: { borderRadius: 10, margin: 10 },
    });
  };
  render() {
    return (
      <View>
        <View
          style={{
            height: "30%",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 20,
            borderBottomWidth: 0.18,
          }}
        >
          <Image
            source={require("./../../assets/images.jpg")}
            width={50}
            height={10}
            style={{ width: 60, height: 60, borderRadius: 100 }}
          />
          <TouchableOpacity>
            <Text style={{ fontSize: 20 }}> Jeff Blasdell</Text>
          </TouchableOpacity>
          <Text style={{ color: "#f51c44" }}>User/Admin</Text>
        </View>
        <DrawerItemList {...this.props} />
        <DrawerItem
          label="Logout"
          onPress={() => this._logout()}
          icon={(config) => <Icon name="log-out" size={20} color="#6a70fc" />}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state.login_reducer);
  return {
    login_details: state.login_reducer,
  };
};

const mapDispatchToProps = {
  logout: logout,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CustomDrawerContent);
