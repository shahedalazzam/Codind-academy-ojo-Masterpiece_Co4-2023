import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, StatusBar } from 'react-native';
import { useFonts } from 'expo-font';
function LandingScreen({ navigation }) {
    let [fontsLoaded] = useFonts({
        'Italianno': require('./Italianno-Regular.ttf'),
    });

    return (
        <View style={styles.container}>
            <StatusBar
                backgroundColor="#FDBFC3"
                barStyle="light-content"
                hidden={false}
                translucent={false}
            />
            <Image source={require('../Landing/img1.jpg')} style={styles.image1} />
            <Text style={[styles.text, { fontFamily: fontsLoaded ? 'Italianno' : null }]}>Let's make your day special!</Text>

            <View style={styles.buttons}>
                <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
                    <Text style={styles.btn1}>Sign in</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
                    <Text style={styles.btn2}>Sign up</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image1: {
        backgroundColor: '#fff',
        width: 450,
        height: 450,
    },
    text: {
        fontSize: 25,
        color: '#153E5C',
        backgroundColor: '#fff',
    },
    buttons: {
        gap: 15,
        width: 370,
        marginTop: 70,
    },
    btn1: {
        color: '#153E5C',
        backgroundColor: '#FDBFC3',
        borderWidth: 1,
        borderColor: '#FDBFC3',
        padding: 15,
        textAlign: 'center',
        fontWeight: '700',
        borderRadius: 20,
    },
    btn2: {
        color: '#153E5C',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#153E5C',
        padding: 15,
        textAlign: 'center',
        fontWeight: '700',
        borderRadius: 20,
    },
});

export default LandingScreen;

