import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Button } from 'react-native-paper'
// import { LINK_API, WARNA_HITAM } from '../../../utils/constants'
import { LINK_API, WARNA_HITAM } from '../../utils/constants'
import axios, { Axios } from 'axios'

const InformasiDataDiri = ({nim, nama, prodi, tingkat, status, nomor, callBack}) => {
    
    
    return (
        <View style={styles.container}>
        {/* <TouchableOpacity onPress={() => {callBack(' jyjg')}}>
            <Text>Abc</Text>
        </TouchableOpacity> */}
        
            <View style={styles.textContainer}>
                <Text style={styles.textHeader}>
                    NIM - Nama
                </Text>
                <Text style={styles.textBody}>
                    {nim} - {nama}
                    {/* 0320190027 - Satria Adjie Prayoga */}
                </Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.textHeader}>
                    Program Studi - Tingkat
                </Text>
                <Text style={styles.textBody}>
                   {prodi} - {tingkat}
                </Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.textHeader}>
                    Status Mahasiswa 
                </Text>
                <Text style={styles.textBody}>
                    {status}
                </Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.textHeader}>
                    Nomor Handphone
                </Text>
                <Text style={styles.textBody}>
                    {nomor}
                </Text>
            </View>
        </View>
        
    )
}

export default InformasiDataDiri

const styles = StyleSheet.create({
    container:{

    },
    textContainer:{

    },
    textHeader:{
        color:WARNA_HITAM,
        fontSize:13,
        fontFamily:"Poppins-Bold",
        marginBottom:-5
    },
    textBody:{        
        color:WARNA_HITAM,
        fontSize:13,
        fontFamily:"Poppins-Light"
    }
})