import { StatusBar } from 'expo-status-bar';
import axios from 'axios';
import { useEffect, useState } from "react";
import { StyleSheet, Text, View, Alert, TouchableOpacity, ScrollView, FlatList, SafeAreaView, Pressable, Button } from 'react-native';
import PressableRectangle from './components/PressableRectangle';
import MetaItem from './components/PlanoPoupanca';
import Footer from './pages/Footer';
import Box from '@mui/material/Box';

function HomeScreen({ navigation }) {
  // const ColoredLine = (color) => (
  //     style={{
  //       color: color,
  //       backgroundColor: color,
  //       height: 0.2,
  //       width: 350,
  //       borderRadius: 5,
  //     }} Entra sai pisa
  // );

  const [poupanca, setPoupanca] = useState([]);
  useEffect(() => {
    const fetchEmployeeData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/poupanca');
        setPoupanca(response.data);
      } catch (error) {
        console.log("error fetching employee data", error);
      }
    };
    fetchEmployeeData();
  }, []);
  console.log(poupanca);

  return (

    <View style={styles.container}>
      <ScrollView>
        <StatusBar backgroundColor="lightgreen"
          barStyle="light-content"
          style="auto" />
        {/* Ya não sei o que se passa com este check coloco 1 e não mostra nada (Quando so tem um elemento) */}
        {poupanca.length >= 0 ?
          <View >
            <Text>{poupanca[0]?.name}</Text>
            <SafeAreaView style={styles.container}>
              <FlatList
                data={poupanca}
                renderItem={({ item }) => (
                  <MetaItem name={item.name} goal={item.goal}></MetaItem>
                )}
                keyExtractor={item => item._id}
              />
            </SafeAreaView>
          </View>
          :
          <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>No Data</Text>
            <Text>Press on the plus button and add your Employee</Text>
          </View>
        }
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Details')}
        />

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
  rectangle: {
    flexDirection: 'column',
    width: 365,
    height: 150,
    backgroundColor: '#202020', // Customize the color as needed
    justifyContent: 'space-between',
    alignItems: 'left',
    borderRadius: 10,
    margin: 10,
  },
  title_box: {
    color: 'white',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'baseline',
  },
  description_box: {
    padding: 10,
  },
  title: {
    fontFamily: 'arial',
    color: 'white',
    fontSize: 24,
    textAlign: 'center',

  },
  percentagem: {
    fontFamily: 'arial',
    color: 'white',
    fontSize: 54,
  },
  progresso: {
    color: 'white',
    fontSize: 13,
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
    // backgroundColor: 'green',
  },
  rightContent: {
    flex: 1, // Takes up 1/2 of the available space
    marginLeft: 5, // Adjust as needed for spacing
    flex: 1,
    // backgroundColor: 'brown',
  },

});
export default HomeScreen;