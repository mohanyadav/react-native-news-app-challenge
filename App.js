import React, { Component } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./Home";
import NewsDetailScreen from "./NewsDetail";
import HashtagDetailScreen from "./HashtagDetail";

import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import {
  Montserrat_100Thin,
  Montserrat_100Thin_Italic,
  Montserrat_200ExtraLight,
  Montserrat_200ExtraLight_Italic,
  Montserrat_300Light,
  Montserrat_300Light_Italic,
  Montserrat_400Regular,
  Montserrat_400Regular_Italic,
  Montserrat_500Medium,
  Montserrat_500Medium_Italic,
  Montserrat_600SemiBold,
  Montserrat_600SemiBold_Italic,
  Montserrat_700Bold,
  Montserrat_700Bold_Italic,
  Montserrat_800ExtraBold,
  Montserrat_800ExtraBold_Italic,
  Montserrat_900Black,
  Montserrat_900Black_Italic,
} from "@expo-google-fonts/montserrat";

const Stack = createStackNavigator();

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      MontsLight: Montserrat_300Light,
      MontsRegular: Montserrat_400Regular,
      MontsMedium: Montserrat_500Medium,
      MontsSemibold: Montserrat_600SemiBold,
      MontsBold: Montserrat_700Bold,
      MontsBoldItalic: Montserrat_700Bold_Italic,
      MontsExtraBold: Montserrat_800ExtraBold,
    });

    this.setState({ fontsLoaded: true });
  }

  render() {
    const { fontsLoaded } = this.state;

    // Check if font is loaded
    if (!fontsLoaded) {
      return <AppLoading />;
    } else {
      return (
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="NewsDetail" component={NewsDetailScreen} />
            <Stack.Screen
              name="HashtagDetail"
              component={HashtagDetailScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      );
    }
  }
}
