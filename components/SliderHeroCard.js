import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Colors } from "react-native/Libraries/NewAppScreen";

export default class SliderHeroCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { title, time, publisher, image, content, url, navigation } =
      this.props;

    // console.log(this.props);
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={() => {
          navigation.push("NewsDetail", {
            image: image,
            title: title,
            time: time,
            publisher: publisher,
            content: content,
            url: url,
          });
        }}
      >
        <ImageBackground
          style={styles.backgroundImage}
          imageStyle={{ borderRadius: 20 }}
          source={{
            uri: image,
          }}
          width={100}
          height={100}
        >
          <LinearGradient
            style={styles.overlay}
            colors={["rgba(0,0,0, 0.9)", "transparent"]}
          ></LinearGradient>
          <View style={styles.contentContainer}>
            <Text style={styles.title} numberOfLines={3}>
              {title}
            </Text>
            <Text style={styles.subtitle}>
              {time} | <Text>{publisher}</Text>
            </Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 260,
    height: 400,
    marginLeft: 20,
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
  },
  overlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
    borderRadius: 20,
  },
  contentContainer: {
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  title: {
    color: Colors.white,
    fontSize: 24,
    // fontWeight: "700",
    fontFamily: "MontsBold",
  },
  subtitle: {
    color: Colors.white,
    opacity: 0.6,
    // fontWeight: "500",
    fontFamily: "MontsMedium",
    letterSpacing: 0.5,
    marginTop: 10,
  },
});
