import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Alert, ScrollView } from 'react-native';
import PressableRectangle from './components/PressableRectangle';
import MetaItem from './components/PlanoPoupanca';
import Footer from './pages/Footer';



export default function App() {
  const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 0.2,
            width:350,
            borderRadius: 5,
        }}
    />
  );
  const handlePress = () => {

  };
  return (
    // <NavigationContainer>
    //   <BottomTabNavigator />
    // </NavigationContainer>
    <View style={styles.container}>
      <ScrollView>
        <StatusBar backgroundColor="lightgreen"
          barStyle="light-content"
          style="auto" />
      <MetaItem></MetaItem>
      <ColoredLine color="white" />
      <MetaItem></MetaItem>
      <ColoredLine color="white" />
      <MetaItem></MetaItem>
      <ColoredLine color="white" />
      <MetaItem></MetaItem>
      <MetaItem></MetaItem>
        
        <PressableRectangle onPress={handlePress} text="Press me!" />
      
      </ScrollView>
      <Footer />

    </View>

  );
}

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
// App.js
// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { Text, View, FlatList, Alert, ScrollView } from 'react-native';

// const App = () => {
//   return (
//    <View>

//    </View>
    
//   );
// };

// export default App;
