import React from 'react'
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { WARNA_HIJAU, WARNA_PUTIH } from '../../../utils/constants'

const ButtonUnduhFormulir = () => {
    return (
        <View>
            <TouchableOpacity 
                style={styles.container}
                onPress={() => Alert.alert('unduh')}
            >
                <Text style={styles.text}>UNDUH FORMULIR DEKLARASI KESEHATAN</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ButtonUnduhFormulir

const styles = StyleSheet.create({
    container:{
        width:227,
        backgroundColor:WARNA_HIJAU,
    },
    text:{
        fontFamily:"Poppins-Light",
        fontSize:12,
        color:WARNA_PUTIH,
        paddingVertical:10,
        textAlign:'center'
    }
})
