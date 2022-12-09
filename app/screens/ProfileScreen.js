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
        <View styles={styles.names}>
          <Text styles={styles.firstName}>firstName lastName</Text>
          <Text>member since 2022</Text>
        </View>
        </View>
      </ScrollView>}
    </>
  );
}


const styles = StyleSheet.create({
  firstName: {
    fontSize: 36,
    color: Themes.colors.black,
    fontFamily: 'InterBold',
  },
  names: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  user: {
    flexDirection: 'row',
    marginTop: '5%',
    alignItems: 'center',
  },
  header: {
    marginTop: 40,
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
  