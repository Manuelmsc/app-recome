import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default function NotaDetail({ route, navigation }) {
  const { item } = route.params;

  const [notamedicas, setNota] = useState({
    nombrepaciente: item.nombrepaciente,
    nombremedico: item.nombremedico,
    frcuenciacardiaca: item.frcuenciacardiaca,
    frecuenciarespiratoria: item.frecuenciarespiratoria,
    talla: String(item.talla),
    peso: String(item.peso),
    temperatura: String(item.temperatura),
    diagnostico: item.diagnostico,
  });

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

  const updateData = () => {
    var myHeaders = new Headers();

    // myHeaders.append(
    //   "Authorization",
    //   "Bearer 62ddfa7559d5fdec64517e3ab70ee4fd60b2244e71fa042a44f914f8fa688263"
    // );
    myHeaders.append("Content-Type", "application/json");
    fetch("http://192.168.1.111:3000/notamedicas/" + item.idNota, {
        method: "PATCH",
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
          response.text();
          navigation.push("Nota");
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
          fetch("http://192.168.1.111:3000/notamedicas/" + item.idNota, {
            method: "DELETE",
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
              response.text();
              navigation.push("Nota");
            })
            .then((result) => console.log(result))
            .catch((error) => console.log(error));
        };
        return (
          <ScrollView style={styles.container}>
            <Text style={styles.titulo}>Ingrese los datos a Actualizar</Text>
            <TextInput
              placeholder={"Nombre Paciente"}
              onChangeText={(value) => onChangeNombrePN(value)}
              style={styles.input}
              value={notamedicas.nombrepaciente}
            />
            <TextInput
              placeholder={"Nombre Medico"}
              onChangeText={(value) => onChangeNombreMN(value)}
              style={styles.input}
              value={notamedicas.nombremedico}
            />
            <TextInput
              placeholder={"Frecuencia Cardiaca"}
              onChangeText={(value) => onChangeFCN(value)}
              style={styles.input}
              value={notamedicas.frcuenciacardiaca}
            />
            <TextInput
              placeholder={"Frecuencia Repiratoria"}
              onChangeText={(value) => onChangeFRN(value)}
              style={styles.input}
              value={notamedicas.frecuenciarespiratoria}
            />
            <TextInput
              placeholder={"Talla"}
              onChangeText={(value) => onChangeTallaN(value)}
              style={styles.input}
              value={String(notamedicas.talla)}
            />
            <TextInput
              placeholder={"Peso"}
              onChangeText={(value) => onChangePesoN(value)}
              style={styles.input}
              value={String(notamedicas.peso)}
            />
            <TextInput
              placeholder={"Temperatura"}
              onChangeText={(value) => onChangeTemperaturaN(value)}
              style={styles.input}
              value={String(notamedicas.temperatura)}
            />
            <TextInput
            
              placeholder={"Diagnostico Principal"}
              onChangeText={(value) => onChangeDiagnosticoN(value)}
              style={styles.input}
              value={notamedicas.diagnostico}
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