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


export default function RecetaAdd({navigation}) {
  const [recetas, setReceta] = useState({
    nombrepaciente: "",
    nombremedico: " ",
    descripcionmedica: " ",
    diagnostico:" "
  });
  const [loading, setLoading] = useState(false);
  
  const onChangeNombrePR = (value) => {
    setReceta({ ...recetas, nombrepaciente: value });
  };
  const onChangeNombreMR = (value) => {
      setReceta({ ...recetas, nombremedico: value });
    };
  const onChangeDescripcionMR = (value) => {
      setReceta({ ...recetas, descripcionmedica: value });
    };
  const onChangeDiagnosticoR = (value) => {
      setReceta({ ...recetas, diagnostico: value });
    };
  
    const saveData = () => {
      setLoading(true);
      var myHeaders = new Headers();
      console.log(recetas);
  
      // myHeaders.append(
      //   "Authorization",
      //   "Bearer 62ddfa7559d5fdec64517e3ab70ee4fd60b2244e71fa042a44f914f8fa688263"
      // );
  
      myHeaders.append("Content-Type", "application/json");
  
      

      fetch("http://192.168.100.5:3000/recetas", {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify({
          nombrepaciente: recetas.nombrepaciente,
          nombremedico: recetas.nombremedico,
          descripcionmedica: recetas.descripcionmedica,
          diagnostico: recetas.diagnostico,
        }),
      })
        .then((response) => {
          setLoading(false);
          response.text();
        })
        .then((result) => {
          console.log("Result");
          navigation.push("Receta");
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
        onChangeText={(value) => onChangeNombrePR(value)}
        style={styles.input}
      />
      <TextInput
        placeholder={"Nombre Medico"}
        onChangeText={(value) => onChangeNombreMR(value)}
        style={styles.input}
      />
      <TextInput
        placeholder={"Diagnostico Medico"}
        onChangeText={(value) => onChangeDescripcionMR(value)}
        style={styles.input}
      />
      <TextInput
        placeholder={"Medicamentos"}
        multiline
        numberOfLines={4}
        onChangeText={(value) => onChangeDiagnosticoR(value)}
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
