import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import axios from 'axios';
import { List, Headline, Button, FAB } from 'react-native-paper';
import globalStyles from '../styles/global'


//paso 1.4 creamos el componente inicio
//Paso 1.48, usamos navigation
const Inicio = ({navigation}) => {

    //paso 1.38,state de la app
    const [ clientes, guardarClientes ] = useState([]);
    //V-262,paso 1.44
    const [ consultarAPI, guardarConsultarAPI] = useState(true);

    //paso 1.35
    useEffect(() => {
        //paso 1.36
        const obtenerClientesApi = async () => {
            try {
                /*Ios
                const resultado = await axios.get('http://localhost:3000/clientes');*/
                //Paso 1.37,Obtenemos los datos del json con get
                const resultado = await axios.get('http://192.168.0.55:3000//clientes');
                //paso 1.39
                guardarClientes(resultado.data)
                //Paso 1.49
                guardarConsultarAPI(false);
            } catch (error) {
                console.log(error);
            }
        }
        //V-262,paso 1.45 si la api esta como true ejecuta 
        if(consultarAPI) {
            obtenerClientesApi();    
        }
        /*le pasamos la dependencia [consultarAPI] y cada vez que cambie el valor el
        use effect se estara ejecutando.*/
    }, [consultarAPI]);


    return (
        //Paso 1.40 
        <View style={globalStyles.contenedor}>

            {/*Paso 1.46 */}
            <Button 
                icon="plus-circle" 
                onPress={() => navigation.navigate("NuevoCliente", 
                { guardarConsultarAPI }) }
            >
                Nuevo Cliente
            </Button>

            {/*V-261 Paso 1.44,codigo ternario sino hay  clientes. */}
            <Headline style={globalStyles.titulo}> { clientes.length > 0 ? "Clientes" : "Aún no hay Clientes" } </Headline>

            <FlatList
                //V-260,paso 1.41 usamos el flat 
                data={clientes}
                keyExtractor={ cliente => (cliente.id).toString()  }
                renderItem={ ({item}) => (//item la nombra flatlist
                    <List.Item
                        //Paso 1.42,ponemos la informaion que obtuvimos 
                        title={item.nombre}
                        description={item.empresa}
                        //V-263,Paso 2.0,para al momento de dar click nos muestra la informacon del cliente
                        onPress={ () => navigation.navigate("DetallesCliente", { item, guardarConsultarAPI }) }
                    />
                )}
            />
             {/*//V-262,paso 1.50*/}
            <FAB
                icon="plus"
                style={globalStyles.fab}
                onPress={() => navigation.navigate("NuevoCliente", { guardarConsultarAPI }) }
            />
            
        </View>
     );
}

 
export default Inicio;




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