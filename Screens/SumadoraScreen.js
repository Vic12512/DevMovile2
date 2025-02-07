import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from '../styles/styles';

export default function SumadoraScreen() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [resultado, setResultado] = useState('Ingrese dos Números');

  const sumar = () => {
    const suma = parseInt(num1) + parseInt(num2);
    setResultado(`Resultado: ${suma}`);
    setNum1 ('');
    setNum2 ('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sumadora</Text>
      <Text style={styles.text}>{resultado}</Text>
      <View style={styles.textInputContainer}>
        <TextInput 
          style={styles.textInputS} 
          keyboardType="numeric" 
          onChangeText={text => setNum1(text)}
          value={num1}
        />
        <Text style={styles.text}>+</Text>
        <TextInput 
          style={styles.textInputS} 
          keyboardType="numeric" 
          onChangeText={text => setNum2(text)}
          value={num2}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={sumar}>
        <Text style={styles.buttontext}>Calcular</Text>
      </TouchableOpacity>
    </View>
  );
}
