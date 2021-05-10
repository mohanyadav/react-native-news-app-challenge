import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import SliderHeroCard from "./components/SliderHeroCard";
import Hashtag from "./components/Hashtag";
import HorizontalNewsCard from "./components/HorizontalNewsCard";

export default function Home() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      {/* Top Container Start */}
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
      {/* Top Container End */}

      <ScrollView horizontal={false} showsHorizontalScrollIndicator={false}>
        {/* Hero Slider Start */}
        <View style={styles.sliderHeroContainer}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <SliderHeroCard
              image="https://scx2.b-cdn.net/gfx/news/hires/2020/1-virus.jpg"
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
            <SliderHeroCard
              image="https://cdn.vox-cdn.com/thumbor/El74gaSoPeFUuLDDpVkgU--9TH8=/0x0:2040x1360/1075x1075/filters:focal(857x517:1183x843):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/69118193/acastro_210412_4523_0002.0.jpg"
              title="Google is poisoning its reputation with AI Researchers"
              time="1 hour"
              publisher="The Verge"
            />
          </ScrollView>
        </View>

        {/* Hero Slider End */}

        {/* Hashtag Start */}
        <View style={styles.hashtagContainer}>
          <Text style={styles.hashtagTitle}>Trending Newstag</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <Hashtag tag="covid19" />
            <Hashtag tag="ipl" />
            <Hashtag tag="iMac" />
            <Hashtag tag="basecamp" />
            <Hashtag tag="billgates" />
          </ScrollView>
        </View>
        {/* Hashtag End */}

        {/* News of the day Start */}
        <View style={styles.newsContainer}>
          <Text style={styles.newsTitle}>News of the day</Text>
          <ScrollView horizontal={false} showsHorizontalScrollIndicator={false}>
            <HorizontalNewsCard
              image="https://images.pexels.com/photos/2449452/pexels-photo-2449452.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              title="Tesla competitors air electric vehicle ads during Elon Musk 'Saturday Night Live'"
              time="45 minutes ago"
              publisher="USA Today"
            />
            <HorizontalNewsCard
              image="https://techcrunch.com/wp-content/uploads/2021/04/GettyImages-1231467577.jpg?w=1390&crop=1"
              title="Clubhouse finally launches its Android app"
              time="1 hour ago"
              publisher="TechCrunch"
            />
            <HorizontalNewsCard
              image="https://cdn.vox-cdn.com/thumbor/I3hyXraTs98DON_Ln849eQ5jx6I=/0x0:1600x840/920x613/filters:focal(672x292:928x548):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/69245028/Windows_10_Sun_Valley_refresh.0.jpg"
              title="Microsoft is finally ditching its Windows 95-era icons"
              time="2 hours ago"
              publisher="The Verge"
            />
          </ScrollView>
        </View>
        {/* News of the day End */}
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
    padding: 0,
    marginBottom: 20,
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
  hashtagContainer: {
    marginBottom: 20,
  },
  newsContainer: {
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  hashtagTitle: {
    marginBottom: 10,
    paddingHorizontal: 20,
    color: Colors.white,
    fontWeight: "700",
    fontSize: 20,
  },
  newsTitle: {
    marginBottom: 10,
    color: Colors.white,
    fontWeight: "700",
    fontSize: 20,
  },
});
