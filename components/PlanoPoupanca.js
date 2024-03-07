import React from 'react';

import { View, TouchableOpacity, Text, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CircularProgress, {
  circularProgressClasses,
} from '@mui/material/CircularProgress';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 15,
  borderRadius: 10,

  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
  },
}));
const PlanoPoupanca = ({ onPress, name,goal, percentagem, ultimaEntrada, data, input, setInput }) => {
  return (
    // <TouchableOpacity onPress={onPress}>
    //   <View style={styles.rectangle}>
    //     <View style={[styles.leftContent, styles.title_box]}>
    //       <Text style={[styles.title]}>{data?.poupancaName}</Text>
    //       <Text style={[styles.percentagem]}>{percentagem}%</Text>
    //     </View>

    //     <View style={[styles.rightContent, styles.description_box]}>
    //       <Text style={[styles.progresso]}>Ultíma Entrada: {ultimaEntrada}MT</Text>
    //     <Box sx={{ flexGrow: 1 }}>
    //     <br></br>
    //       <BorderLinearProgress valueBuffer={2} color='primary' variant="determinate" value={50} />

    //     </Box>
    //     </View>
    //   </View>

    //  </TouchableOpacity>
    <View style={styles.container}>

      <TouchableOpacity onPress={onPress}>
        <View style={styles.rectangle}>
          <View style={[styles.leftContent, styles.title_box]}>
            <Text style={[styles.title]}>{name}</Text>
            <Text style={[styles.percentagem]}>{goal}</Text>
          </View>

          <View style={[styles.rightContent, styles.description_box]}>
            <Text style={[styles.progresso]}>Ultíma Entrada: {ultimaEntrada}MT</Text>
            <Box sx={{ flexGrow: 1 }}>
              <br></br>
              <BorderLinearProgress valueBuffer={2} color='primary' variant="determinate" value={50} />

            </Box>
          </View>
        </View>

      </TouchableOpacity>



    </View>

  );
}
const styles = StyleSheet.create({
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

export default PlanoPoupanca;
