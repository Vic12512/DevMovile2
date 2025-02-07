import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './Screens/HomeScreen.js';
import SumadoraScreen from './Screens/SumadoraScreen.js';
import TraductorScreen from './Screens/TraductorScreen.js';
import TablaMultiplicarScreen from './Screens/TablaMultiplicarScreen.js';
import ExperienciaScreen from './Screens/ExperienciaScreen.js';

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator initialRouteName="Página Inicial">
        <Drawer.Screen name="Página Inicial" component={HomeScreen} />
        <Drawer.Screen name="Sumadora" component={SumadoraScreen} />
        <Drawer.Screen name="Traductor de Números a Letras" component={TraductorScreen} />
        <Drawer.Screen name="Tabla de Multiplicar" component={TablaMultiplicarScreen} />
        <Drawer.Screen name="Experiencia Personal" component={ExperienciaScreen} />
    </Drawer.Navigator>
  );
}

export default function DrawerNavigator() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}
