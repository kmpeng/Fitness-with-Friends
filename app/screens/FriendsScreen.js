import { Themes, } from "../../assets/Themes";
import { NavigationContainer } from '@react-navigation/native';
import { View, Text, StyleSheet} from "react-native";



export default function FriendsScreen() {
  return (
    <View style={styles.screenContainer}>
      <Text style={styles.screenText}>Friends!</Text>
    </View>
  );
}


const styles = StyleSheet.create({
    screenContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: Themes.colors.sage,
    },
    screenText: {
      fontSize: 32,
    },
  });
  