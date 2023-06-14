 //./screens/Home.js
import React from "react";
import { View, Text,Image, StyleSheet} from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Button } from '@rneui/themed';




const Tab = createBottomTabNavigator();

export default function HomeScreen({ navigation }) {

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
    
    <View style={{top: -90}}>
    <Text style={styles.titulo}>Registro de Consulta Medica</Text>
    
        <Button title="NOTA MEDICA"                
                  icon={
                    <Image
                      source={require('../assets/nota.png')}
                      style={{ width: '22%', height: '150%', left:-10 }}
                    />}
                  iconContainerStyle={{ marginRight: 10 }}
                  titleStyle={{ fontWeight: '700',left: -1 }}
                  buttonStyle={{
                    backgroundColor: 'rgba(90, 154, 230, 1)',
                    borderColor: 'transparent',
                    borderWidth: 0,
                    borderRadius: 30,
                  }}
                  containerStyle={{
                    width: 190,
                    marginHorizontal: 90,
                    marginVertical: 0,
                  }} onPress={() => navigation.navigate("NotaTab")}
                />
    </View>       
    <View  style={{top: -70}}>
        <Button title="RECETA"
                   icon={
                    <Image
                      source={require('../assets/receta.png')}
                      style={{ width: '22%', height: '150%',left:-30 }}
                    />}
                  iconContainerStyle={{ marginRight: 10 }}
                  titleStyle={{ fontWeight: '700' ,left: -18}}
                  buttonStyle={{
                    backgroundColor: 'rgba(90, 154, 230, 1)',
                    borderColor: 'transparent',
                    borderWidth: 0,
                    borderRadius: 30,
                  }}
                  containerStyle={{
                    width: 190,
                    marginHorizontal: 40,
                    marginVertical: 0,
                  }} onPress={() => navigation.navigate("RecetaTab")}
          />
    </View>
    <View style={{top: -50}}>
      <Button title="ESTUDIOS"
                 icon={
                  <Image
                    source={require('../assets/observacion.png')}
                    style={{ width: '22%', height: '150%',left:-22 }}
                  />}
                iconContainerStyle={{ marginRight: 10 }}
                titleStyle={{ fontWeight: '700',left: -13 }}
                buttonStyle={{
                  backgroundColor: 'rgba(90, 154, 230, 1)',
                  borderColor: 'transparent',
                  borderWidth: 0,
                  borderRadius: 30,
                }}
                containerStyle={{
                  width: 190,
                  marginHorizontal: 40,
                  marginVertical: 0,
                }} onPress={() => navigation.navigate("EstudioTab")}
        />
    </View>
    <View style={{top: -30}}>
        <Button title="USUARIOS"
                   icon={
                    <Image
                      source={require('../assets/cita.png')}
                      style={{ width: '22%', height: '150%',left:-12 }}
                    />}
                  iconContainerStyle={{ marginRight: 10 }}
                  titleStyle={{ fontWeight: '700',left: -2 }}
                  buttonStyle={{
                    backgroundColor: 'rgba(90, 154, 230, 1)',
                    borderColor: 'transparent',
                    borderWidth: 0,
                    borderRadius: 30,
                  }}
                  containerStyle={{
                    width: 190,
                    marginHorizontal: 40,
                    marginVertical: 0,
                  }} onPress={() => navigation.navigate("UsuarioTab")}
            />
    </View>
    <View style={{top: -10}}>
        <Button title="INFORMACION"
                   icon={
                    <Image
                      source={require('../assets/buscar.png')}
                      style={{ width: '22%', height: '150%',left:-10 }}
                    />}
                  iconContainerStyle={{ marginRight: 10 }}
                  titleStyle={{ fontWeight: '700' ,left: -0 }}
                  buttonStyle={{
                    backgroundColor: 'rgba(90, 154, 230, 1)',
                    borderColor: 'transparent',
                    borderWidth: 0,
                    borderRadius: 30,
                  }}
                  containerStyle={{
                    width: 190,
                    marginHorizontal: 40,
                    marginVertical: 0,
                  }} onPress={() => navigation.navigate("InformacionTab")}
              /> 
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
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