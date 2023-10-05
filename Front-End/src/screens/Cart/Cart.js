import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Button,
  Pressable,
  TouchableOpacity,
  Alert,
} from "react-native";
import React from "react";
import { useAppContext } from "../../context/AppContext";
import CartItem from "./CartItem";
import axios from "axios";


export default function Cart({ navigation }) {
  const { mergedData, name } = useAppContext();

  const handlePayPress = () => {
    Alert.alert(
      'Check out',
      'Payment successfully',
      [
        {
          text: 'Accept',
          onPress: async () => {
            await axios.post("https://dream-wedding.onrender.com/user/order/create",
              {
                User: name.userId,
                Items: mergedData,
                TotalPrice: 222
            }).then((response) => {
                  console.log(response.data)
                  setUserName({ name: response.data.data.FullName })
                  navigation.navigate('HomeScreen')
                })
              .catch((erorr) => {
                console.log(erorr.response.data)
              })
            navigation.reset({
              index: 0, // This is the index of the screen you want to reset to (HomeScreen in this case)
              routes: [{ name: 'HomeScreen' }],
            })
          },
        },
      ],
      { cancelable: false },
    );
  };


  return (
    <View style={{ flex: 1 }}>
      {mergedData.length == 0 && (
        <View style={styles.containerEmpty}>
          <Text>Your Cart Is empty</Text>
        </View>
      )}
      {mergedData.length != 0 && (
        <>
          <ScrollView style={styles.container}>
            {mergedData.map((card, index) => {
              return <CartItem key={index} card={card} />;
            })}
          </ScrollView>
          <TouchableOpacity onPress={handlePayPress}>
            <Text style={styles.button}>Pay</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    paddingBottom: 20,
    paddingHorizontal: 20,
    gap: 10,
  },
  containerEmpty: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  button: {
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
});
