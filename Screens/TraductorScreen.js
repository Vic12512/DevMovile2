import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from '../styles/styles';

const unidades = ["","uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve"];
  const decenas = ["diez", "once", "doce", "trece", "catorce", "quince", "deciséis", "diecisiete", "dieciocho", "diecinueve"];
  const decimas = ["","diez", "veinte", "treinta", "cuarenta", "cincuenta", "sesenta", "setenta", "ochenta", "noventa"];
  const cientos = ["","cien", "doscientos", "trescientos", "cuatrocientos", "quinientos", "seiscientos", "setecientos", "ochocientos", "novecientos"];

const numeroALetras = (num) => {
  if (num === 0) return "cero";
  if (num > 1000) return "Número fuera de rango";
  return  convertir(num).trim();
}

const convertir = (num) => {
  if (num < 10) return unidades[num];
  if (num < 20) return decenas[num -10];
  if (num < 100) return `${decimas[Math.floor(num / 10)]} ${num % 10 === 0 ? '' : ' y ' + unidades[num % 10]}`
  if (num < 200) return `${num > 100  ? 'cieto' : '' } ${convertir(num % 100)}`
  if (num < 1000) return `${cientos[Math.floor(num / 100)]} ${convertir(num % 100)}`
};

export default function TraductorScreen() {
  const [numero, setNumero] = useState('');
  const [letras, setLetras] = useState('Ingrese un Número');

  const traducir = () => {
    const num = parseInt(numero);
    setLetras(`Traducción: ${numeroALetras(num)}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Traductor de Números a Letras</Text>
      <Text style={styles.text}>{letras}</Text>
      <View style={styles.textInputContainer}>
        <TextInput 
          style={styles.textInputM} 
          keyboardType="numeric" 
          onChangeText={text => setNumero(text)}
          value={numero}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={traducir}>
        <Text style={styles.buttontext}>Traducir</Text>
      </TouchableOpacity>
    </View>
  );
}
