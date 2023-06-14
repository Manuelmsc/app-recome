import React from 'react'
import { Text, Card} from '@rneui/themed';
import { View} from "react-native";
import { StatusBar } from "expo-status-bar";

export default function Informacion() {
  return (
    <View>
      <StatusBar style="auto" />
      <Card>
          <Card.Title>ALIMENTACION</Card.Title>
          <Card.Divider />
          <Card.Image
            style={{ padding: 0 }}
            source={{
              uri:
                'https://www.bbva.ch/wp-content/uploads/2021/07/recurso_-tipos-de-alimentacion.jpg',
            }}
          />
          <Text style={{ marginBottom: 10 }}>
            Mejora tus habitos alimenticios los cuales ayudan a la mejora de  tu salud y tu cuerpo
          </Text>
        </Card>
    <Card>
          <Card.Title>EJERCICIO DIARIO</Card.Title>
          <Card.Divider />
          <Card.Image
            style={{ padding: 0 }}
            source={{
              uri:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCmLF7RlbEQG5Wqps4bMCaB4LR0iiq6RrIYQ&usqp=CAU',
            }}
          />
          <Text style={{ marginBottom: 10 }}>
            Ejercitar tu cuerpo te ayuda en un amejora de tu cuerpo ademas de tu sueño etc.. 
          </Text>
      </Card>
    </View>
  );
}
