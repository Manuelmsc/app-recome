import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";

//Cita StacK Files
import CitaScreen from "../screens/Cita/Cita"
import CitaAddScreen from "../screens/Cita/CitaAdd"
import CitaDetailScreen from "../screens/Cita/CitaDetail"

//Estudio StacK Files
import EstudioScreen from "../screens/Estudio/Estudio"
import EstudioAddScreen from "../screens/Estudio/EstudioAdd"
import EstudioDetailScreen from "../screens/Estudio/EstudioDetail"

//Informacion StacK Files
import InformacionScreen from "../screens/Informacion/Informacion"

//Home StacK Files
import HomeScreen from "../screens/Home"

//Login StacK Files
import LoginScreen from "../screens/Login"

//Usuario StacK Files
import UsuarioScreen from "../screens/Usuario/Usuario"
import UsuarioAddScreen from "../screens/Usuario/UsuarioAdd"
import UsuarioDetailScreen from "../screens/Usuario/UsuarioDetail"


//Nota StacK Files
import NotaScreen from "../screens/Nota/Nota"
import NotaAddScreen from "../screens/Nota/NotaAdd"
import NotaDetailScreen from "../screens/Nota/NotaDetail"


//receta Stack Files
import RecetaScreen from "../screens/Receta/Receta"
import RecetaAddScreen from "../screens/Receta/RecetaAdd"
import RecetaDetailScreen from "../screens/Receta/RecetaDetail"

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#795548",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
};

const MainStackNavigator = () => {
  return(
    <Stack.Screen name="A" 
    component={HomeStackNavigator} 
    options={{ headerShown: false }} />
  );
}

const CitaStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="Cita"
        component={CitaScreen}
        options={({ navigation, route }) => ({
          title: "Lista de Citas",
          headerRight: () => (
            <Ionicons
              name={"ios-add-circle"}
              size={25}
              color={"white"}
              style={{ marginRight: 15 }}
              onPress={() => navigation.navigate("CitaAdd")}
            />
          ),
        })}
      />
      {/* <Stack.Screen name="Cita" component={CitaScreen} /> */}
      <Stack.Screen name="CitaDetail" component={CitaDetailScreen} />
      <Stack.Screen name="CitaAdd" component={CitaAddScreen} />
    </Stack.Navigator>
  );
}

const EstudioStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="Estudio"
        component={EstudioScreen}
        options={({ navigation, route }) => ({
          title: "Lista de Estudios",
          headerRight: () => (
            <Ionicons
              name={"ios-add-circle"}
              size={25}
              color={"white"}
              style={{ marginRight: 15 }}
              onPress={() => navigation.navigate("EstudioAdd")}
            />
          ),
        })}
      />
      {/* <Stack.Screen name="Estudio" component={EstudioScreen} /> */}
      <Stack.Screen name="EstudioDetail" component={EstudioDetailScreen} />
      <Stack.Screen name="EstudioAdd" component={EstudioAddScreen} />
    </Stack.Navigator>
  );
}
const InformacionStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="Informacion"
        component={InformacionScreen}
        options={({ navigation, route }) => ({
          title: " Informacion Medica",
          headerRight: () => (
            <Ionicons
              name={""}
              size={25}
              color={"white"}
              style={{ marginRight: 15 }}
              //onPress={() => navigation.navigate("EstudioAdd")}
            />
          ),
        })}
      />
      {/* <Stack.Screen name="Informacion" component={InformacionScreen} /> */}
    </Stack.Navigator>
  );
}

const LoginStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={({ navigation, route }) => ({
          title: "",
          headerRight: () => (
            <Ionicons
              name={""}
              size={25}
              color={"white"}
              style={{ marginRight: 15 }}
              //onPress={() => navigation.navigate("EstudioAdd")}
            />
          ),
        })}
      />
      {/* <Stack.Screen name="Informacion" component={InformacionScreen} /> */}
    </Stack.Navigator>
  );
}


const HomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation, route }) => ({
          title: "Menu Principal",
          headerRight: () => (
            <Ionicons
              name={"log-in-outline"}
              size={25}
              color={"white"}
              style={{ marginRight: 15 }}
              onPress={() => navigation.navigate("LoginTab")}
            />
          ),
        })}
      />
      {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
    </Stack.Navigator>
  );
}

const NotaStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="Nota"
        component={NotaScreen}
        options={({ navigation, route }) => ({
          title: "Lista de Notas Medicas",
          headerRight: () => (
            <Ionicons
              name={"ios-add-circle"}
              size={25}
              color={"white"}
              style={{ marginRight: 15 }}
              onPress={() => navigation.navigate("NotaAdd")}
            />
          ),
        })}
      />
      {/* <Stack.Screen name="Nota" component={NotaScreen} /> */}
      <Stack.Screen name="NotaDetail" component={NotaDetailScreen} />
      <Stack.Screen name="NotaAdd" component={NotaAddScreen} />
    </Stack.Navigator>
  );
}
const RecetaStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="Receta"
        component={RecetaScreen}
        options={({ navigation, route }) => ({
          title: "Lista de Recetas",
          headerRight: () => (
            <Ionicons
              name={"ios-add-circle"}
              size={25}
              color={"white"}
              style={{ marginRight: 15 }}
              onPress={() => navigation.navigate("RecetaAdd")}
            />
          ),
        })}
      />
      {/* <Stack.Screen name="Receta" component={RecetaScreen} /> */}
      <Stack.Screen name="RecetaDetail" component={RecetaDetailScreen} />
      <Stack.Screen name="RecetaAdd" component={RecetaAddScreen} />
    </Stack.Navigator>
  );
}

const UsuarioStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="Usuario"
        component={UsuarioScreen}
        options={({ navigation, route }) => ({
          title: "Lista de Usuarios",
          headerRight: () => (
            <Ionicons
              name={"ios-add-circle"}
              size={25}
              color={"white"}
              style={{ marginRight: 15 }}
              onPress={() => navigation.navigate("UsuarioAdd")}
            />
          ),
        })}
      />
      {/* <Stack.Screen name="Receta" component={RecetaScreen} /> */}
      <Stack.Screen name="UsuarioDetail" component={UsuarioDetailScreen} />
      <Stack.Screen name="UsuarioAdd" component={UsuarioAddScreen} />
    </Stack.Navigator>
  );
}


export { CitaStackNavigator, EstudioStackNavigator, InformacionStackNavigator,NotaStackNavigator
,RecetaStackNavigator,HomeStackNavigator,LoginStackNavigator,MainStackNavigator,UsuarioStackNavigator };