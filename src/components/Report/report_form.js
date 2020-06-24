import React, { Component, useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Picker,
  ScrollView,
} from "react-native";

export default function ReportForm() {
  return (
    <View>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <Text style={styles.heading}>Campaign</Text>
        <DropDown />
        <Text style={styles.heading}>Education</Text>
        <DropDown />
        <Text style={styles.heading}>Status</Text>
        <DropDown />
        <Text style={styles.heading}>User</Text>
        <DropDown />
        <Text style={styles.heading}>City</Text>
        <DropDown />

        <View
          style={{ flexDirection: "row", marginTop: 10, alignSelf: "center" }}
        >
          <TouchableHighlight style={styles.button}>
            <Text style={styles.textStyle}>Save</Text>
          </TouchableHighlight>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
    paddingBottom: 300,
    marginBottom: 200,
  },
  input: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#c5c7cd",
    marginBottom: 10,
  },
  heading: {
    marginTop: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#f67757",
    borderRadius: 5,
    padding: 10,
    margin: 5,
    height: 50,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  textStyle: {
    color: "white",
    textAlign: "center",
  },
});

function DropDown(props) {
  return (
    <View
      style={{
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "#c5c7cd",
      }}
    >
      <Picker
        selectedValue="hii"
        style={styles.input}
        placeholder="Category"
        // onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>
    </View>
  );
}
