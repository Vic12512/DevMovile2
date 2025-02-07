import React from 'react';
import { View, Text } from 'react-native';
import { WebView } from 'react-native-webview';
import styles from '../styles/styles';

export default function ExperienciaScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Experiencia Personal</Text>
      <WebView 
        style={styles.webView}
        source={{ uri: 'https://youtu.be/a6_6mDDTE3g' }}
      />
    </View>
  );
}
