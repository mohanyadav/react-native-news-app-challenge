import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

export default function App() {
  return (
    <View style={styles.container}>
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
            source={{
              uri:
                "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
            }}
            width="60"
            height="60"
          ></Image>
        </View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#252529",
    color: "#fff",
    padding: 20,
  },
  topContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
  },
  greetingSection: {
    flex: 1,
  },
  profileSection: {},
  profile: {
    width: 50,
    height: 50,
    borderColor: "#fff",
    borderWidth: 2,
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
