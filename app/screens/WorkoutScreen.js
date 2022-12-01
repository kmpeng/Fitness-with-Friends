import { Themes, } from "../../assets/Themes";
import { NavigationContainer } from '@react-navigation/native';
import { View, Text, StyleSheet} from "react-native";



export default function WorkoutScreen() {
  return (
    <View style={styles.screenContainer}>
      <Text style={styles.screenText}>Workout!</Text>
    </View>
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
  