// ./navigation/TabNavigator.js
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
// import Ionicons from 'react-native-ionicons';
// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
// import { faFileMedical, faPencil, faBook, faHome } from '@fortawesome/free-solid-svg-icons';
// import { StyleSheet, TextInput } from 'react-native';


import { 
  CitaStackNavigator, 
  EstudioStackNavigator, 
  InformacionStackNavigator,
  NotaStackNavigator,
  RecetaStackNavigator,HomeStackNavigator,LoginStackNavigator, MainStackNavigator,UsuarioStackNavigator} from "./StackNavigator";


const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        if (route.name === "NotaTab") {
          iconName = focused ? "clipboard-outline" : "clipboard";
        } else if (route.name === "RecetaTab") {
          iconName = focused ? "medkit" : "medkit";
        } else if (route.name === "EstudioTab") {
          iconName = focused ? "ios-flask-outline" : "ios-flask";
        } /*else if (route.name === "CitaTab") {
          iconName = focused ? "md-calendar-sharp" : "md-calendar";
        }*/else if (route.name === "HomeTab") {
          iconName = focused ? "md-home-outline" : "md-home";
        }else if (route.name === "InformacionTab") {
          iconName = focused ? "ios-information-circle-sharp" : "ios-information";
        }else if (route.name === "LoginTab") {
          iconName = focused ? "home" : "home";
        }else if (route.name === "UsuarioTab") {
          iconName = focused ? "ios-people-sharp" : "ios-people";
        }
        // You can return any component that you like here!
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: "blue",
      tabBarInactiveTintColor: "gray",
    })}
  >
      <Tab.Screen
        name="LoginTab"
        component={LoginStackNavigator}
        options={{
          tabBarLabel: "Login",
          headerShown: false,
          tabBarStyle:{display: "none"}, headerShown:false, tabBarButton: () => null
        }}
      />
    <Tab.Screen
        name="HomeTab"
        component={HomeStackNavigator}
        options={{
          tabBarLabel: "Homes",
          headerShown: false,
          tabBarStyle:{display: "none"}, headerShown:false
        }}
      />
    <Tab.Screen
        name="NotaTab"
        component={NotaStackNavigator}
        options={{
          tabBarLabel: "Notas",
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="RecetaTab"
        component={RecetaStackNavigator}
        options={{
          tabBarLabel: "Recetas",
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="EstudioTab"
        component={EstudioStackNavigator}
        options={{
          tabBarLabel: "Estudios",
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="UsuarioTab"
        component={UsuarioStackNavigator}
        options={{
          tabBarLabel: "Usuarios",
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="InformacionTab"
        component={InformacionStackNavigator}
        options={{
          tabBarLabel: "Informacion",
          headerShown: false,
        }}
      />
      {/* <Tab.Screen
        name="CitaTab"
        component={CitaStackNavigator}
        options={{
          tabBarLabel: "Citas",
          headerShown: false,
        }}
      /> */}
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;

