// ./navigation/DrawerNavigator.js

import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { ContactStackNavigator } from "./StackNavigator";
import TabNavigator from "./TabNavigator";
import RecetaScreen from "../screens/Receta/Receta"
import NotaScreen from "../screens/Nota/Nota"

const Drawer = createDrawerNavigator();


export function DrawerNavigator ()  {
  return (
    <Drawer.Navigator >
        <Drawer.Screen name="NotaScreen" component={NotaScreen} />
        <Drawer.Screen name="RecetaScreen" component={RecetaScreen} />
      </Drawer.Navigator>
  );
}

export default DrawerNavigator;