import { Themes, } from "../../assets/Themes";
import { NavigationContainer } from '@react-navigation/native';
import { View, Text, Pressable, StyleSheet} from "react-native";
import { Ionicons } from '@expo/vector-icons';



export default function FriendsScreen({ navigation }) {
  return (
    <View style={styles.screenContainer}>
      <View style={styles.header}>
      <Text style={[styles.screenText, styles.textShadow]}>work out with</Text>
      </View>
      <View style={styles.people1}>
        <View style={styles.people2}>
      <Ionicons name="person-circle-outline" size={164}></Ionicons>
        <Ionicons name="person-circle-outline" size={164}></Ionicons>
        <Ionicons name="person-circle-outline" size={164}></Ionicons>
        </View>
        <View style={styles.people2}>
        <Ionicons name="person-circle-outline" size={164}></Ionicons>
        <Ionicons name="person-circle-outline" size={164}></Ionicons>
        <Ionicons name="person-circle-outline" size={164}></Ionicons>
       </View>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
    people1: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      marginTop: 50,
      marginLeft: -145,
    },
    people2: {
      flexDirection: 'column',
      alignItems: 'flex-start',
      alignContent: 'center',
    },
    screenContainer: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: Themes.colors.sage,
      flexDirection: 'row',
    },
    screenText: {
      alignItems: 'flex-start',
      marginTop: 80,
     marginLeft: 22, // should be edited 
      textAlign: 'left',
        color: Themes.colors.black,
        fontFamily: 'InterBold',
        fontSize: 26,
        flex: 1
    },
    textShadow: {
      textShadowColor: Themes.colors.shadow,
      textShadowOffset: {width: -4, height: 4},
      textShadowRadius: 12,
    },
  });
  