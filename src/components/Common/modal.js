import React, { Component, useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";

const My_modal = (props) => {
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={props.modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Add data</Text>

            <View style={{ flexDirection: "row" }}>
              <TouchableHighlight
                style={styles.button}
                onPress={() => {
                  props.setModalVisible(!props.modalVisible);
                }}
              >
                <Text style={styles.textStyle}>Save</Text>
              </TouchableHighlight>
              <TouchableHighlight
                style={styles.button}
                onPress={() => {
                  props.setModalVisible(!props.modalVisible);
                }}
              >
                <Text style={styles.textStyle}>Cancel</Text>
              </TouchableHighlight>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  button: {
    backgroundColor: "#03a9f41c",
    borderRadius: 5,
    padding: 10,
    margin: 5,
  },
  textStyle: {
    color: "#03a9f4",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default My_modal;

My_modal.defaultProps = {
  // setModalVisible : func,
  modalVisible: false,
};
