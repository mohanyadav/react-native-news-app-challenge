import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import SliderHeroCard from "./components/SliderHeroCard";
import Hashtag from "./components/Hashtag";
import HorizontalNewsCard from "./components/HorizontalNewsCard";

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        totalArticles: 126285,
        articles: [
          {
            title:
              "Ford names new F-150 electric pickup Lightning with plans to reveal it May 19",
            description:
              "Ford's upcoming all-electric F-150 pickup truck will be called Lightning, a name last used by the automaker for street performance trucks in the 1990s.",
            content:
              "Ford's all-electric F-150 will be called Lightning. The all-new F-150 Lightning will be revealed May 19 at Ford World Headquarters in Dearborn and livestreamed.\nAll-electric pickups are expected to be important growth areas for automakers in the comi... [2148 chars]",
            url: "https://www.cnbc.com/2021/05/10/ford-names-new-f-150-electric-pickup-lightning-with-plans-to-reveal-it-may-19.html",
            image:
              "https://image.cnbcfm.com/api/v1/image/106880649-1620664601759-Lightning.jpg?v=1620664696",
            publishedAt: "2021-05-10T17:27:32Z",
            source: {
              name: "CNBC",
              url: "https://www.cnbc.com",
            },
          },
          {
            title: "Jerusalem violence leads to Hamas rockets on Israel",
            description:
              "Palestinian militants in the Gaza Strip fired rockets toward the Jerusalem area and southern Israel on Monday",
            content:
              "Rockets are launched by Palestinian militants into Israel, in Gaza May 10, 2021. PHOTO: REUTERS\nPalestinian militants in the Gaza Strip fired rockets toward the Jerusalem area and southern Israel on Monday, carrying out a threat to punish Israel for ... [3524 chars]",
            url: "https://tribune.com.pk/story/2299238/jerusalem-violence-leads-to-hamas-rockets-on-israel-nine-dead-in-gaza",
            image:
              "https://i.tribune.com.pk/media/images/AQYUR6A3DFPSXK7AQL3OXPMP541620667576-1/AQYUR6A3DFPSXK7AQL3OXPMP541620667576-1.jpg",
            publishedAt: "2021-05-10T17:26:15Z",
            source: {
              name: "The Express Tribune",
              url: "https://tribune.com.pk",
            },
          },
          {
            title: "Islamabad sets up five new vaccination centers",
            description:
              "In order to offset the resurgence of the global pandemic into its third wave, Islamabad, on Monday announced the setting up of five new vaccination centers within the",
            content:
              "Share:\nIn order to offset the resurgence of the global pandemic into its third wave, Islamabad, on Monday announced the setting up of five new vaccination centers within the city to escalate its drive to jab citizens on an urgent basis.\nThe District ... [1032 chars]",
            url: "https://nation.com.pk/10-May-2021/islamabad-sets-up-five-new-vaccination-centers",
            image:
              "https://nation.com.pk/digital_images/large/2021-05-10/islamabad-sets-up-five-new-vaccination-centers-1620667775-3154.jpg",
            publishedAt: "2021-05-10T17:18:00Z",
            source: {
              name: "The Nation",
              url: "https://nation.com.pk",
            },
          },
          {
            title:
              "In Kabul visit, Gen Bajwa reiterates support for Afghan peace process as violence surges",
            description:
              'Afghan president in meeting with army chief appreciates "Pakistan\'s sincere and positive role" in the peace process.',
            content:
              "Army Chief Gen Qamar Javed Bajwa offered Pakistan's support for the Afghanistan peace process in a meeting with President Ashraf Ghani in Kabul on Monday amid growing violence as the United States withdraws its troops.\nThe army chief was accompanied ... [2121 chars]",
            url: "https://www.dawn.com/news/1623112/in-kabul-visit-gen-bajwa-reiterates-support-for-afghan-peace-process-as-violence-surges",
            image:
              "https://i.dawn.com/large/2021/05/60995d682d79e.jpg?r=1296802143",
            publishedAt: "2021-05-10T17:07:31Z",
            source: {
              name: "DAWN.com",
              url: "https://www.dawn.com",
            },
          },
          {
            title:
              "In Kabul visit, Gen Bajwa reiterates support for Afghan peace process as violence surges",
            description:
              'Afghan president in meeting with army chief appreciates "Pakistan\'s sincere and positive role" in the peace process.',
            content:
              "Army Chief Gen Qamar Javed Bajwa offered Pakistan's support for the Afghanistan peace process in a meeting with President Ashraf Ghani in Kabul on Monday amid growing violence as the United States withdraws its troops.\nThe army chief was accompanied ... [2121 chars]",
            url: "https://www.dawn.com/news/1623112",
            image:
              "https://i.dawn.com/large/2021/05/60995d682d79e.jpg?r=1296802143",
            publishedAt: "2021-05-10T17:07:31Z",
            source: {
              name: "DAWN.com",
              url: "https://www.dawn.com",
            },
          },
          {
            title: "Gang member jailed for laundering over €750,000",
            description:
              "A criminal gang member has been jailed today for laundering over €750,000 of organised crime money using 27 bank accounts and five fake companies.",
            content:
              "A criminal gang member has been jailed today for laundering over €750,000 of organised crime money using 27 bank accounts and five fake companies.\nCalin Scintei, 28, who is originally from Romania but has an address at Jameson Orchard, Malahide, used... [2603 chars]",
            url: "https://www.rte.ie/news/courts/2021/0510/1220806-courts-money-laundering/",
            image: "https://img.rasset.ie/000cb7e0-1600.jpg",
            publishedAt: "2021-05-10T17:04:42Z",
            source: {
              name: "RTE.ie",
              url: "https://www.rte.ie",
            },
          },
          {
            title: "Denver Broncos think they can get QB Aaron Rodgers",
            description:
              'The Packers have said they won\'t trade QB Aaron Rodgers, but the Broncos still believe there is a "real possibility" of getting something done for the MVP.',
            content:
              "The Green Bay Packers have consistently said they will not trade Aaron Rodgers despite an ongoing feud between the organization and quarterback, but the conviction from the Packers’ side hasn’t drained any optimism from at least one team about the po... [2258 chars]",
            url: "https://packerswire.usatoday.com/2021/05/10/report-broncos-believe-getting-qb-aaron-rodgers-is-a-real-possibility/",
            image:
              "https://packerswire.usatoday.com/wp-content/uploads/sites/57/2021/05/USATSI_10241561-e1620663626596.jpg?w=1024&h=576&crop=1",
            publishedAt: "2021-05-10T16:43:05Z",
            source: {
              name: "Packers Wire",
              url: "https://packerswire.usatoday.com",
            },
          },
          {
            title:
              "PM Imran visits PIMS, enquires about facilities, COVID cases",
            description:
              "On Monday, Prime Minister Imran Khan suddenly visited Pakistan Institute of Medical Sciences (PIMS) hospital and took round of Covid ward.  In a surprise visit,",
            content:
              "Share:\nOn Monday, Prime Minister Imran Khan suddenly visited Pakistan Institute of Medical Sciences (PIMS) hospital and took round of Covid ward.\nIn a surprise visit, the prime minister Imran Khan enquired the authorities and doctors on duty about th... [418 chars]",
            url: "https://nation.com.pk/10-May-2021/pm-imran-visits-pims-enquires-about-facilities-covid-cases",
            image:
              "https://nation.com.pk/digital_images/large/2021-05-10/pm-imran-visits-pims-enquires-about-facilities-covid-cases-1620664571-3375.jpg",
            publishedAt: "2021-05-10T16:38:00Z",
            source: {
              name: "The Nation",
              url: "https://nation.com.pk",
            },
          },
          {
            title:
              "UK economy to suffer £700bn output loss due to Covid and Brexit, thinktank warns",
            description:
              "NIESR says UK facing worse permanent damage than other rich nations due to ‘poor Covid response’",
            content:
              "Britain’s economy is on track to suffer more than £700bn of lost output caused by Covid-19, made worse by the government’s mishandling of the health emergency and Brexit, one of the UK’s leading economics thinktanks has warned.\nThe National Institute... [2896 chars]",
            url: "https://www.theguardian.com/business/2021/may/10/uk-economy-to-suffer-700bn-output-loss-due-to-covid-and-brexit-thinktank-warns",
            image:
              "https://i.guim.co.uk/img/media/09efc534205d59276b686a978ebb94c081b1092c/0_391_5906_3545/master/5906.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=05d263cf1c7db5c188c75081eb800d31",
            publishedAt: "2021-05-10T16:34:00Z",
            source: {
              name: "The Guardian",
              url: "https://www.theguardian.com",
            },
          },
          {
            title:
              "Salman Khan reveals sister Arpita Khan Sharma tested positive for Covid-19, she issues a clarification",
            description:
              "Salman Khan recently revealed his sisters Arpita and Alvira had contracted the Covid-19 virus. Arpita has now issued a clarification to shed more light on her diagnosis.",
            content:
              "Salman Khan revealed that a few of his family members have contracted the Covid-19 virus. The actor, during a press round-table for his upcoming release Radhe, said that his sisters Arpita Khan Sharma and Alvira Agnihotri have contracted the disease.... [1820 chars]",
            url: "https://www.hindustantimes.com/entertainment/bollywood/salman-khan-reveals-sister-arpita-khan-sharma-tested-positive-for-covid-19-she-issues-a-clarification-101620662953383.html",
            image:
              "https://images.hindustantimes.com/img/2021/05/10/1600x900/Screenshot_2021-03-06_at_8.26.38_AM_1614999787854_1620663001300.png",
            publishedAt: "2021-05-10T16:29:46Z",
            source: {
              name: "Hindustan Times",
              url: "https://www.hindustantimes.com",
            },
          },
        ],
      },
    };
  }

  getTopArticles() {
    let topArticles = [];

    for (let i = 0; i < 4; i++) {
      let time = new Date(this.state.data.articles[i].publishedAt);
      time = `${time.getDate()} ${
        months[time.getMonth()]
      }, ${time.getFullYear()}`;
      topArticles.push(
        <SliderHeroCard
          title={this.state.data.articles[i].title}
          image={this.state.data.articles[i].image}
          time={time.toString()}
          publisher={this.state.data.articles[i].source.name}
        />
      );
    }

    return topArticles;
  }

  getNewsOfTheDay() {
    let newsOfTheDay = [];

    for (let i = 5; i < 10; i++) {
      let time = new Date(this.state.data.articles[i].publishedAt);
      time = `${time.getDate()} ${
        months[time.getMonth()]
      }, ${time.getFullYear()}`;
      newsOfTheDay.push(
        <HorizontalNewsCard
          image={this.state.data.articles[i].image}
          title={this.state.data.articles[i].title}
          time={time.toString()}
          publisher={this.state.data.articles[i].source.name}
        />
      );
    }

    return newsOfTheDay;
  }

  render() {
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
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              {this.getTopArticles()}
              {/* <SliderHeroCard
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
              /> */}
            </ScrollView>
          </View>

          {/* Hero Slider End */}

          {/* Hashtag Start */}
          <View style={styles.hashtagContainer}>
            <Text style={styles.hashtagTitle}>Trending Newstag</Text>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
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
            <ScrollView
              horizontal={false}
              showsHorizontalScrollIndicator={false}
            >
              {this.getNewsOfTheDay()}
              {/* <HorizontalNewsCard
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
              /> */}
            </ScrollView>
          </View>
          {/* News of the day End */}
        </ScrollView>
      </View>
    );
  }
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
