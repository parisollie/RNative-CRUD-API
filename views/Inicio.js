import React from "react";
import { Text, FlatList, View } from 'react-native';


//paso 1.4 creamos el componente inicio
const Inicio = () => {
    return(
        <Text>Hola Juan pablo</Text>
    );
}

export default Inicio



// import React, { useEffect, useState } from 'react';
// import { Text, FlatList, View } from 'react-native';
// import axios from 'axios';
// import { List, Headline, Button, FAB } from 'react-native-paper';
// import globalStyles from '../styles/global'

// const Inicio = ({navigation}) => {

//     //Vid 259,state de la app
//     const [ clientes, guardarClientes ] = useState([]);
//     //Vid 262
//     const [ consultarAPI, guardarConsultarAPI] = useState(true);

//     //Vid 259,
//     useEffect(() => {
//         const obtenerClientesApi = async () => {
//             try {
//                 //const resultado = await axios.get('http://localhost:3000/clientes');
//                 //Vid 259,Obtenemos los datos del json con get
//                 const resultado = await axios.get('http://192.168.0.11:3000/clientes');
//                 guardarClientes(resultado.data)
//                 //Vid 262
//                 guardarConsultarAPI(false);
//             } catch (error) {
//                 console.log(error);
//             }
//         }

//         //Vid 262, si la api esta como true ejecuta 
//         if(consultarAPI) {
//             obtenerClientesApi();
            
//         }
//     }, [consultarAPI]);//le pasamos la dependencia [consultarAPI] y cada vez que cambie el valor el
//     //use effect se estara ejecutando.


//     return ( 
//         <View style={globalStyles.contenedor}>

//             <Button icon="plus-circle" onPress={() => navigation.navigate("NuevoCliente", { guardarConsultarAPI }) }>
//                 Nuevo Cliente
//             </Button>

//             <Headline style={globalStyles.titulo}> { clientes.length > 0 ? "Clientes" : "Aún no hay Clientes" } </Headline>

//             <FlatList
//                 //Vid 260,usamos el flat 
//                 data={clientes}
//                 keyExtractor={ cliente => (cliente.id).toString()  }
//                 renderItem={ ({item}) => (//item la nombra flatlist
//                     <List.Item
//                     //Vid 260, ponemos la informaion que obtuvimos 
//                         title={item.nombre}
//                         description={item.empresa}
//                         //Vid 263, le pasamos todos los detalles.
//                         onPress={ () => navigation.navigate("DetallesCliente", { item, guardarConsultarAPI }) }
//                     />
//                 )}
//             />

//             <FAB
//                 //Vid 262
//                 icon="plus"
//                 style={globalStyles.fab}
//                 onPress={() => navigation.navigate("NuevoCliente", { guardarConsultarAPI }) }
//             />
//         </View>
//      );
// }

 
// export default Inicio;