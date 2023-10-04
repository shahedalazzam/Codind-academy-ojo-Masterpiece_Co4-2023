import React from 'react';
import { View, Text, FlatList } from 'react-native';

function Cart({ route }) {
    const { cartItems } = route.params ?? {};

    const isCartValid = Array.isArray(cartItems);

    return (
        <View>
            <Text>Welcome to the Cart Screen!</Text>
            {isCartValid ? (
                <FlatList
                    data={cartItems}
                    renderItem={({ item }) => (
                        <View>
                           <Text>Name: {item.Name}</Text>
                        <Text>Price: {item.Price}</Text>
                        </View>
                    )}
                />
            ) : (
                <Text>No items in the cart.</Text>
            )}
        </View>
    );
}

export default Cart;
