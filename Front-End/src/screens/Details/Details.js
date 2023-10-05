import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { useAppContext } from '../../context/AppContext';

const products = [
    { id: 1, Price: '30$', name: 'Ceremony', image: require("./img/dress1.png") },
];

function Details({ navigation, route }) {
    const {updateMergedData} = useAppContext();
    const { itemId } = route.params
    const [cartItems, setCartItems] = useState([]);

    const addToCartAndNavigate = (item) => {
        updateMergedData(item)
        // setCartItems([...cartItems, item]);
        // navigation.navigate('Cart', { cartItems: [...cartItems, item] });
        navigation.goBack();

    };
    const [item, setItems] = useState("");
    useEffect(() => {
        console.log(itemId)
        const fetchUserData = async () => {
            try {
                const response = await axios.get(
                    `https://dream-wedding.onrender.com/user/item/${itemId}`
                ).catch((err) => {
                    if (err && err.response) {
                        console.log("first")
                        console.log('Error: ', err.response.data.error);
                    }
                });

                if (response && response.data) {
                    console.log(response.data.data)
                    setItems(response.data.data.item);
                }
            } catch (error) {
                console.error('Error fetching item data:', error);
            }
        };
        fetchUserData();
    }, []);
    return (
        <View style={styles.container}>
            <View style={styles.flat}>
                <View style={styles.cont}>
                    {/* <Image
                        resizeMode="stretch"
                        style={styles.productImage}
                        source={item.Img}
                    /> */}
                </View>
                <View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginRight: 20, marginLeft: 20 }}>
                        <Text>Name:</Text>
                        <Text>{item.Name}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginRight: 20, marginLeft: 20 }}>
                        <Text>Price:</Text>
                        <Text>{item.Price}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginRight: 20, marginLeft: 20 }}>
                        <Text>Color:</Text>
                        <Text style={{ backgroundColor: item.Color, width: 60, height: 25 }}></Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginRight: 20, marginLeft: 20 }}>
                        <Text>Brand:</Text>
                        <Text>{item.Brand}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginRight: 20, marginLeft: 20 }}>
                        <Text>Size:</Text>
                        <Text>{item.Size}</Text>
                    </View>
                </View>
            </View>
            <TouchableOpacity onPress={() => addToCartAndNavigate(item)} style={styles.goCart}>
                <Text style={styles.btn}>Add To Cart</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding:10,
        justifyContent:'space-between'
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
    productImage: {
        margin: 5,
        width: 350,
        height: 400,
    },
    goCart: {
        justifySelf: 'flex-end'
    }
});


export default Details;
