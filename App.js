import { Themes } from "./assets/Themes";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/stack';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer theme={navTheme}>
      <Tab.Navigator>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
