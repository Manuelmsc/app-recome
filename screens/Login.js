 //./screens/Login.js
 import { View, Text, StyleSheet, TextInput, TouchableOpacity,Image} from 'react-native'
 import React,{useState}from 'react'
import { Button } from 'react-native-paper';


  
const Login = ({ navigation }) => {

  const [nom, setNombre] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [usuario, setUsuario] = useState([]);

  const getUsuarioData = async () => {
    try {
      const response = await fetch("http://192.168.1.111:3000/usuarios");
      const data = await response.json();
      console.log(data);
      setUsuario(data);
    } catch (error) {
      Alert.alert('Aviso', 'No es posible conectar.');
      console.log('b');
      console.error(error);
    }
  };

  useState(() => {
    getUsuarioData();
  }, []);


  const handleSubmit = () => {
    // Validar correo y contraseña
    const persona = usuario.find((usuario) => usuario.nombre === nom && usuario.contrasena === password);
  if (persona) {
    navigation.navigate("HomeTab");
  } else {
    setError('Correo o contraseña incorrectos');
  }
  };
   return (
     <View style={styles.container}>
        {/* <Image source={require('../assets/RegistroConsultaMedica.png')} style={styles.imagen} />  */}

        <Text style={styles.titulo}>Registro de Consulta Medica</Text>
        <Text style={styles.subtitulo1}>¡Bienvenido!</Text>
        <Text style={styles.subtitulo2}>Ingresa tus credenciales</Text>
        <TextInput
          style={styles.textInput}
          placeholder='Usuario'
           value={nom}
          onChangeText={setNombre}
        />
        <TextInput
          style={styles.textInput}
          placeholder='Contraseña'
          secureTextEntry={true}
          value={password}
           onChangeText={setPassword}
        />
        <TouchableOpacity onPress={() => handleSubmit(navigation)}> 
          <View style={{ backgroundColor: "blue", padding: 10 }}>
          <Text style={{ color: "white", textAlign: "center"}}>
          Inicio
          </Text>
        </View>
      </TouchableOpacity>
     </View>
   )
 }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 40,
    textAlign: 'center',
    color: '#000',
    marginBottom: 25,
    fontWeight: 'bold',
    borderRadius: 10,
    marginBottom: 20,
  },
  subtitulo1: {
    fontSize: 30,
    color: '#34434D',
    marginBottom: 1,
    fontWeight: 'bold',
    borderRadius: 10,
    marginBottom: 20,
  },
  subtitulo2: {
    fontSize: 20,
    marginBottom: 5,
    color: 'gray',
  },
  buttonText: {
    fontSize: 18,
    color: '#000',
    textDecorationLine: 'underline',
    marginTop: 10,
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    fontSize: 18,
    paddingStart: 30,
    width: '80%',
    height: 50,
    marginTop: 20,
    borderRadius: 30,
    backgroundColor: '#fff',
  },
  imagen: {
    width: 350,
    height: 280,
    resizeMode: 'cover',
    //borderRadius: 10,
    marginBottom: 80,
  },
  errorText: {
    color: 'red',
    marginTop: 10,
  },
  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    borderRadius: 20,
  },
  errorText: {
  color: 'red',
  marginTop: 10,
  },
  buttonText2: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    },
    button: {
      width: '40%',
      height: 50,
      borderRadius: 20,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 20,
      borderWidth: 2,
      borderColor: '#fff', // Color del contorno del botón
    },
    buttonText3: {
      fontSize: 18,
      color: '#fff',
      fontWeight: 'bold',
    },
});
   
export default Login;
