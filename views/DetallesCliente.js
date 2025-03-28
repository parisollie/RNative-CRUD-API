import React from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { Headline, Text, Subheading, Button, FAB } from 'react-native-paper';
import globalStyles from '../styles/global';
import axios from 'axios';

//Paso 2.1,le ppnemos { navigation, route }
const DetallesCliente = ({ navigation, route }) => {
    //Vid 266 
    const { guardarConsultarAPI } = route.params;
    //Vid 264 
    const { nombre, telefono, correo, empresa, id } = route.params.item;

    //Vid 265 
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

    //Vid 265 
    const eliminarContacto = async () => {
        //IOs
        // const url = `http://localhost:3000/clientes/${id}`;
        //Android
        const url = `http://192.168.0.55:3000/clientes/${id}`;

        // console.log(url);
        try {
            //Le pasamos el id a eliminar 
            await axios.delete(url);
        } catch (error) {
            console.log(error);
        }

        //Vid 266,Redireccionar
        navigation.navigate('Inicio');

        //Vid 266,  volver a consultar la api
        guardarConsultarAPI(true);
    }

    return (
        <View style={globalStyles.contenedor}>
            <Headline style={globalStyles.titulo}>{nombre}</Headline>
            <Text style={styles.texto}>Empresa: <Subheading>{empresa}</Subheading> </Text>
            <Text style={styles.texto}>Correo: <Subheading>{correo}</Subheading> </Text>
            <Text style={styles.texto}>Teléfono: <Subheading>{telefono}</Subheading> </Text>

            <Button
                //Vid 265
                style={styles.boton}
                mode="contained"
                icon="cancel"
                onPress={() => mostrarConfirmacion()}
            >
                Eliminar Cliente
            </Button>

            <FAB
                //Vid 267, editar cliente 
                icon="pencil"
                style={globalStyles.fab}
                onPress={() => navigation.navigate("NuevoCliente", { cliente: route.params.item, guardarConsultarAPI })}
            />
        </View>
    );
}
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