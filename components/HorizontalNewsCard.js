import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

export default class HorizontalNewsCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { image, title, time, publisher } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: image,
            }}
            width="100"
            height="100"
            style={styles.image}
          />
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>
            {time} | <Text>{publisher}</Text>
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    height: 90,
    marginBottom: 10,
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 6,
  },
  contentContainer: {
    flex: 3,
    marginLeft: 10,
  },
  title: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: "700",
  },
  subtitle: {
    color: Colors.white,
    opacity: 0.6,
    fontWeight: "500",
    letterSpacing: 0.5,
    marginTop: 10,
  },
});
