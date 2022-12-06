import { Themes, } from "../../assets/Themes";
import { NavigationContainer } from '@react-navigation/native';
import { View, Text, StyleSheet, Dimensions } from "react-native";
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import moment from 'moment'; 
import AppLoading from 'expo-app-loading';
import { processFontFamily, useFonts } from 'expo-font';
import { LineChart } from "react-native-chart-kit";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import { Ionicons } from '@expo/vector-icons';

export default function CalendarScreen() {
  const today = moment().format('YYYY-MM-DD')
  const tenDays = [moment().subtract(6, 'days').format('MM/DD'),
                   moment().subtract(5, 'days').format('MM/DD'),
                   moment().subtract(4, 'days').format('MM/DD'),
                   moment().subtract(3, 'days').format('MM/DD'),
                   moment().subtract(2, 'days').format('MM/DD'),
                   moment().subtract(1, 'days').format('MM/DD'),
                   moment().format('MM/DD')]
  let [fontsLoaded] = useFonts({
    Inter:  require('../../assets/Fonts/Inter-Regular.otf'),
    InterBold: require('../../assets/Fonts/Inter-Bold.otf')
  });
  if (!fontsLoaded) return <AppLoading />;
  const data = {
    labels: tenDays,
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43, 40],
        color: (opacity = 1) => Themes.colors.purple, // optional
        strokeWidth: 2 // optional
      },
      {
        data: [2, 48, 22, 11, 35, 12, 78],
        color: (opacity = 1) => '#672A4E', // optional
        strokeWidth: 2 // optional
      },
      {
        data: [41, 44, 12, 25, 19, 49, 7],
        color: (opacity = 1) => Themes.colors.darkerSage, // optional
        strokeWidth: 2 // optional
      },
      {
        data: [21, 10, 14, 8, 2, 39, 32],
        color: (opacity = 1) => '#192A51', // optional
        strokeWidth: 2 // optional
      },
      {
        data: [31, 15, 6, 16, 40, 34, 45],
        color: (opacity = 1) => '#EE6352', // optional
        strokeWidth: 2 // optional
      }
    ],
    legend: ["Back", "Chest", "Abs", "Glutes", "Biceps"]
  };
  const chartConfig = {
    backgroundGradientFrom: Themes.colors.white,
    backgroundGradientFromOpacity: 1,
    backgroundGradientTo: Themes.colors.white,
    backgroundGradientToOpacity: 1,
    decimalPlaces: 0,
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    propsForLabels: {
      fontFamily: processFontFamily('Inter'),
    },
    propsForBackgroundLines: {
      strokeDasharray: "" // solid background lines with no dashes
    },
  };

  return (
    <View style={styles.screenContainer}>
      <View style={styles.header}>
        <Text style={[styles.calendarText, styles.textShadow]}>calendar</Text>
        <Pressable style={ ({pressed}) => [
            {
              backgroundColor: pressed ? Themes.colors.darkerPurple : Themes.colors.purple,
            },
            styles.addButton,
          ] }>
          <Ionicons name="add" size={35} color={Themes.colors.white} />
        </Pressable>
      </View>
      <Calendar
        monthFormat={'MMM yyyy'}
        markingType={'period'}
        markedDates={{
          '2022-12-01': {startingDay: true, color: Themes.colors.darkerSage},
          '2022-12-02': {endingDay: true, color: Themes.colors.darkerSage},
          '2022-12-04': {startingDay: true, color: Themes.colors.darkerSage, endingDay: true},
          [today]: { selected: true, textColor: Themes.colors.red },
        }}
        style={styles.calendar}
        theme={{
          backgroundColor: '#ffffff',
          calendarBackground: '#ffffff',
          monthTextColor: Themes.colors.black,
          arrowColor: Themes.colors.gray,
          textDayFontFamily: 'Inter',
          textMonthFontFamily: 'Inter',
          textDayHeaderFontFamily: 'InterBold',
          'stylesheet.calendar.header': {
            week: {
              marginTop: 0,
              flexDirection: 'row',
              justifyContent: 'space-between'
            },
          },
          'stylesheet.calendar.main': {
            week: {
              flexDirection: 'row',
              justifyContent: 'space-around'
            },
            dayContainer: {
              flex: 1,
              alignItems: 'center',
            }
          },
        }}
      />
      <View style={styles.chartContainer}>
        <Text style={[styles.chartTitle, styles.textShadow]}>Progress</Text>
        <LineChart
          data={data}
          width={Dimensions.get('window').width * 0.95}
          height={200}
          chartConfig={chartConfig}
          style={{
            borderRadius: 20,
            marginTop: 10
          }}
          withShadow={false}
          withDots={false}
          withInnerLines={false}
        />
      </View>
      <Pressable style={ ({pressed}) => [
            {
              backgroundColor: pressed ? Themes.colors.darkerPurple : Themes.colors.purple,
            },
            styles.logButton,
          ] }>
        <Text style={[styles.logText, styles.textShadow]}>View Log</Text>
      </Pressable>
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
    chartContainer: {
      backgroundColor: Themes.colors.white,
      borderRadius: 20,
      margin: 20,
      padding: 0,
    },
    chartTitle: {
      fontFamily: 'InterBold',
      marginTop: 5,
      marginLeft: 10,
      fontSize: 16
    },
    calendar: {
      borderWidth: 25,
      borderColor: Themes.colors.brown,
      borderRadius: 20,
      width: Dimensions.get('window').width * 0.95,
    },
    textShadow: {
      textShadowColor: Themes.colors.shadow,
      textShadowOffset: {width: -4, height: 4},
      textShadowRadius: 12,
    },
    logButton: {
      borderRadius: 20,
      paddingTop: 10,
      paddingBottom: 10,
      paddingLeft: 30,
      paddingRight: 30
    },
    logText: {
      color: Themes.colors.white,
      fontFamily: 'InterBold',
      fontSize: 16
    },
    calendarText: {
      color: Themes.colors.black,
      fontFamily: 'InterBold',
      fontSize: 26,
      flex: 1
    },
    header: {
      marginLeft: 20,
      marginRight: 20,
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 20
    },
    addButton: {
      borderRadius: 9999,
    },
  });
  