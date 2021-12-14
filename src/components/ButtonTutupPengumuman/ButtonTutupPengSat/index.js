import React from 'react'
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { WARNA_PUTIH, WARNA_UNGU_MUDA } from '../../../utils/constants'

const ButtonTutupPengSat = (props) => {
    const backForm = () => {
        props.navigation.navigate('Riwayat_pengumuman_list_sat')
    }
    return (
        <View style={styles.button}>
            <TouchableOpacity
                onPress={backForm}
            >
                <Text style={styles.text}>TUTUP</Text>
            </TouchableOpacity>            
        </View>
    )
}

export default ButtonTutupPengSat

const styles = StyleSheet.create({
    button:{
        backgroundColor:WARNA_UNGU_MUDA,
        justifyContent: 'center', 
        alignItems: 'center',
        width:75,
        height:25
    },
    text:{
        fontFamily:"Poppins-Light",
        textAlign:'center',
        alignSelf:'center',
        color:WARNA_PUTIH
    }
})
