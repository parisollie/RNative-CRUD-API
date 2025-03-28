import React from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { Headline, Text, Subheading, Button, FAB } from 'react-native-paper';
import globalStyles from '../styles/global';
import axios from 'axios';

//Paso 2.1,le ppnemos { navigation, route }
const DetallesCliente = ({ navigation, route }) => {
    //Paso 2.10
    const { guardarConsultarAPI } = route.params;
    //V-264 ,paso 2.2
    const { nombre, telefono, correo, empresa, id } = route.params.item;

    //Paso 2.6
    const mostrarConfirmacion = () => {
        Alert.alert(
            '¿Deseas eliminar este cliente?',
            'Un contacto eliminado no se puede recuperar',
            [
                { text: 'Si, Eliminar', onPress: () => eliminarContacto() },
                { text: 'Cancelar', style: 'cancel' }
            ]
        )
    }

    //Paos 2.6
    const eliminarContacto = async () => {
        //IOs
        // const url = `http://localhost:3000/clientes/${id}`;
        //Android
        const url = `http://192.168.0.55:3000/clientes/${id}`;
        // console.log(url);
        //V-266, paso 2.7
        try {
            //Le pasamos el id a eliminar 
            await axios.delete(url);
        } catch (error) {
            console.log(error);
        }

        //paso 2.8,Redireccionar a inicio despues de eliminar
        navigation.navigate('Inicio');

        //paso 2.9,  volver a consultar la api con los contactos que no se eliminaron.
        guardarConsultarAPI(true);
    }

    return (
        //Paso 2.3, mostrar los detalles del cliente
        <View style={globalStyles.contenedor}>
            <Headline style={globalStyles.titulo}>{nombre}</Headline>
            <Text style={styles.texto}>Empresa: <Subheading>{empresa}</Subheading> </Text>
            <Text style={styles.texto}>Correo: <Subheading>{correo}</Subheading> </Text>
            <Text style={styles.texto}>Teléfono: <Subheading>{telefono}</Subheading> </Text>

            <Button
                //V-265,paso 2.5,ponemos el boton
                style={styles.boton}
                mode="contained"
                icon="cancel"
                onPress={() => mostrarConfirmacion()}
            >
                Eliminar Cliente
            </Button>

            <FAB
                //V-267,paso 2.11 editar cliente 
                icon="pencil"
                style={globalStyles.fab}
                onPress={() => navigation.navigate("NuevoCliente", { cliente: route.params.item, guardarConsultarAPI })}
            />
        </View>
    );
}

//Paso 2.4
const styles = StyleSheet.create({
    texto: {
        marginBottom: 20,
        fontSize: 18,
        backgroundColor: '#e6e9e5',

    },
    boton: {
        marginTop: 100,
        backgroundColor: 'red',

    }
})

export default DetallesCliente;