import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";



import Constants from "expo-constants";

export default function Estudio({navigation}) {

  const [estudios, setEstudio] = useState({
    nombrepaciente: "",
    nombremedico: " ",
    descripcion: " ",
    diagnostico:" "
  });
  const [loading, setLoading] = useState(false);

  const onChangeNombrePE = (value) => {
    setEstudio({ ...estudios, nombrepaciente: value });
  };
  const onChangeNombreME = (value) => {
      setEstudio({ ...estudios, nombremedico: value });
    };
  const onChangeDescripcionE = (value) => {
      setEstudio({ ...estudios, descripcion: value });
    };
  const onChangeDiagnosticoE = (value) => {
      setEstudio({ ...estudios, diagnostico: value });
    };


    const saveData = () => {
      setLoading(true);
      var myHeaders = new Headers();
      console.log(estudios);
  
      // myHeaders.append(
      //   "Authorization",
      //   "Bearer 62ddfa7559d5fdec64517e3ab70ee4fd60b2244e71fa042a44f914f8fa688263"
      // );
  
      myHeaders.append("Content-Type", "application/json");

      fetch("http://192.168.1.111:3000/estudios", {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify({
          nombrepaciente: estudios.nombrepaciente,
          nombremedico: estudios.nombremedico,
          descripcion: estudios.descripcion,
          diagnostico: estudios.diagnostico,
        }),
      })
        .then((response) => {
          setLoading(false);
          response.text();
        })
        .then((result) => {
          console.log("Result");
          navigation.push("Estudio");
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
        onChangeText={(value) => onChangeNombrePE(value)}
        style={styles.input}
      />
      <TextInput
        placeholder={"Nombre Medico"}
        onChangeText={(value) => onChangeNombreME(value)}
        style={styles.input}
      />
      <TextInput
        placeholder={"Descripcion Estudios"}
        onChangeText={(value) => onChangeDescripcionE(value)}
        style={styles.input}
      />
      <TextInput
        placeholder={"Diagnostico"}
        onChangeText={(value) => onChangeDiagnosticoE(value)}
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
    height: 55,
    borderWidth: 4,
    borderColor: "#ccc",
    padding: 12,
    marginVertical: 8,
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