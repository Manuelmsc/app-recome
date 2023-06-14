//  ./App.js

import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import BottomTabNavigator from "./navigation/TabNavigator";
//import DrawerNavigator from "./navigation/DrawerNavigator";


 const App = () => {
  return (
    <NavigationContainer>
      {/* <DrawerNavigator/>  */}
      <BottomTabNavigator />
    </NavigationContainer>
  );
}
export default App