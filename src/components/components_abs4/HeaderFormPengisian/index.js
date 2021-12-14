import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { WARNA_BG_NAVBAR, WARNA_PUTIH, WARNA_SEKUNDER, WARNA_UTAMA } from '../../../utils/constants'

const HeaderFormPengisian = () => {
    return (
        <View style={styles.container}>
            <View style={styles.viewNo}>
                <Text style={styles.textNo}>No</Text>
            </View>
            <View style={styles.viewPertanyaan}>
                <Text style={styles.textPertanyaan}>Pertanyaan</Text>
            </View>
            <View style={styles.viewYa}>
                <Text style={styles.textYa}>Ya</Text>
            </View>
            <View style={styles.viewTidak}>
                <Text style={styles.textPertanyaan}>Tidak</Text>
            </View>
        </View>
    )
}

export default HeaderFormPengisian

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        backgroundColor:WARNA_UTAMA,
        padding:5
    },
    viewNo:{
        borderRightWidth:1,
        borderColor:WARNA_SEKUNDER,
        width:25,
        justifyContent:'center'
    },
    viewPertanyaan:{
        borderRightWidth:1,
        borderColor:WARNA_SEKUNDER,
        flex:1,
        alignItems:'stretch',
        alignSelf:'stretch'
    },
    viewYa:{
        borderRightWidth:1,
        borderColor:WARNA_SEKUNDER,
        alignItems:'center',
        width:25,
    },
    viewTidak:{
        alignItems:'center',
        width:40,
    },
    textNo:{
        width:20,
        textAlign:'center',
        color:WARNA_PUTIH,
        alignSelf:'center',
        fontFamily:"Poppins-Light",
        fontSize:12
    },
    textPertanyaan:{
        justifyContent:'space-around',
        textAlign:'center',
        color:WARNA_PUTIH,
        fontFamily:"Poppins-Light",
        fontSize:12
    },
    textYa:{
        width:20,
        textAlign:'center',
        color:WARNA_PUTIH,
        fontFamily:"Poppins-Light",
        fontSize:12
    },
    textTidak:{
        width:20,
        textAlign:'center',
        color:WARNA_PUTIH,
        fontFamily:"Poppins-Light",
        fontSize:12
    },
})
