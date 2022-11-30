import { Themes } from "./assets/Themes";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text } from "react-native";

const Tab = createBottomTabNavigator();

function HomeScreen() {
  return (
    <View>
      <Text>aaaaaaaaaa</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
