import React from 'react'
import { Button, StyleSheet, Text, View, Alert, TouchableOpacity  } from 'react-native'
import { WARNA_HIJAU_MUDA, WARNA_PUTIH } from '../../utils/constants'

const ButtonIsiFormulir = (props) => {

const detailHandle = () => {
    props.navigation.navigate("Isi Absensi");
}


    return (
        <View style={styles.container}>
            <TouchableOpacity 
                style={styles.button} 
                onPress={detailHandle}>
                <Text style={styles.text}>ISI FORMULIR</Text>                
            </TouchableOpacity>
        </View>
    )
}

export default ButtonIsiFormulir

const styles = StyleSheet.create({
    container:{
         
    },
    button:{
        backgroundColor:WARNA_HIJAU_MUDA,
        marginTop:10,
        width:121,
        height:36,
        borderRadius:3,        
        justifyContent: 'center', 
        alignItems: 'center'
    },
    text:{
        color:WARNA_PUTIH
    }
})
