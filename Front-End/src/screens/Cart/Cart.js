import React from 'react';
import { View, Text, Button } from 'react-native';

function AnotherScreen({ navigation }) {
  return (
    <View>
      <Text>Welcome to Another Screen!</Text>
      <Button
        title="Go back to Landing Screen"
        onPress={() => navigation.navigate('Landing')}
      />
    </View>
  );
}

export default AnotherScreen;