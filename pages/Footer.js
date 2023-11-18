import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
// import { Link } from 'expo-router';
const Footer = () => {
  return (
    <View style={styles.footer}>
      {/* <Link replace href="/NewGoal">
        <Pressable>
          <Text style={styles.text}>Criar nova Poupança</Text>
        </Pressable>
      </Link> */}
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