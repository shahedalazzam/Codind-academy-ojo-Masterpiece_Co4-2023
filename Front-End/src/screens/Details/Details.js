import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
const products = [
    { id: 1, Price: '30$', name: 'Cermony', image: require("./img/dress1.png") },
];
// Define your ProductDetails component here

function Details({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.flat} >
                <FlatList
                    numColumns={2}
                    data={products}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <View style={styles.flat} >

                            <View style={styles.cont}>
                                <Image
                                    resizeMode="stretch"
                                    style={styles.productImage}
                                    source={item.image}
                                />
                            </View>
                            <View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginRight: 20, marginLeft: 20 }}>
                                    <Text>Name:</Text>
                                    <Text>{item.name}</Text>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginRight: 20, marginLeft: 20 }}>
                                    <Text style={styles.label}>Price:</Text>
                                    <Text style={styles.price}>{item.Price}</Text>
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginRight: 20, marginLeft: 20 }}>
                                    <Text style={styles.label}>Price:</Text>
                                    <Text style={styles.price}>{item.Price}</Text>
                                </View>
                            </View>
                        </View>
                    )}
                />
                <TouchableOpacity >
                    <Text style={styles.btn}>Pay</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#fff',
    },
    buttonContainer: {
    },
    cont: {
        elevation: 3,
        marginBottom: 20,
        backgroundColor: '#fff4f3',
        borderRadius: 15,
        margin: 10,
        borderColor: "#20232a",
    },
    productName: {
        justifyContent: 'space-around',
        fontWeight: '600',
        fontSize: 12,
        color: '#153E5C',
        textAlign: 'center',
    },
    btn: {
        // WADKRx3Q
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
    hhh: {
        justifyContent: 'space-between'
    },
    productImage: {
        margin: 5,
        width: 350,
        height: 400,
    },
});
export default Details;
