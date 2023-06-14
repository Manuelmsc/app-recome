import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Constants from "expo-constants";
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from "react-native-gesture-handler";



export default function NotaAdd({navigation}) {

  const [notamedicas, setNota] = useState({
    nombrepaciente: "",
    nombremedico: " ",
    frcuenciacardiaca: " ",
    frecuenciarespiratoria:" ",
    talla: 0,
    peso: 0,
    temperatura: 0,
    diagnostico: " ",
  });
  const [loading, setLoading] = useState(false);

  const onChangeNombrePN = (value) => {
    setNota({ ...notamedicas, nombrepaciente: value });
  };
  const onChangeNombreMN = (value) => {
    setNota({ ...notamedicas, nombremedico: value });
  };
  const onChangeFCN = (value) => {
    setNota({ ...notamedicas, frcuenciacardiaca: value });
  };
  const onChangeFRN = (value) => {
    setNota({ ...notamedicas, frecuenciarespiratoria: value });
  };
  const onChangeTallaN = (value) => {
    setNota({ ...notamedicas, talla: value });
  };
  const onChangePesoN = (value) => {
    setNota({ ...notamedicas, peso: value });
  };
  const onChangeTemperaturaN = (value) => {
    setNota({ ...notamedicas, temperatura: value });
  };
  const onChangeDiagnosticoN = (value) => {
    setNota({ ...notamedicas, diagnostico: value });
  };

  const saveData = () => {
    setLoading(true);
    var myHeaders = new Headers();
    console.log(notamedicas);

    // myHeaders.append(
    //   "Authorization",
    //   "Bearer 62ddfa7559d5fdec64517e3ab70ee4fd60b2244e71fa042a44f914f8fa688263"
    // );

    myHeaders.append("Content-Type", "application/json");

    fetch("http://192.168.1.111:3000/notamedicas", {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify({
          nombrepaciente: notamedicas.nombrepaciente,
          nombremedico: notamedicas.nombremedico,
          frcuenciacardiaca: notamedicas.frcuenciacardiaca,
          frecuenciarespiratoria: notamedicas.frecuenciarespiratoria,
          talla: parseInt(notamedicas.talla),
          peso: parseInt(notamedicas.peso),
          temperatura: parseInt(notamedicas.temperatura),
          diagnostico: notamedicas.diagnostico,
        }),
      })
      .then((response) => {
        setLoading(false);
        response.text();
      })
      .then((result) => {
        console.log("Result");
        navigation.push("Nota");
        console.log(result);
      })
      .catch((error) => {
        console.log("Error");
        console.log(error);
      });
  };
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>Ingrese los datos a Registrar</Text>
      <TextInput
        placeholder={"Nombre Paciente"}
        onChangeText={(value) => onChangeNombrePN(value)}
        style={styles.input}
      />
      <TextInput
        style={styles.input}
        placeholder={"Nombre Medico"}
        onChangeText={(value) => onChangeNombreMN(value)}
        
      />
      <TextInput
        placeholder={"Frecuencia Cardiaca"}
        onChangeText={(value) => onChangeFCN(value)}
        style={styles.input}
      />
      <TextInput
        placeholder={"Frecuencia Repiratoria"}
        onChangeText={(value) => onChangeFRN(value)}
        style={styles.input}
      />
      <TextInput
        placeholder={"Talla"}
        onChangeText={(value) => onChangeTallaN(value)}
        style={styles.input}
      />
      <TextInput
        placeholder={"Peso"}
        onChangeText={(value) => onChangePesoN(value)}
        style={styles.input}
      />
      <TextInput
        placeholder={"Temperatura"}
        onChangeText={(value) => onChangeTemperaturaN(value)}
        style={styles.input}
      />
      <TextInput
      
        placeholder={"Affecion Principal"}
        onChangeText={(value) => onChangeDiagnosticoN(value)}
        style={styles.input}
      />
      <TouchableOpacity onPress={saveData}>
        <View style={{ backgroundColor: "blue", padding: 10 }}>
          <Text style={{ color: "white", textAlign: "center" }}>
            {loading ? "Cargando..." : "Guardar"}
          </Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    padding: 8,
    margin: 15,
  },
  input: {
    height: 45,
    borderWidth: 4,
    borderColor: "#ccc",
    padding: 12,
    marginVertical: 8,
  },
  textInput: {
    borderWidth: 3,
    borderColor: 'gray',
    padding: 10,
    fontSize: 18,
    paddingStart: 30,
    width: '100%',
    height: 50,
    marginTop: 8,
    borderRadius: 30,
    backgroundColor: '#fff',
  },
  titulo: {
    fontSize: 35,
    textAlign: 'center',
    color: '#000',
    marginBottom: 40,
    fontWeight: 'bold',
  },
  subtitulo1: {
    fontSize: 30,
    color: '#34434D',
    marginBottom: 40,
    fontWeight: 'bold',
  },
  subtitulo2: {
    fontSize: 20,
    marginBottom: 5,
    color: 'gray',
  },
});
