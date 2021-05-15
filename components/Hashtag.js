import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

export default class Hashtag extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { tag, navigation } = this.props;

    return (
      <TouchableOpacity
        style={styles.container}
        onPress={() => navigation.push("HashtagDetail")}
      >
        <Text style={styles.text}> #{tag} </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#39393C",
    paddingHorizontal: 14,
    paddingVertical: 10,
    marginLeft: 20,
    borderRadius: 6,
  },
  text: {
    color: Colors.white,
    fontSize: 14,
    fontFamily: "MontsSemibold",
  },
});
