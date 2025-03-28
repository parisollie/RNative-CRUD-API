import { StyleSheet } from 'react-native';
//V-251,paso 1.21
const globalStyles = StyleSheet.create({
    contenedor: {
        flex: 1,
        marginTop: 20,
        marginHorizontal: '2.5%',
        backgroundColor: '#8ec6cf'

    },
    titulo: {
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 30,
        fontSize: 30,
        color: '#1A1D1D'
    },
    fab: {
        position: 'absolute',
        margin: 20,
        right: 0,
        bottom: 20
    }
});

export default globalStyles;