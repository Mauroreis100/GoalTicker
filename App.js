import { StatusBar } from 'expo-status-bar';
import axios from 'axios';
import {useEffect, useState} from "react";
import { StyleSheet, Text, View, FlatList, Alert, ScrollView,Pressable } from 'react-native';
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
  
    const [poupanca, setPoupanca] = useState([]);
    useEffect(() => {
      const fetchEmployeeData = async () => {
        try {
          const response = await axios.get("http://localhost:8000/poupanca");
          setPoupanca(response.data);
        } catch (error) {
          console.log("error fetching employee data", error);
        }
      };
      fetchEmployeeData();
    }, []);
    console.log(poupanca);
  
  return (
    // <NavigationContainer>
    //   <BottomTabNavigator />
    // </NavigationContainer>
    <View style={styles.container}>
      <ScrollView>
        <StatusBar backgroundColor="lightgreen"
          barStyle="light-content"
          style="auto" />


 {/* {poupancas.length > 0 ? ( 
  //Se o array poupancas for maior que 0 display someting else
        <SearchResults data={poupancas} input={input} setInput={setInput} />
      ) : (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text>No Data</Text>
          <Text>Press on the plus button and add your Employee</Text>
          <Pressable onPress={() => router.push("/(home)/adddetails")}>
            <AntDesign
              style={{ marginTop: 30 }}
              name="pluscircle"
              size={24}
              color="black"
            />
          </Pressable>
        </View>
      )}  */}

      <MetaItem text="PC GAMER" percentagem="40%" ultimaEntrada="300"></MetaItem>
      <ColoredLine color="white" />
      <MetaItem></MetaItem>
      <ColoredLine color="white" />
      <MetaItem></MetaItem>
      <ColoredLine color="white" />
      <MetaItem></MetaItem>
      <ColoredLine color="white" />
      <MetaItem></MetaItem>
      <Pressable onPress={poupanca}>
          <Text>YOOOOO</Text>
        </Pressable>
        <PressableRectangle onPress={()=>poupanca} text="Press me!" />
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
