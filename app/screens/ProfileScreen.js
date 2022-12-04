import { useState, useEffect } from 'react';
import { Themes, } from "../../assets/Themes";
import { NavigationContainer } from '@react-navigation/native';
import { View, ScrollView, Text, Pressable, StyleSheet} from "react-native";
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
        <Text style={styles.screenText}>{userProfile.username}</Text>

        <Pressable onPress={handleSignOut}>
          <Text>Sign out</Text>
        </Pressable>
      </ScrollView>}
    </>
  );
}


const styles = StyleSheet.create({
    screenContainer: {
      flex: 1,
      padding: 30,
      backgroundColor: Themes.colors.sage,
    },
    screenText: {
      fontSize: 32,
    },
  });
  