import react from "react";
import Navigation from "./Navigation";

export default function App(){
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Bienvenido!</Text>
      <Text style={styles.subtitulo}>Inicia  sesion con tu cuenta.</Text>
      <TextInput 
        placeholder='Usuario'
        style={styles.input}
      />

      <TextInput 
        placeholder='Contraseña'
        style={styles.input}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
        }}
      >
        <Text style={styles.buttonText}>Iniciar Sesión</Text>
      </TouchableOpacity>

      <Text></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 60,
    color: '#567FFF',
    fontWeight: 'bold',
  },
  subtitulo: {
    fontSize: 20,
    color: 'gray',
  },
  input: {
    borderWidth: 1,
    paddingStart: 30,
    padding: 10,
    width: '80%',
    height: 50,
    marginTop: 20,
    borderRadius: 30,
    backgroundColor: '#f1f1f1',
  },
  button: {
    backgroundColor: '#567FFF',
    padding: 15,
    marginTop: 20,
    borderRadius: 30,
    width:'45%',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
