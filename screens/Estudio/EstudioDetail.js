import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";


export default function EstudioDetail({ route, navigation }) {
  const { item } = route.params;

  const [estudios, setEstudio] = useState({
    nombrepaciente: item.nombrepaciente,
    nombremedico: item.nombremedico,
    descripcion: item.descripcion,
    diagnostico: item.diagnostico,
  });

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

  const updateData = () => {
    var myHeaders = new Headers();

    // myHeaders.append(
    //   "Authorization",
    //   "Bearer 62ddfa7559d5fdec64517e3ab70ee4fd60b2244e71fa042a44f914f8fa688263"
    // );
    myHeaders.append("Content-Type", "application/json");

    fetch("http://192.168.1.111:3000/estudios/" + item.idestudio, {
      method: "PATCH",
      headers: myHeaders,
      body: JSON.stringify({
        nombrepaciente: estudios.nombrepaciente,
        nombremedico: estudios.nombremedico,
        descripcion: estudios.descripcion,
        diagnostico: estudios.diagnostico,
      }),
    })
      .then((response) => {
        response.text();
        navigation.push("Estudio");
      })
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };
  const deleteData = () => {
    var myHeaders = new Headers();

    // myHeaders.append(
    //   "Authorization",
    //   "Bearer 62ddfa7559d5fdec64517e3ab70ee4fd60b2244e71fa042a44f914f8fa688263"
    // );

    myHeaders.append("Content-Type", "application/json");

    fetch("http://192.168.1.111:3000/estudios/" + item.idestudio, {
      method: "DELETE",
      headers: myHeaders,
      body: JSON.stringify({
        nombrepaciente: estudios.nombrepaciente,
        nombremedico: estudios.nombremedico,
        descripcion: estudios.descripcion,
        diagnostico: estudios.diagnostico,
      }),
    })
      .then((response) => {
        response.text();
        navigation.push("Estudio");
      })
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>Ingrese los datos a Actualizar</Text>
      <TextInput
        placeholder={"Nombre Paciente"}
        onChangeText={(value) => onChangeNombrePE(value)}
        style={styles.input}
        value={estudios.nombrepaciente}
      />
      <TextInput
        placeholder={"Nombre Medico"}
        onChangeText={(value) => onChangeNombreME(value)}
        style={styles.input}
        value={estudios.nombremedico}
      />
      <TextInput
        placeholder={"Diagnostico Estudios"}
        onChangeText={(value) => onChangeDescripcionE(value)}
        style={styles.input}
        value={estudios.descripcion}
      />
      <TextInput
        placeholder={"Descripcion Estudios"}
        onChangeText={(value) => onChangeDiagnosticoE(value)}
        style={styles.input}
        value={estudios.diagnostico}
      />

      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity onPress={updateData}>
          <View style={{ backgroundColor: "blue", padding: 10 }}>
            <Text style={{ color: "white", textAlign: "center" }}>
              Guardar cambios
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={deleteData}>
          <View style={{ backgroundColor: "red", padding: 10 }}>
            <Text style={{ color: "white", textAlign: "center" }}>Borrar</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 15,
    backgroundColor: "#fff",
  },
  input: {
    height: 55,
    borderWidth: 4,
    borderColor: "#ccc",
    padding: 10,
    marginVertical: 6,
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