import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

function SignIn({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.text1}>Sign in to continue</Text>

      <Text style={styles.text2}>Email Address</Text>
      <TextInput
        style={styles.input1}
        placeholder="Enter Email Address"
        value={email}
        onChangeText={setEmail}
      />

      <Text style={styles.text3}>Password</Text>
      <TextInput
        style={styles.input2}
        placeholder="Enter Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />
      <Text style={styles.text4}>Forget Password?</Text>
      <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
        <Text style={styles.btn}>Sign in</Text>
      </TouchableOpacity>

      <View style={styles.signup}>
        <Text style={styles.text5}>
          Don't have an account?
        </Text>
        <TouchableOpacity style={styles.touch}
          onPress={() => navigation.navigate("SignUp")}><Text style={styles.linkText}> Sign up</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 17,
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  text1: {
    marginBottom: 20,
    color: '#153E5C',
    marginLeft: 20,
    fontSize: 20,
    fontWeight: '700',
  },
  text2: {
    color: '#153E5C',
    marginTop: 22,
    marginLeft: 20,
    fontSize: 13,
    fontWeight: '600',
  },
  input1: {
    borderColor: '#153E5C',
    borderWidth: 1,
    borderRadius: 15,
    padding: 10,
    marginLeft: 20,
    marginRight: 20,
  },
  text3: {
    marginTop: 20,
    color: '#153E5C',
    marginLeft: 20,
    fontSize: 13,
    fontWeight: '600',
  },
  input2: {
    color: '#153E5C',
    borderColor: '#153E5C',
    borderWidth: 1,
    borderRadius: 15,
    padding: 10,
    marginLeft: 20,
    marginRight: 20,
  },
  text4: {
    alignSelf: 'flex-end',
    color: '#153E5C',
    marginTop: 22,
    marginRight: 20,
    fontSize: 11,
    fontWeight: '500',
  },
  btn: {
    color: '#153E5C',
    backgroundColor: '#FDBFC3',
    borderWidth: 1,
    borderColor: '#FDBFC3',
    margin: 20,
    padding: 15,
    textAlign: 'center',
    fontWeight: '700',
    borderRadius: 20,
  },
  signup: {
    alignItems: 'center',
  },
  text5: {
    color: '#153E5C',
    marginTop: 22,
    fontSize: 13,
    fontWeight: '500',
  },
  linkText: { 
    fontSize: 15,
    fontWeight: '700',
    color: '#153E5C',
  },
});

export default SignIn;
