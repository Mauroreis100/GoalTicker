import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const PressableRectangle = ({ onPress, text }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.rectangle}>
        <View style={[styles.leftContent]}>
        <Text style={[styles.text]} >BT-50</Text>  
        </View>
        <View style={styles.rightContent}>
        <Text style={[styles.progresso]}>55,5%</Text> 
        </View>
      </View>

    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  rectangle: {
    flexDirection: 'row',
    width: 375,
    height: 100,
    backgroundColor: '#202020', // Customize the color as needed
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10,
    margin: 10,
  },
  titulo: {
    color: 'white',
  },
  text: {
    color: 'white', 
    fontSize: 50,
  },
  progresso: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
  },
  nome: {
    fontFamily: 'arial',
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  leftContent: {
    flex: 1, // Takes up 1/2 of the available space
    marginLeft: 5, // Adjust as needed for spacing
    flex: 1,
    backgroundColor: 'green',
  },
  rightContent: {
    flex: 1, // Takes up 1/2 of the available space
    marginLeft: 5, // Adjust as needed for spacing
    flex: 1,
    backgroundColor: 'brown',
  },
});

export default PressableRectangle;
