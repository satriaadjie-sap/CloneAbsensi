import React from 'react'
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { WARNA_PUTIH, WARNA_UNGU_MUDA } from '../../../utils/constants'

const ButtonKembaliKaryawan = (props) => {
    const backForm = () => {
        props.navigation.navigate('Form_absensi_sudah')
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={backForm}
            >
                <Text style={styles.text}>KEMBALI</Text>
            </TouchableOpacity>           
        </View>
    )
}

export default ButtonKembaliKaryawan

const styles = StyleSheet.create({
    container:{
        backgroundColor:WARNA_UNGU_MUDA,
        justifyContent:'center',
        width:70,
        height:25,
    },
    button:{
        justifyContent:'center',
        alignContent:'center'
    },
    text:{
        fontFamily:"Poppins-Light",
        fontSize:13,
        textAlign:'center',
        color:WARNA_PUTIH
    }
})
