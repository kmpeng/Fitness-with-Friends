import { useState, useEffect } from 'react';
import { Themes, } from "../../assets/Themes";
import { NavigationContainer } from '@react-navigation/native';
import { View, ScrollView, Text, Pressable, StyleSheet} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import supabase from "../../supabase";


export default function ProfileScreen() {
  const [loaded, setLoaded] = useState(false);
  const [user, setUser] = useState(null);
  const [userProfile, setUserProfile] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchUserProfile = async () => {
      // get user
      const { data: { user } } = await supabase.auth.getUser();

      if (!user) {
        setError("Failed to load user data");
        return;
      } else {
        setError(false);
        setUser(user);
      }

      // get user's row from profiles table
      const { data, error } = await supabase
        .from('profiles')
        .select()
        .eq('id', user.id);

      if (error) {
        setError(error.message);
      } else if (data) {
        setError(false);
        setUserProfile(data[0]);
        setLoaded(true);
      }
    }

    fetchUserProfile();
  }, []);

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.log("signout error:", error.message);
    }
  }

  return (
    <>
      {loaded && <ScrollView contentContainerStyle={styles.screenContainer}>
        <View style={styles.header}>
        <Text style={[styles.screenText, styles.textShadow]}>{userProfile.username}</Text>
        <Pressable onPress={handleSignOut}>
          <Text>Sign out</Text>
        </Pressable>
        </View>
        <View style={styles.user}>
          <Ionicons name="person-circle-outline" size={80}></Ionicons>
            <View style={styles.names}>
              <Text style={styles.firstName}>firstName lastName</Text>
              <Text style={styles.memberSince}>member since 2022</Text>
            </View>
        </View>
        <View style={styles.streaks}>
          <View>
            <Text style={styles.streakText}>Streak</Text>
            <Text style={styles.numberText}>12</Text>
          </View>
          <View style={styles.friends}>
            <Text style={styles.streakText}>Friends</Text>
            <Text style={styles.numberText}>12</Text>
          </View>
        </View>
        <View style={styles.recordsBox}>
          <View style={styles.recordsBoxContainer}>
          <Text style={styles.recordsText}>Personal Records</Text>
          <View style={styles.weightsBoxContainer}>
            <View style={styles.weightsBox}>
              <Text style={styles.liftName}>Deadlift:</Text>
              <Text style={styles.weightAmount}>115 lbs</Text>
            </View>
            <View style={styles.weightsBox}>
              <Text style={styles.liftName}>Bench:</Text>
              <Text style={styles.weightAmount}>45 lbs</Text>
            </View>
            <View style={styles.weightsBox}>
              <Text style={styles.liftName}>Squat:</Text>
              <Text style={styles.weightAmount}>115 lbs</Text>
            </View>
          </View>
          <Text style={styles.recordsText}>Friends</Text>
          <Text style={styles.friendsText}>Friend1</Text>
          <View style={styles.weightsBoxContainer}>
            <View style={styles.weightsBox}>
              <Text style={styles.liftName}>Deadlift:</Text>
              <Text style={styles.weightAmount}>135 lbs</Text>
            </View>
            <View style={styles.weightsBox}>
              <Text style={styles.liftName}>Bench:</Text>
              <Text style={styles.weightAmount}>65 lbs</Text>
            </View>
            <View style={styles.weightsBox}>
              <Text style={styles.liftName}>Squat:</Text>
              <Text style={styles.weightAmount}>155 lbs</Text>
            </View>
          </View> 
          <Text style={styles.friendsText}>Friend2</Text>
          <View style={styles.weightsBoxContainer}>
            <View style={styles.weightsBox}>
              <Text style={styles.liftName}>Deadlift:</Text>
              <Text style={styles.weightAmount}>125 lbs</Text>
            </View>
            <View style={styles.weightsBox}>
              <Text style={styles.liftName}>Bench:</Text>
              <Text style={styles.weightAmount}>90 lbs</Text>
            </View>
            <View style={styles.weightsBox}>
              <Text style={styles.liftName}>Squat:</Text>
              <Text style={styles.weightAmount}>115 lbs</Text>
            </View>
          </View>        
          </View> 
          </View>
      </ScrollView>}
    </>
  );
}


const styles = StyleSheet.create({
  weightAmount: {
    marginTop: '12%',
    alignSelf: 'center',
    marginLeft: '-3%',
    fontSize: 20,
    fontFamily: 'InterBold',
    color: Themes.colors.black,
  },
  liftName: {
    padding: '5%',
    fontSize: 12,
    fontFamily: 'InterBold',
    color: Themes.colors.black,
  },
  friendsText: {
    marginLeft: '3%',
    fontFamily: 'InterBold',
    color: Themes.colors.darkerGray,
    fontSize: 13,
  },
  recordsBoxContainer: {
    flexDirection: 'column',
    paddingTop: '3%',
  },
  weightsBoxContainer: {
    height: '25%',
    paddingBottom: '5%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  weightsBox: {
    marginTop: '3%',
    marginLeft: '3%',
    width: '27%',
    height: '100%',
    marginHorizontal: '3%',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    borderRadius: 10,
    backgroundColor: Themes.colors.gray,
  },
  recordsBox: {
    marginTop: '5%',
    padding: '2%',
    marginLeft: '-0%',
    width: '100%',
    height: '60%',
    marginHorizontal: '3%',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    borderRadius: 10,
    backgroundColor: Themes.colors.white,
  },
  recordsText: {
    marginTop: '2%',
    marginLeft: '3%',
    fontFamily: 'InterBold',
    color: Themes.colors.black,
    fontSize: 20,
  },
  numberText: {
    marginTop: '3%',
    fontFamily: 'InterBold',
    color: Themes.colors.white,
    fontSize: 20,
  },
  streakText: {
    fontFamily: 'InterBold',
    color: Themes.colors.darkerGray,
    fontSize: 26,
  },
  friends: {
    paddingLeft: '30%',

  },
  streaks: {
    paddingTop: '5%',
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  memberSince: {
    fontFamily: 'InterBold',
    color: Themes.colors.darkerGray,
    marginTop: 5,
  },
  firstName: {
    fontSize: 20,
    color: Themes.colors.black,
    fontFamily: 'InterBold',
  },
  names: {
    marginLeft: 10,
  },
  user: {
    marginLeft: '-3%',
    flexDirection: 'row',
    marginTop: '5%',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  header: {
    marginTop: '15%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
    screenContainer: {
      flex: 1,
      padding: 30,
      backgroundColor: Themes.colors.sage,
    },
    screenText: {
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
  