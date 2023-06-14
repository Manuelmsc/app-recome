import { } from 'react-native'
import React from 'react'
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Constants from "expo-constants";
import { RadioButton } from 'react-native-paper';




export default function CitaAdd() {


  const [checked, setChecked] = React.useState('first')
  return (
    <View style={styles.container}>
    <TextInput
      placeholder={"Nombre Paciente"}
      onChangeText={(value) => onChangeNombreC(value)}
      style={styles.input}
    />
    <View style={{flexDirection: 'row'}}>
          <RadioButton
            value="first"
            status={ checked === 'first' ? 'checked' : 'unchecked' }
            onPress={() => setChecked('first')}
            onChangeText={(value) => onChangeMaculino(value)}     
          />
          <Text style={{top: 7}}>Masculino</Text>
     </View >
        <View style={{flexDirection: 'row'}}>
            <RadioButton
            value="second"
            status={ checked === 'second' ? 'checked' : 'unchecked' }
            onPress={() => setChecked('second')}
            onChangeText={(value) => onChangeFemenino(value)} 
          />
          <Text style={{top: 7}}>Femenino</Text>
    </View>
    <TextInput
      placeholder={"Edad"}
      onChangeText={(value) => onChangeNombreC(value)}
      style={styles.input}
    />
    <TextInput
      placeholder={"Diagnostico Medico"}
      onChangeText={(value) => onChangeDiagnosticoC(value)}
      style={styles.input}
    />
    {/* <TouchableOpacity onPress={saveData}>
      <View style={{ backgroundColor: "blue", padding: 10 }}>
        <Text style={{ color: "white", textAlign: "center" }}>
          {loading ? "Cargando..." : "Guardar"}
        </Text>
      </View>
    </TouchableOpacity> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    padding: 8,
    margin: 15,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginVertical: 5,
  },
});