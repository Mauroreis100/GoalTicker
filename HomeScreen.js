// HomeScreen.js
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, Button, StyleSheet,ScrollView } from 'react-native';
import PressableRectangle from './components/PressableRectangle';

const HomeScreen = ({ navigation }) => {
    const handlePress = () => {

  };
  return (
    <View style={styles.container}>
        <ScrollView>
         <StatusBar backgroundColor="lightgreen"
          barStyle="light-content"
          style="auto" />

        <PressableRectangle onPress={handlePress} text="Press" />
        <PressableRectangle onPress={handlePress} text="Press me!" />
        <PressableRectangle onPress={handlePress} text="Press me!" />
        <PressableRectangle onPress={handlePress} text="Press me!" />
        <PressableRectangle onPress={handlePress} text="Press me!" />
        <PressableRectangle onPress={handlePress} text="Press me!" />
        <PressableRectangle onPress={handlePress} text="Press me!" />
        <PressableRectangle onPress={handlePress} text="Press me!" />
        <PressableRectangle onPress={handlePress} text="Press me!" />
        <PressableRectangle onPress={handlePress} text="Press me!" />
        <PressableRectangle onPress={handlePress} text="Press me!" />
        <PressableRectangle onPress={handlePress} text="Press me!" />
      
      </ScrollView>
      <Button
        title="Criar nova Poupança"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  navbar: {
    height: 200
  },
  container: {
    paddingTop: 50,
    flex: 1,
    backgroundColor: '#191919',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textoPrimario: {
    color: 'white',
  },
});
export default HomeScreen;
