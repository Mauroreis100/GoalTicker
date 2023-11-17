import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Alert, ScrollView } from 'react-native';
import PressableRectangle from './components/PressableRectangle'; // Assuming your component is in the same directory
import Footer from './pages/Footer'; // Certifique-se de ajustar o caminho conforme necessário

export default function App() {
  const handlePress = () => {

  };
  return (
    <View style={styles.container}>
      <ScrollView>      
      <StatusBar backgroundColor="lightgreen"
        barStyle="light-content"
        style="auto" />
        <PressableRectangle onPress={handlePress} text="Computador Gamer - 30%" />
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
