import React from 'react';
import { Button } from 'react-native-paper';

//Paso 1.13
const BarraSuperior = ({ navigation, route }) => {


    //Paso 1.15, botton en la parte superior 
    const handlePress = () => {
        //paso 1.17
        navigation.navigate("NuevoCliente")
        console.log('Vamos a creer un cliente')
    }

    return (

        <Button
            //Paso 1.14
            icon="plus-circle"
            textColor="#EF583A"
            onPress={() => handlePress()}
        >
            Cliente
        </Button>
    );
}

export default BarraSuperior;