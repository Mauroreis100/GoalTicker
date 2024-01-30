// DetailsScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Modal, StyleSheet, Pressable, Alert, Button } from 'react-native';
import DateTimePicker from 'react-native-ui-datepicker';
import dayjs from 'dayjs';

const DetailsScreen = ({navigation}) => {
  const [goalName, setGoalName] = useState('');
  const [goalAmount, setGoalAmount] = useState(0);
  const [initialAmount, setInitialAmount] = useState(0);
  const [goalDate_End, setGoalDate_End] = useState(dayjs('0000-12-00').format('DD/MM/YYYY').toString());
  const [monthlyIncome, setMonthlyIncome] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Nome da nova poupança</Text>
      <TextInput
        style={{ height: 40 }}
        placeholder="Carro novo..."
        onChangeText={newText => setGoalName(newText)}
        defaultValue={goalName}
      />
      <Text>Meta</Text>
      <TextInput
        style={{ height: 40}}
        placeholder="Valor da Meta"
        onChangeText={newText => setGoalAmount(newText)}
        defaultValue={goalAmount}
      />
      <Text>Valor inicial</Text>
      <TextInput
        style={{ height: 40 }}
        placeholder="-MT"
        onChangeText={newText => setInitialAmount(newText)}
        defaultValue={initialAmount}
      />
      <Text>Expectaviva de Término da Poupança</Text>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text>{goalDate_End}</Text>
      </Pressable>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <DateTimePicker
              mode='date'
              goalDate_End={goalDate_End}
              onValueChange={(date) => setGoalDate_End(dayjs(date).format('DD/MM/YYYY').toString())}
            />

            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Button
        onPress={() => navigation.navigate('Home')}
        title="Gravar nova poupança" color="#841584"
        accessibilityLabel="Learn more about this purple button" />
    </View >
  );
};
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  inputStyle:{
    borderWidth: 2,
    borderColor:"black",
  },
});
export default DetailsScreen;
