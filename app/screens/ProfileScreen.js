import { Themes, } from "../../assets/Themes";
import { NavigationContainer } from '@react-navigation/native';
import { View, Text, Pressable, StyleSheet} from "react-native";
import supabase from "../../supabase";


export default function ProfileScreen() {
  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.log("signout error:", error.message);
    }
  }

  return (
    <View style={styles.screenContainer}>
      <Text style={styles.screenText}>Profile!</Text>

      <Pressable onPress={handleSignOut}>
        <Text>Sign out</Text>
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
    screenText: {
      fontSize: 32,
    },
  });
  