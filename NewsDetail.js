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
} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { LinearGradient } from "expo-linear-gradient";

export default class NewsDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar style="light" />

        {/* Top Banner Start */}
        <View style={styles.topContainer}>
          <ImageBackground
            source={{
              uri: "https://scx2.b-cdn.net/gfx/news/hires/2020/1-virus.jpg",
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
              <Text style={styles.title}>
                110 million Americans fully vaccinated so far
              </Text>
              <Text style={styles.subtitle}>
                45 minutes | <Text>USA Today</Text>
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
                  uri: "https://cdn.freelogovectors.net/wp-content/uploads/2020/11/usa-today-logo.png",
                }}
                width="100"
                height="100"
                style={styles.publisherProfile}
              />
            </View>
            <View style={styles.publisherContent}>
              <Text style={styles.publisherTitle}>USA Today</Text>
              <Text style={styles.publisherTime}>
                08 May 2021, 08:21 AM IST
              </Text>
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
          <Text style={styles.content}>
            Officials with President Joe Biden's coronavirus task force say 110
            million Americans will be fully vaccinated by the end of Friday,
            with a total of 150 million vaccinated through the first shot. "We
            are far ahead of where anyone thought we would be in our war against
            the virus," said Jeffrey Zients, the White House coronavirus task
            force director. {"\n\n"}That information, coming from an
            official-sounding group, makes it seem like there’s little benefit —
            and potentially some harm — to getting vaccinated against COVID-19.
            {"\n\n"}
            The vaccine produces many trillions of particles of spike proteins
            in the recipient. Patients who are vaccinated can shed some of these
            (spike protein) particles to close contacts,” the press release
            says. “The particles have the ability to create inflammation and
            disease in these contacts. In other words, the spike proteins are
            pathogenic (‘disease causing’) just like the full virus
          </Text>
        </ScrollView>
        {/* Content End */}
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
    fontWeight: "700",
  },
  subtitle: {
    color: Colors.white,
    opacity: 0.6,
    fontWeight: "500",
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
    fontWeight: "400",
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
  },
});
