import 'react-native-gesture-handler';
import React from 'react';
import Inicio from './views/Inicio';
import NuevoCliente from './views/NuevoCliente';
import DetallesCliente from './views/DetallesCliente';
// import {
//   StyleSheet,
// } from 'react-native';

// //Vid 248
// import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

//Vid 245,paso 1.1
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//Paso 1.2 ,Mandamos a llamar a nuestra funcion
const Stack = createStackNavigator();

// //Vid 248 ,Definir el tema de paper 
// const theme = {
//   ...DefaultTheme,
//   colors: {
//     ...DefaultTheme.colors,
//     primary: '#0FB8A8',
//     accent: '#F5F174'
//   }
// }


//Vid 255 envolvemos todo con <PaperProvider>
const App = () => {
  return (
    <>
      {/**Paso 1.3, ponemos el navigatiobContainer */}
      <NavigationContainer>
        <Stack.Navigator
          //Paso 1.7, el componente inicial sera inicio.
          initialRouteName="Inicio"
        >
          <Stack.Screen
            //Paso 1.6
            name="Inicio"
            //El componente que va a cargar será el de inicio.
            component={Inicio}
          />
          <Stack.Screen
            //V-246,paso 1.8
            name="NuevoCliente"
            component={NuevoCliente}
            //Paso 1.9, cambiamos el nombre
            options={{
              title: "Nuevo Cliente"
            }}
          />
          <Stack.Screen
            //Paso 1.9
            name="DetallesCliente"
            component={DetallesCliente}
            options={{
              title: "Detalles Cliente"
            }}
          />

        </Stack.Navigator>
      </NavigationContainer >
      {/* <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator
            //Vid 245, el componente inicials era inicio.
            initialRouteName="Inicio"
            screenOptions={{
              headerStyle: {
                backgroundColor: theme.colors.primary
              },
              headerTintColor: theme.colors.surface,
              headerTitleStyle: {
                fontWeight: 'bold'
              }
            }}
          >
            <Stack.Screen
              //Vid 245
              name="Inicio"
              //El componente que va a cargar será el de inicio.
              component={Inicio}
            />
            <Stack.Screen
              //Vid 246
              name="NuevoCliente"
              component={NuevoCliente}
              options={{
                title: "Nuevo Cliente"
              }}
            />
            <Stack.Screen
              //Vid 246
              name="DetallesCliente"
              component={DetallesCliente}
              options={{
                title: "Detalles Cliente"
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider> */}
    </>
  );
};

//const styles = StyleSheet.create({


//});

export default App;
