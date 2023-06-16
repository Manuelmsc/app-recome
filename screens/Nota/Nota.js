import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useIsFocused } from '@react-navigation/native';

export default function Nota({navigation}) {
  const [notamedicas, setNota] = useState();
  const isFocused = useIsFocused();

  const getNotaData = async () => {
    try {
      //   const headers = { "Content-Type": "application/json" };
      let response = await fetch("http://192.168.100.5:3000/notamedicas");
      let data = await response.json();
      setNota(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (isFocused) {
      getNotaData()
    }
  }, [isFocused]);

  // useState(() => {
  //   getNotaData();
  // }, []);

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("NotaDetail", {
            item: item,
          })
        }
      >
        <View style={styles.item}>
          <Text style={styles.title}>{item.nombrepaciente}</Text>
          <Text>Nombre Medico: {item.nombremedico}</Text>
          <Text>Frecuencia Cardiaca: {item.frcuenciacardiaca}</Text>
          <Text>Frecuencia Respiratoria: {item.frecuenciarespiratoria}</Text>
          <Text>Talla: {item.talla}</Text>
          <Text>Peso: {item.peso}</Text>
          <Text>Temperatura: {item.temperatura}</Text>
          <Text>Diagnostico: {item.diagnostico}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={notamedicas}
        renderItem={renderItem}
        keyExtractor={(item) => item.idNota}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  item: {
    width: 400,
    padding: 5,
    marginVertical: 8,
    marginHorizontal: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#30A2FF",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 12,
    color: "#ccc",
  },
});
