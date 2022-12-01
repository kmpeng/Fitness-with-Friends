import { Themes, } from "./assets/Themes";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, StyleSheet} from "react-native";
import { Ionicons } from '@expo/vector-icons';

import FriendsScreen from "./app/screens/FriendsScreen";
import CalendarScreen from "./app/screens/CalendarScreen"; 
import WorkoutScreen from "./app/screens/WorkoutScreen";
import ProfileScreen from "./app/screens/ProfileScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
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
