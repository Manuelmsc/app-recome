import React, { useState , useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useIsFocused } from '@react-navigation/native';

export default function Usuario({navigation}) {
    const [usuarios, setUsuario] = useState();
    const isFocused = useIsFocused();

    const getUsuarioData = async () => {
        try {
          //   const headers = { "Content-Type": "application/json" };
          let response = await fetch("http://192.168.100.5:3000/usuarios");
          let data = await response.json();
          setUsuario(data);
        } catch (error) {
          console.error(error);
        }
      };

      useEffect(() => {
        if (isFocused) {
          getUsuarioData()
        }
      }, [isFocused]);

      // useState(() => {
      //   getUsuarioData();
      // }, []);
    
      const renderItem = ({ item }) => {
        return (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("UsuarioDetail", {
                item: item,
              })
            }
          >
          <View style={styles.item}>
          <Text style={styles.title}>{item.nombre}</Text>
          <Text>contrasena: {item.contrasena}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={usuarios}
        renderItem={renderItem}
        keyExtractor={(item) => item.idUsuario}
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
