import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import SliderHeroCard from "./components/SliderHeroCard";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.topContainer}>
        <View style={styles.greetingSection}>
          <Text style={styles.greetingTitle}>Good morning James,</Text>
          <Text style={styles.greetingSubtitle}>
            We have the personalized feed ready for you
          </Text>
        </View>

        <View style={styles.profileSection}>
          <Image
            style={styles.profile}
            source={require("./assets/profile.png")}
            width="60"
            height="60"
          ></Image>
        </View>
      </View>

      <ScrollView horizontal={true} style={styles.sliderHeroContainer}>
        <SliderHeroCard
          image="https://images.unsplash.com/photo-1579781403337-de692320718a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=940&q=80"
          title="110 million Americans fully vaccinated so far"
          time="45 minutes"
          publisher="USA TODAY"
        />
        <SliderHeroCard
          image="https://cdn.mos.cms.futurecdn.net/sfgpCc8Ba2GFWVLcPmBzcM.jpg"
          title="NASA’s Perseverance Captures Video, Audio of Fourth Ingenuity Flight"
          time="45 minutes"
          publisher="NASA"
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#252529",
    color: "#fff",
    // padding: 20,
  },
  topContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
    padding: 20,
  },
  greetingSection: {
    flex: 1,
  },
  profileSection: {},
  sliderHeroContainer: {
    flexDirection: "row",
  },
  profile: {
    width: 50,
    height: 50,
    borderColor: "#fff",
    borderWidth: 1.4,
    borderRadius: 30,
  },
  greetingTitle: {
    color: Colors.white,
    fontSize: 26,
    fontWeight: "700",
  },
  greetingSubtitle: {
    color: Colors.white,
    opacity: 0.53,
    fontSize: 18,
  },
});
