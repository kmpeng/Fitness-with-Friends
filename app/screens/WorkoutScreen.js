import AppLoading from 'expo-app-loading';
import { Themes, } from "../../assets/Themes";
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { View, Text, StyleSheet, Image} from "react-native";



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
          <Text style={styles.title}>
            Workout Plan
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
          <Image 
              style={styles.plusImage}  
              source={require('../../assets/Images/plus.jpg')}
            />
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
      fontSize: 32,
    },
    titleBox: {
      width: '90%',
      height: '5%',
      marginTop: '10%',
    },
    title: {
      fontSize: 32, 
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
    plusImage: {
      width: '30%',
      height: '30%',
      marginHorizontal: '35%',
      marginVertical: '6%'
    }
  });
  