import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import { TextInput, Headline, Button, Paragraph, Dialog, Portal } from 'react-native-paper';
import axios from 'axios';
import globalStyles from '../styles/global';

//V-258,Paso 1.39, ponemos {navigation, route}
const NuevoCliente = ({ navigation, route }) => {

    //V-253,paso 1.23 campos formulario
    const [nombre, guardarNombre] = useState('');
    const [telefono, guardarTelefono] = useState('');
    const [correo, guardarCorreo] = useState('');
    const [empresa, guardarEmpresa] = useState('');
    //V-256 
    const [alerta, guardarAlerta] = useState(false);


    //V-267,paso 2.12 detectar si estamos editando o no
    useEffect(() => {
        if (route.params.cliente) {
            //lleando los campos 
            const { nombre, telefono, correo, empresa } = route.params.cliente;
            guardarNombre(nombre);
            guardarTelefono(telefono);
            guardarCorreo(correo);
            guardarEmpresa(empresa);
        }
    }, []);

    //V-254,paso 1.27,almacena el cliente en la BD
    const guardarCliente = async () => {
        // Validar, si el cliente no esta vacio
        if (nombre === '' || telefono === '' || correo === '' || empresa === '') {
            guardarAlerta(true)
            return;
        }

        //Paso 1.33, generar el cliente
        const cliente = { nombre, telefono, empresa, correo };
        console.log(cliente);

        //V-268,paso 2.13 Si estamos editando o creando un nuevo cliente
        if (route.params.cliente) {
            const { id } = route.params.cliente;
            //requerimos el id para editar.
            cliente.id = id;
            //const url = `http://localhost:3000/clientes/${id}`;
            const url = `http://192.168.0.55:3000/clientes/${id}`;

            try {
                //Ponemos put con axios para actualizar.
                await axios.put(url, cliente);
            } catch (error) {

                console.log(error);
            }

        } else {

            //V-257 paso 1.34,guardar el cliente en la API por primera vez.
            try {
                //Vis 257
                if (Platform.OS === 'ios') {
                    await axios.post('http://localhost:3000/clientes', cliente)
                } else {
                    await axios.post('http://192.168.0.55:3000/clientes', cliente);
                }
            } catch (error) {
                console.log(error);
            }
        }

        //V-258,paso 1.40 redireccionar
        navigation.navigate('Inicio');

        //paso 1.41,limpiar el formulario (opcional)
        guardarNombre('');
        guardarTelefono('');
        guardarCorreo('');
        guardarEmpresa('');

        //V-262,cambiar a true para traernos el nuevo cliente
        guardarConsultarAPI(true);
    }

    return (
        //V-251,Paso 1.19
        <View style={globalStyles.contenedor}>
            <Headline style={globalStyles.titulo}>Añadir Nuevo Cliente</Headline>

            <TextInput
                //V-252 ,paso 1.20
                label="Nombre"
                placeholder="Juan"
                //paso 1.24,le ponemos la propiedad para escribir
                onChangeText={texto => guardarNombre(texto)}
                //paso 1.25,les ponemos el nombre que le corresponde a cada uno, para despues resetar
                value={nombre}
                style={styles.input}
            />
            <TextInput
                label="Teléfono"
                placeholder="13131414"
                onChangeText={texto => guardarTelefono(texto)}
                // value={telefono}
                style={styles.input}
            />
            <TextInput
                label="Correo"
                placeholder="correo@correo.com"
                onChangeText={texto => guardarCorreo(texto)}
                value={correo}
                style={styles.input}
            />
            <TextInput
                label="Empresa"
                placeholder="Nombre Empresa"
                onChangeText={texto => guardarEmpresa(texto)}
                value={empresa}
                style={styles.input}
            />
            {/*V-254 Paso 1.26 */}
            <Button
                icon="pencil-circle"
                mode="contained"
                onPress={() => guardarCliente()}
            >
                Guardar Cliente
            </Button>

            {/*Paso 1.28 */}
            <Portal>
                <Dialog
                    //Vid 255 ,alerta del botón de la página. 
                    visible={alerta}
                    //Paso 1.32
                    onDismiss={() => guardarAlerta(false)}
                >
                    <Dialog.Title>Error</Dialog.Title>
                    <Dialog.Content>
                        <Paragraph>Todos los campos son obligatorios</Paragraph>
                    </Dialog.Content>
                    <Dialog.Actions>
                        {/*Paso 1.31 */}
                        <Button onPress={() => guardarAlerta(false)}>OK</Button>
                    </Dialog.Actions>
                </Dialog>
            </Portal>

        </View>
    );
}

//Paso 1.22
const styles = StyleSheet.create({
    input: {
        marginBottom: 20,
        backgroundColor: '#d9d1d1'
        //backgroundColor: 'transparent'

    }
})

export default NuevoCliente

