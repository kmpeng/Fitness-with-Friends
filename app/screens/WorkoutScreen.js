import AppLoading from 'expo-app-loading';
import { Themes, } from "../../assets/Themes";
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { View, Text, StyleSheet, Image} from "react-native";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import { Ionicons } from '@expo/vector-icons';



export default function WorkoutScreen() {
  // Loading font
  let [fontsLoaded] = useFonts({
    Inter:  require('../../assets/Fonts/Inter-Regular.otf'),
    InterBold: require('../../assets/Fonts/Inter-Bold.otf')
  });
  if (!fontsLoaded) return <AppLoading />;

  return (
    <View style={styles.screenContainer}>
      <View style={styles.titleBox}>
          <Text style={[styles.title, styles.textShadow]}>
            workout plan
          </Text>
      </View>
      <View style={styles.horizontal}>
        <View style={styles.workoutBox}>
          <Text style={styles.workoutText}>
            Back
          </Text>
        </View>
        <View style={styles.workoutBox}>
          <Text style={styles.workoutText}>
            Chest
          </Text>
        </View>
      </View>
      <View style={styles.horizontal}>
        <View style={styles.workoutBox}>
          <Text style={styles.workoutText}>
            Lower body
          </Text>
        </View>
        <View style={styles.workoutBox}>
          <Text style={styles.workoutText}>
            Upper body
          </Text>
        </View>
      </View>
      <View style={styles.horizontal}>
        <View style={styles.workoutBox}>
          <Text style={styles.workoutText}>
            Abs
          </Text>
        </View>
        <View style={styles.workoutBox}>
          <Text style={styles.workoutText}>
            Glutes
          </Text>
        </View>
      </View>
      <View style={styles.horizontal}>
        <View style={styles.workoutBox}>
          <Text style={styles.workoutText}>
            Biceps
          </Text>
        </View>
        <View style={styles.workoutBox}>
          <Text style={styles.workoutText}>
            Custom
          </Text>
            <Pressable style={ ({pressed}) => [
            {
              backgroundColor: pressed ? Themes.colors.darkerGray: Themes.colors.gray,
            },
            styles.addButton,
          ] }>
          <Ionicons name="add" size={55} color={Themes.colors.white} />
        </Pressable>
        </View>
      </View>
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
      fontSize: 26,
    },
    titleBox: {
      width: '90%',
      height: '5%',
      marginTop: '10%',
    },
    title: {
      fontSize: 26, 
      color: Themes.colors.black,
      fontFamily: 'InterBold'
    },
    horizontal: {
      width: '90%',
      height: '15%',
      marginTop: '10%',
      marginHorizontal: '4%',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      flexDirection: 'row',
    },
    workoutBox: {
      width: '45%',
      height: '100%',
      marginHorizontal: '3%',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      borderRadius: 10,
      backgroundColor: Themes.colors.white,
    },
    workoutText: {
      fontSize: 18, 
      color: Themes.colors.black,
      fontFamily: 'InterBold',
      marginLeft: '5%',
      marginVertical: '5%'
    },
    addButton: {
      borderRadius: 9999,
      width: '35%',
      height: '50%',
      marginTop: '3%',
      marginHorizontal: '35%',
    },
    textShadow: {
      textShadowColor: Themes.colors.shadow,
      textShadowOffset: {width: -4, height: 4},
      textShadowRadius: 12,
    },
  });
  