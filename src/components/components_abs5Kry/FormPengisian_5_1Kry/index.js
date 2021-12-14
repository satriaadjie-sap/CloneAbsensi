import React, { useState } from 'react'
import {StyleSheet, Text, View } from 'react-native'
import { WARNA_SEKUNDER } from '../../../utils/constants'
import ButtonUnduhFormulir from '../ButtonUnduhFormulirKry'

const FormPengisian_5_1Kry = () => {    
    return (
        <View style={styles.container}>
            <Text style={styles.textHead}>Terima Kasih!</Text>
            <Text style={styles.textBody1}>
                Anda telah selesai mengisi Formulir Absensi dan Pendataan Harian Mahasiswa hari ini.
            </Text>
            <Text style={styles.textBody2}>
                Silahkan untuk formulir deklarasi kesehatan (jika diperlukan) dengan cara klik tombol di bawah ini.
            </Text>
            <View style={styles.buttonUnduh}>
                <ButtonUnduhFormulir/>
            </View>
        </View>
    )
}

export default FormPengisian_5_1Kry

const styles = StyleSheet.create({
    container:{        
        borderRadius:3,
        padding:10,
        marginVertical:5,
        marginLeft:7
    },
    textHead:{
        fontSize:22,
        fontFamily:"Poppins-Regular"
    },
    textBody1:{
        marginTop:16,
        fontSize:13,
        fontFamily:"Poppins-Light",
        width:205        
    },
    textBody2:{
        marginTop:24,
        fontSize:13,
        fontFamily:"Poppins-Light",
        width:246,
        marginBottom:12
    },
    buttonUnduh:{
        borderTopWidth:1,
        borderColor:WARNA_SEKUNDER,
        paddingTop:12,
        alignItems:'center',        
    }
})
