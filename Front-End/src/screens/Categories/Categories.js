import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';



const products = [
    { id: 1, Price: '20$', name: 'Blue dress', image: require("../Details/img/dress1.png") },
    { id: 2, Price: '20$', name: 'White dress', image: require("../Details/img/dress2.png") },
    { id: 3, Price: '20$', name: 'Invitations', image: require("../../screens/Home/invitation.png") },
    { id: 4, Price: '20$', name: 'Make Up', image: require("../../screens/Home/mackup.png") },
    { id: 5, Price: '20$', name: 'Cermony', image: require("../../screens/Home/cermony.png") },
    { id: 6, Price: '20$', name: 'Attires & Accessories', image: require("../../screens/Home/attires.png") },
    { id: 7, Price: '20$', name: 'Invitations', image: require("../../screens/Home/invitation.png") },
    { id: 8, Price: '20$', name: 'Make Up', image: require("../../screens/Home/mackup.png") },
];

const Categories = ({ navigation }) => {
    return (
        <View style={styles.container}>

            <FlatList
                numColumns={2}
                data={products}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.buttonContainer}
                        onPress={() => navigation.navigate("Details")}
                    >
                        <View style={styles.cont}>
                            <Image
                                resizeMode="stretch"
                                style={styles.productImage}
                                source={item.image}
                            />
                            <Text style={styles.productName}>{item.name}</Text>
                            <Text style={styles.productName}>{item.Price}</Text>
                        </View></TouchableOpacity>
                )}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff'
    },
    productImage: {
        margin: 5,
        width: 150,
        height: 150,
    },
    cont: {
        elevation: 3,
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff4f3',
        width: 185,
        height: 250,
        borderRadius: 15,
        margin: 10,
        borderColor: "#20232a",
    },
    productName: {
        fontWeight: '600',
        fontSize: 11,
        color: '#153E5C',
        textAlign: 'center',
    },
});

export default Categories;
