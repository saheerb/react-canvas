import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Hi there!</Text>
      {/* <Button
        onPress={() => navigation.navigate('SignPanel')}
        title="Go to Sign Panel Demo"
      />
      <Button
        onPress={() => navigation.navigate('SignCanvas')}
        title="Go to Sign Canvas Demo"
      />
      <Button
        onPress={() => navigation.navigate('NativeCanvas')}
        title="Go to Native Canvas Demo"
      />
      <Button
        onPress={() => navigation.navigate('CanvasSketch')}
        title="Go to Canvas Sketch Demo"
      /> */}
      <Button
        onPress={() => navigation.navigate('BasicOperation')}
        title="Go to Canvas Math Demo"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
