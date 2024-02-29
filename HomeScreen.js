import { StatusBar } from 'expo-status-bar';
import axios from 'axios';
import {useEffect, useState} from "react";
import { StyleSheet, Text, View, FlatList, Alert, ScrollView,Pressable, Button} from 'react-native';
import PressableRectangle from './components/PressableRectangle';
import MetaItem from './components/PlanoPoupanca';
import Footer from './pages/Footer';
function HomeScreen({navigation}) {
  const ColoredLine = (color) => (
   <FlatList
        style={{
            color: color,
            backgroundColor: color,
            height: 0.2,
            width:350,
            borderRadius: 5,
        }}
    ></FlatList>
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

    <View style={styles.container}>
      <ScrollView>
        <StatusBar backgroundColor="lightgreen"
          barStyle="light-content"
          style="auto" />
{poupanca.length >= 1 ?
  <MetaItem data={poupanca}></MetaItem> : 
 <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <Text>No Data</Text>
          <Text>Press on the plus button and add your Employee</Text>
        </View>
        }
        {/* <Link href="/DetailsScreen">About</Link> */}
      {/* <MetaItem text="PC GAMER" percentagem="40%" ultimaEntrada="300"></MetaItem> */}
      {/* <ColoredLine color="white" /> */}
      <MetaItem></MetaItem>
      <ColoredLine color="white" />
      <MetaItem></MetaItem>
      <ColoredLine color="white" />
     
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
      <Pressable onPress={poupanca}>
          <Text>Tamanho: {poupanca.length}</Text>
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
export default HomeScreen;