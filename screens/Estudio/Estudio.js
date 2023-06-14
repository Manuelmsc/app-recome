import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";

export default function Estudio({navigation}) {
  const [estudios, setEstudio] = useState();

  const getEstudioData = async () => {
    try {
      //   const headers = { "Content-Type": "application/json" };
      let response = await fetch("http://192.168.1.111:3000/estudios");
      let data = await response.json();
      setEstudio(data);
    } catch (error) {
      console.error(error);
    }
  };

  useState(() => {
    getEstudioData();
  }, []);

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("EstudioDetail", {
            item: item,
          })
        }
      >
        <View style={styles.item}>
          <Text style={styles.title}>{item.nombrepaciente}</Text>
          <Text>Nombre Medico: {item.nombremedico}</Text>
          <Text>Descripcion Estudios: {item.descripcion}</Text>
          <Text>Diagnosticos: {item.diagnostico}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={estudios}
        renderItem={renderItem}
        keyExtractor={(item) => item.idestudio}
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
