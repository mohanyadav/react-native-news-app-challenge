import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  Linking,
} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { LinearGradient } from "expo-linear-gradient";
import { Feather } from "@expo/vector-icons";

export default class NewsDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { title, time, image, content, publisher, url } =
      this.props.route.params;

    return (
      <View style={styles.container}>
        <StatusBar style="light" />

        {/* Top Banner Start */}
        <View style={styles.topContainer}>
          <ImageBackground
            source={{
              uri: image,
            }}
            width="100"
            height="100"
            style={styles.topBanner}
          >
            <LinearGradient
              style={styles.overlay}
              colors={["transparent", "rgba(0,0,0, 0.9)"]}
            ></LinearGradient>

            <View style={styles.topNavigation}>
              <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                <Image
                  source={require("./assets/goback_icon.png")}
                  width="100"
                  height="100"
                  style={styles.backIcon}
                />
              </TouchableOpacity>
              {/* <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                <Image
                  source={require("./assets/group_icon.png")}
                  width="100"
                  height="100"
                  style={styles.groupIcon}
                />
              </TouchableOpacity> */}
            </View>
            <View style={styles.contentContainer}>
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.subtitle}>
                {time} | <Text>{publisher}</Text>
              </Text>
            </View>
          </ImageBackground>
        </View>
        {/* Top Banner End */}

        {/* Publisher Start */}
        <View style={styles.publisherContainer}>
          <View style={styles.publisherInfo}>
            <View style={styles.publisherProfileContainer}>
              <Image
                source={{
                  uri: `https://logo.clearbit.com/${url}`,
                }}
                width="100"
                height="100"
                style={styles.publisherProfile}
              />
            </View>
            <View style={styles.publisherContent}>
              <Text style={styles.publisherTitle}>{publisher}</Text>
              <Text style={styles.publisherTime}>{time}</Text>
            </View>
          </View>
          <View style={styles.shareIconContainer}>
            <Image
              source={require("./assets/share_icon.png")}
              width="100"
              height="100"
              style={styles.shareIcon}
            />
          </View>
        </View>
        {/* Publisher End */}

        {/* Content Start */}
        <ScrollView>
          <Text style={styles.content}>{content}</Text>
        </ScrollView>
        {/* Content End */}

        {/* Clearbit Attribution Badge Start */}
        <TouchableOpacity
          style={styles.attributionBadge}
          onPress={() => Linking.openURL("https://clearbit.com")}
        >
          <Text style={styles.attributionText}>
            Logos provided by
            <Text style={styles.attributionCompanyName}> Clearbit</Text>
          </Text>
          <Feather name="external-link" size={16} color="white" />
        </TouchableOpacity>
        {/* Clearbit Attribution Badge End */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#252529",
    flex: 1,
  },
  topContainer: {
    width: "100%",
    height: 260,
  },
  topBanner: {
    width: "100%",
    height: "100%",
  },
  overlay: {
    width: "100%",
    height: "100%",
  },
  contentContainer: {
    position: "absolute",
    bottom: 0,
    padding: 20,
  },
  title: {
    color: Colors.white,
    fontSize: 25,
    fontFamily: "MontsBold",
  },
  subtitle: {
    color: Colors.white,
    opacity: 0.6,
    fontFamily: "MontsMedium",
    letterSpacing: 0.5,
    marginTop: 10,
  },
  topNavigation: {
    position: "absolute",
    top: 30,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  backIcon: {
    width: 24,
    height: 17,
  },
  groupIcon: {
    width: 18,
    height: 24,
  },
  publisherContainer: {
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  publisherInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  publisherProfileContainer: {
    width: 66,
    height: 66,
    padding: 1,
    borderWidth: 2,
    borderColor: "#FD425E",
    borderRadius: 32,
  },
  publisherProfile: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  publisherContent: {
    marginLeft: 10,
  },
  publisherTitle: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: "700",
    textTransform: "uppercase",
  },
  publisherTime: {
    color: "#858585",
    fontSize: 12,
    fontFamily: "MontsMedium",
    letterSpacing: 0.4,
  },
  shareIcon: {
    width: 17,
    height: 24,
  },
  content: {
    color: "#A8A8A8",
    fontSize: 14,
    padding: 20,
    lineHeight: 24,
    fontFamily: "MontsRegular",
  },
  attributionBadge: {
    position: "absolute",
    bottom: 20,
    alignSelf: "center",
    backgroundColor: "#39393C",
    paddingHorizontal: 14,
    paddingVertical: 4,
    borderRadius: 20,
    flexDirection: "row",
  },
  attributionText: {
    color: "#888",
    fontFamily: "MontsMedium",
    fontSize: 14,
    marginRight: 6,
  },
  attributionCompanyName: {
    color: Colors.white,
    fontFamily: "MontsBold",
  },
});
