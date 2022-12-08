import { useState } from 'react';
import supabase from "../../supabase";
import { Themes } from "../../assets/Themes";
import { View, ScrollView, Text, TextInput, Pressable, StyleSheet } from "react-native";

export default function LoginScreen({ navigation}) {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState(false);

  const handleSignIn = async () => {
    // sign in with Supabase auth
    const { user, session, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
  
    if (error) {
      setError(error.message);
    };
  }
  
  return (
    <View style={styles.screenContainer}>
      <Text style={[styles.heading, styles.textShadow]}>fitness with friends!</Text>

      <ScrollView contentContainerStyle={styles.loginContainer}>
        <Text style={[styles.title, styles.textShadow]}>welcome back.</Text>

        <View style={styles.loginForm}>
          <View style={styles.inputContainer}>
            <Text style={[styles.inputLabel, styles.textShadow]}>email:</Text>
            <TextInput
              style={styles.input}
              onChangeText={setEmail}
              value={email}
              placeholder=""
            />
          </View>
          
          <View style={styles.inputContainer}>
            <Text style={[styles.inputLabel, styles.textShadow]}>password:</Text>
            <TextInput
              style={styles.input}
              onChangeText={setPassword}
              value={password}
              placeholder=""
            />
          </View>
        </View>

        <Pressable
          style={styles.button}
          onPress={handleSignIn}
        >
          <Text style={[styles.buttonText, styles.textShadow]}>let's move</Text>
        </Pressable >

        <Text style={styles.smallText}>
          Don't have an account? <Pressable onPress={() => {navigation.navigate('Signup')}}><Text>Sign up</Text></Pressable>
        </Text>

        {error && <Text style={styles.errorText}>{error}</Text>}
      </ScrollView>
    </View>
  );
}


const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    padding: 30,
    backgroundColor: Themes.colors.sage,
  },

  textShadow: {
    textShadowColor: Themes.colors.shadow,
    textShadowOffset: {width: -4, height: 4},
    textShadowRadius: 12,
  },

  heading: {
    textAlign: 'center',
    fontSize: 26,
    fontWeight: '600',
    marginTop: 15,
  },

  loginContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontSize: 26,
    fontStyle: 'italic',
    textAlign: 'center',
    marginBottom: 45,
  },

  loginForm: {
    alignSelf: 'stretch',
    paddingHorizontal: 17,
    paddingTop: 9,
    paddingBottom: 37,
    backgroundColor: Themes.colors.purple,
    borderRadius: 25,
    marginBottom: 45,
  },

  inputLabel: {
    marginTop: 9,
    marginBottom: 5,
  },

  input: {
    height: 40,
    padding: 10,
    backgroundColor: Themes.colors.white,
    borderRadius: 8,
  },

  errorText: {
    color: Themes.colors.white,
    fontSize: 15,
    paddingVertical: 5,
    paddingHorizontal: 20,
    backgroundColor: Themes.colors.red,
    borderRadius: 100,
    marginTop: 20,
  },

  button: {
    paddingHorizontal: 33,
    paddingVertical: 10,
    backgroundColor: Themes.colors.purple,
    borderRadius: 100,
  },

  buttonText: {
    color: Themes.colors.white,
    fontSize: 20,
    fontWeight: '500',
  }
});
  