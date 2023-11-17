import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const PressableRectangle = ({ onPress, text }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.rectangle}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  rectangle: {
    width: 375,
    height: 100,
    backgroundColor: '#202020', // Customize the color as needed
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    margin: 10,
  },
  text: {
    color: 'white', // Customize the text color as needed
    fontSize: 16,
  },
});

export default PressableRectangle;
