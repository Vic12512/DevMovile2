import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';
import styles from '../styles/styles';

export default function TablaMultiplicarScreen() {
  const [multiplicando, setMultiplicando] = useState('');
  const [tabla, setTabla] = useState([]);

  const generarTabla = () => {
    const num = parseInt(multiplicando);
    const nuevaTabla = Array.from({ length: 13 }, (_, i) => ({ factor: i + 1, resultado: (i + 1) * num }));
    setTabla(nuevaTabla);
  };

  return (
    <View style={styles.paginaTabDeMulContainer}>
      <Text style={styles.title}>Tabla de Multiplicar</Text>
      <Text style={styles.text}>Ingrese un Número</Text>
      <View style={styles.textInputContainer}>
        <TextInput 
          style={styles.textInputM} 
          keyboardType="numeric" 
          onChangeText={text => setMultiplicando(text)}
          value={multiplicando}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={generarTabla}>
        <Text style={styles.buttontext}>Multiplicar</Text>
      </TouchableOpacity>
      <FlatList 
        style={styles.lista}
        data={tabla}
        keyExtractor={(item) => item.factor.toString()}
        renderItem={({ item }) => <Text style={styles.listaitem}>{multiplicando} x {item.factor} = {item.resultado}</Text>}
      />
    </View>
  );
}
