import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default function UsuarioDetail({ route, navigation }) {

  const { item } = route.params;

  const [usuarios, setUsuario] = useState({
    nombre: item.nombre,
    contrasena: item.contrasena,
  });

  const onChangeNombreU = (value) => {
    setUsuario({ ...usuarios, nombre: value });
  };
  const onChangeContrasenaU = (value) => {
    setUsuario({ ...usuarios, contrasena: value });
  };

  const updateData = () => {
    var myHeaders = new Headers();

    // myHeaders.append(
    //   "Authorization",
    //   "Bearer 62ddfa7559d5fdec64517e3ab70ee4fd60b2244e71fa042a44f914f8fa688263"
    // );
    myHeaders.append("Content-Type", "application/json");

    fetch("http://192.168.100.5:3000/usuarios/" + item.idUsuario, {
      method: "PATCH",
      headers: myHeaders,
      body: JSON.stringify({
        nombre: usuarios.nombre,
        contrasena: usuarios.contrasena,
      }),
    })
      .then((response) => {
        response.text();
        navigation.push("Usuario");
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

    fetch("http://192.168.100.5:3000/usuarios/" + item.idUsuario, {
      method: "DELETE",
      headers: myHeaders,
      body: JSON.stringify({
        nombre: usuarios.nombre,
        contrasena: usuarios.contrasena,
      }),
    })
      .then((response) => {
        response.text();
        navigation.push("Usuario");
      })
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>Ingrese los datos a Actualizar</Text>
      <TextInput
        placeholder={"Nombre Usuario"}
        onChangeText={(value) => onChangeNombreU(value)}
        style={styles.input}
        value={usuarios.nombre}
      />
      <TextInput
        placeholder={"Contraseña"}
        onChangeText={(value) => onChangeContrasenaU(value)}
        style={styles.input}
        value={usuarios.contrasena}
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
