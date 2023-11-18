// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View, FlatList, Alert, ScrollView } from 'react-native';
// import PressableRectangle from './components/PressableRectangle';
// import Footer from './pages/Footer';



// export default function App() {
//   const handlePress = () => {

//   };
//   return (
//     // <NavigationContainer>
//     //   <BottomTabNavigator />
//     // </NavigationContainer>
//     <View style={styles.container}>
//       <ScrollView>
//         <StatusBar backgroundColor="lightgreen"
//           barStyle="light-content"
//           style="auto" />

//         <PressableRectangle onPress={handlePress} text="Press" />
//         <PressableRectangle onPress={handlePress} text="Press me!" />
//         <PressableRectangle onPress={handlePress} text="Press me!" />
//         <PressableRectangle onPress={handlePress} text="Press me!" />
//         <PressableRectangle onPress={handlePress} text="Press me!" />
//         <PressableRectangle onPress={handlePress} text="Press me!" />
//         <PressableRectangle onPress={handlePress} text="Press me!" />
//         <PressableRectangle onPress={handlePress} text="Press me!" />
//         <PressableRectangle onPress={handlePress} text="Press me!" />
//         <PressableRectangle onPress={handlePress} text="Press me!" />
//         <PressableRectangle onPress={handlePress} text="Press me!" />
//         <PressableRectangle onPress={handlePress} text="Press me!" />
      
//       </ScrollView>
//       <Footer />

//     </View>

//   );
// }

// const styles = StyleSheet.create({
//   navbar: {
//     height: 200
//   },
//   container: {
//     paddingTop: 50,
//     flex: 1,
//     backgroundColor: '#191919',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   textoPrimario: {
//     color: 'white',
//   },
// });
// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './AppNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
};

export default App;
