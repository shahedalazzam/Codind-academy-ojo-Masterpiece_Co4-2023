import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';


function SignUp({ navigation }) {
  const initialValues = {
    FirstName: '',
    LastName: '',
    Phone: '',
    Email: '',
    Password: '',
  };

  const validationSchema = Yup.object().shape({
    FirstName: Yup.string().required('First Name is required'),
    LastName: Yup.string().required('Last Name is required'),
    Phone: Yup.string().required('Phone Number is required'),
    Email: Yup.string().email('Invalid Email').required('Email is required'),
    Password: Yup.string().required('Password is required'),
  });

  const handleSubmit = async (values) => {
    await axios.post("https://dream-wedding.onrender.com/user/sign-up", values).then((response) => {
      // console.log(response.data)
      navigation.navigate('SignIn')
    })
      .catch((erorr) => {
        // console.log(erorr.response.data.message)
      })
    // Handle form submission here
    // console.log(values);

  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.text1}>Create Account</Text>

      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <React.Fragment>
            <Text style={styles.text2}>First Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter First Name"
              onChangeText={handleChange('FirstName')}
              onBlur={handleBlur('FirstName')}
              value={values.FirstName}
            />
            {touched.FirstName && errors.FirstName && (
              <Text style={styles.errorText}>{errors.FirstName}</Text>
            )}

            <Text style={styles.text2}>Last Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Last Name"
              onChangeText={handleChange('LastName')}
              onBlur={handleBlur('LastName')}
              value={values.LastName}
            />
            {touched.LastName && errors.LastName && (
              <Text style={styles.errorText}>{errors.LastName}</Text>
            )}

            <Text style={styles.text2}>Phone Number</Text>
            <TextInput
              style={styles.input1}
              placeholder="Enter Phone Number"
              onChangeText={handleChange('Phone')}
              onBlur={handleBlur('Phone')}
              value={values.Phone}
            />
            {touched.Phone && errors.Phone && (
              <Text style={styles.errorText}>{errors.Phone}</Text>
            )}

            <Text style={styles.text2}>Email Address</Text>
            <TextInput
              style={styles.input1}
              placeholder="Enter Email Address"
              onChangeText={handleChange('Email')}
              onBlur={handleBlur('Email')}
              value={values.Email}
            />
            {touched.Email && errors.Email && (
              <Text style={styles.errorText}>{errors.Email}</Text>
            )}

            <Text style={styles.text3}>Password</Text>
            <TextInput
              style={styles.input2}
              placeholder="Enter Password"
              onChangeText={handleChange('Password')}
              onBlur={handleBlur('Password')}
              value={values.Password}
              secureTextEntry={true}
            />
            {touched.Password && errors.Password && (
              <Text style={styles.errorText}>{errors.Password}</Text>
            )}

            <TouchableOpacity onPress={handleSubmit}>
              <Text style={styles.btn}>Sign up</Text>
            </TouchableOpacity>
          </React.Fragment>
        )}
      </Formik>

      <View style={styles.signup}>
        <Text style={styles.text5}>Already have an account?</Text>
        <TouchableOpacity
          style={styles.touch}
          onPress={() => navigation.navigate('SignIn')}
        >
          <Text style={styles.linkText}> Sign in</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    gap: 8,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  input: {
    borderColor: '#153E5C',
    borderWidth: 1,
    borderRadius: 15,
    padding: 10,
    marginLeft: 20,
    marginRight: 20,
  },
  text1: {
    marginBottom: 10,
    color: '#153E5C',
    marginLeft: 20,
    fontSize: 20,
    fontWeight: '700',
  },
  text2: {
    color: '#153E5C',
    marginTop: 20,
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
    marginTop: 20,
    fontSize: 11,
    fontWeight: '500',
  },
  linkText: {
    marginBottom: 20,
    fontSize: 15,
    fontWeight: '700',
    color: 'blue',
  },
  errorText: {
    color: 'red',
    marginLeft: 20,
  },
});

export default SignUp;
