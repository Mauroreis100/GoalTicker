import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.text}>Made by Mauro</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    // backgroundColor: '#3498db', // Cor de fundo do rodapé
    padding: 10,
    alignItems: 'center',
  },
  text: {
    color: 'white', // Cor do texto
    fontSize: 16,
  },
});

export default Footer;