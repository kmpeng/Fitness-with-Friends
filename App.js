import { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from "react-native";
import supabase from "./supabase.js";
import AppLoading from 'expo-app-loading';

import { Themes } from "./assets/Themes";
import { processFontFamily, useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';

import { CalendarScreen, FriendsScreen, LoginScreen, ProfileScreen, SignupScreen, WorkoutScreen } from "./app/screens";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {
  const [authSession, setAuthSession] = useState(false);


  let [fontsLoaded] = useFonts({
    Inter:  require('./assets/Fonts/Inter-Regular.otf'),
    InterBold: require('./assets/Fonts/Inter-Bold.otf')
  })  

  useEffect(() => {
    const fetchSession = async () => {
      // get session
      const { data, error } = await supabase.auth.getSession();

      if (error) {
        console.log("error getting Supabase session");
      } else if (data) {
        setAuthSession(data.session);
      }
    }

    fetchSession();

    // listen to onAuthStateChange and update authSession
    supabase.auth.onAuthStateChange((event, session) => {
      console.log(event, session);
      setAuthSession(session);
    })
  }, []);

  if (!fontsLoaded) return <AppLoading />;


  return (
    <NavigationContainer>
      {authSession ?
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerShown: false,
            labelStyle: { fontSize: 30 },
            tabBarIcon: ({ focused }) => {
              let iconName;

              if (route.name === 'Friends') {
                iconName = focused ? 'people' : 'people-outline';
              } else if (route.name === 'Calendar') {
                iconName = focused ? 'calendar' : 'calendar-outline';
              } else if (route.name === 'Workout') {
                iconName = focused ? 'barbell' : 'barbell-outline';
              } else if (route.name === 'Profile') {
                iconName = focused  ? 'person'  : 'person-outline';
              }
              // change color!!! 
              return <Ionicons name={iconName} size={24} color="black" />;
            }
          })}>
          <Tab.Screen name="Friends" component={FriendsScreen} />
          <Tab.Screen name="Calendar" component={CalendarScreen} />
          <Tab.Screen name="Workout" component={WorkoutScreen} />
          <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
        :
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}} />
          <Stack.Screen name="Signup" component={SignupScreen} options={{headerShown: false}} />
        </Stack.Navigator>
      }
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  screenText: {
    fontSize: 32,
  },
});
