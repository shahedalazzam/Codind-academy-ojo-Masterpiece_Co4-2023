import React, { useState } from "react";
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Dimensions, Image, StatusBar, TextInput, TouchableOpacity, FlatList } from "react-native";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const images = [

   require('../../screens/Home/9c15d5310a457ffc2054f6d619b56749-removebg-preview.png'),
   require('../../screens/Home/img2.jpg'),
   require('../../screens/Landing/img1.jpg'),
];

const products = [
   { id: 1, name: 'Cermony', image: require("../../screens/Home/cermony.png") },
   { id: 2, name: 'Attires & Accessories', image: require("../../screens/Home/attires.png") },
   { id: 3, name: 'Invitations', image: require("../../screens/Home/invitation.png") },
   { id: 4, name: 'Make Up', image: require("../../screens/Home/mackup.png") },
];

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const HomeScreen = ({ navigation }) => {
   const [imgActive, setImgActive] = useState(0);
   const handleChange = (nativeEvent) => {
      const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
      if (slide !== imgActive) {
         setImgActive(slide);
      }
   };

   return (

      <ScrollView style={styles.container}>
         <SafeAreaView >
            <View style={styles.wrap}>
               <Text style={styles.text1}>Hi Shahed</Text><View style={{ flexDirection: 'row', gap: 120 }}>
                  <Text style={styles.text2}>Inspiration For Your Wedding</Text>



                  <View style={{ flexDirection: "row", }}>
                     {/* Account Button */}
                     <TouchableOpacity>
                        <MaterialCommunityIcons
                           name="account-circle-outline"
                           style={styles.iconButton}
                           size={24}
                           color="black"
                        />
                     </TouchableOpacity>
                     {/* Favorites Button */}
                     <TouchableOpacity>
                        <MaterialCommunityIcons
                           name="cards-heart-outline"
                           style={styles.iconButton}
                           size={24}
                           color="black"
                        />
                     </TouchableOpacity>
                     {/* Cart Button */}
                     <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
                        <MaterialCommunityIcons
                           name="cart-outline"
                           style={styles.iconButton}
                           size={24}
                           color="black"
                        />
                     </TouchableOpacity>
                  </View>


               </View>

               <View style={styles.SearchBar}>
                  <TextInput
                     placeholder="Search ..." />
                  <TouchableOpacity
                     style={{ flex: 0 }}
                     onPress={() => navigation.navigate("DiscoverScreen")}>
                     <Feather name="search" size={24} color="grey" />
                  </TouchableOpacity>
               </View>

               <View style={styles.bestSellersContainer}>
                  <Text style={styles.CategoriesText}>Categories</Text>
                  <FlatList
                     data={products}
                     keyExtractor={(item) => item.id.toString()}
                     renderItem={({ item }) => (
                        <TouchableOpacity
                           style={styles.buttonContainer}
                           onPress={() => navigation.navigate("Categories")}
                        >
                           <View style={styles.cont}>
                              <Image
                                 resizeMode="stretch"
                                 style={styles.productImage}
                                 source={item.image}
                              />
                              <Text style={styles.productName}>{item.name}</Text>
                           </View>
                        </TouchableOpacity>
                     )}
                     horizontal
                     showsHorizontalScrollIndicator={false}
                  />
               </View>

               <Text style={styles.RecomendedText}>Recomended For you</Text>
               <View style={styles.sliders}>

                  <ScrollView
                     onScroll={({ nativeEvent }) => handleChange(nativeEvent)}
                     showsHorizontalScrollIndicator={false}
                     pagingEnabled
                     horizontal
                     style={styles.wrap}
                  >
                     {images.map((image, index) => (

                        <Image
                           key={index}
                           resizeMode="stretch"
                           style={styles.image}
                           source={image}
                        />
                     ))}
                  </ScrollView>
                  <View style={styles.wrapDot}>
                     {images.map((_, index) => (
                        <Text
                           key={index}
                           style={imgActive === index ? styles.dotActive : styles.dot}
                        >
                           ●
                        </Text>
                     ))}
                  </View>
               </View>

               <View>
                  <View style={styles.bestSellersContainer}>
                     <Text style={styles.trending}>Trending</Text>
                     <FlatList
                        data={products}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => (
                           <TouchableOpacity
                              style={styles.buttonContainer}
                              onPress={() => navigation.navigate("Categories")}
                           >
                              <View style={styles.cont}>
                                 <Image
                                    resizeMode="stretch"
                                    style={styles.productImage}
                                    source={item.image}
                                 />
                                 <Text style={styles.productName}></Text>
                              </View>
                           </TouchableOpacity>
                        )}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                     />
                  </View>
               </View>
            </View>
         </SafeAreaView>
      </ScrollView>
   );
};

const styles = StyleSheet.create({
   container: {
      backgroundColor: '#fff',
      flex: 1,
   },

   iconButton: {
      marginRight: '100',

   },

   sliders: {
      margin: 10,
      borderRadius: 15,
      height: 200,
      backgroundColor: '#fff4f3',
   },
   slidertext: {
      margin: 15,
   },
   text1: {
      color: '#153E5C',
      marginLeft: 15,
      marginTop: 30,
      fontSize: 30,
      fontWeight: '700',
   },
   text2: {
      color: '#153E5C',
      marginLeft: 15,
      marginTop: 5,
      marginBottom: 10,
   },
   CategoriesText: {
      fontWeight: '700',
      color: '#153E5C',
      fontSize: 20,
      marginBottom: 10,
      marginLeft: 15,
   },
   SearchBar: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: "#eee",
      marginTop: 15,
      paddingVertical: 9,
      paddingHorizontal: 15,
      borderRadius: 15,
      marginHorizontal: 15,
   },
   wrap: {
      width: WIDTH,
   },
   image: {
      width: WIDTH,
      height: HEIGHT * 0.27,
   },
   wrapDot: {
      position: "absolute",
      bottom: 0,
      flexDirection: "row",
      alignSelf: "center",
   },
   dotActive: {
      margin: 3,
      color: "black",
   },
   dot: {
      margin: 3,
      color: "white",
   },
   bestSellersContainer: {
      marginTop: 20,
   },
   cont: {
      marginBottom: 20,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff4f3',
      width: 100,
      height: 120,
      borderRadius: 15,
      margin: 10,
      borderColor: "#20232a",
   },
   h2: {
      marginLeft: 15,
      fontSize: 20,
      fontWeight: 'bold',
   },
   productImage: {
      margin: 5,
      width: 50,
      height: 50,
   },
   productName: {
      fontWeight: '600',
      fontSize: 16,
      color: '#153E5C',
      textAlign: 'center',
   },
   RecomendedText: {
      fontWeight: '700',
      color: '#153E5C',
      fontSize: 20,
      marginBottom: 10,
      marginLeft: 15,
   },
   trending: {
      fontWeight: '700',
      color: '#153E5C',
      fontSize: 20,
      marginBottom: 10,
      marginLeft: 15,
   }
});

export default HomeScreen;
