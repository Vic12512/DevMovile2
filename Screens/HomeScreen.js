import React from 'react';
import { View, Text, Image, Button} from 'react-native';
import styles from '../styles/styles';

import { WebView } from 'react-native-webview';
import Video from 'react-native-video'

const fotoPerfi = require('../assets/foto.png');

export default function HomeScreen() {
  return (
    <View style={styles.presentationContainer}>
      <Image source={fotoPerfi} style={{width: 225, height: 225, borderRadius: 125}} />
      <Text style={styles.title}>Victor Eliecer Cuevas Rosario</Text>
      <Text style={styles.text}>victoreliecer165@gmail.com</Text>
      <Text style={styles.text}>2022-2096</Text>
    </View>
  );
}