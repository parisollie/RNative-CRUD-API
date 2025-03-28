import 'react-native-gesture-handler';
import React from 'react';
// import {
//   StyleSheet,
// } from 'react-native';

// //Vid 245
// import Inicio from './views/Inicio';
// //Vid 246
// import NuevoCliente from './views/NuevoCliente';
// import DetallesCliente from './views/DetallesCliente';

// //Vid 248
// import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

// //Vid 245
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

//Vid 245,Mandamos a llamar a nuestra funcion
// const Stack = createStackNavigator();

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
