import React from 'react'
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { WARNA_BIRU, WARNA_BIRU_MUDA, WARNA_HITAM } from '../../../utils/constants'

const ButtonSalinKry = () => {
    return (
        <View style={styles.container}>
            <View  style={styles.button}>
                <TouchableOpacity
                    onPress={() => Alert.alert("Salin")}
                >
                    <Text style={styles.textButton}>SALIN</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.keterangan}>
                <Text style={styles.textKeterangan}>
                Salin dari isian di atas.
                </Text>
            </View>            
        </View>        
    )
}

export default ButtonSalinKry

const styles = StyleSheet.create({
    container:{
        flexDirection:'row'
    },
    button:{
        backgroundColor:WARNA_BIRU_MUDA,
        width:88,
        height:25,
        justifyContent:'center',
    },
    textButton:{
        color:WARNA_BIRU,
        textAlign:'center',
        fontFamily:"Poppins-Light",
        fontSize:13
    },
    keterangan:{
        justifyContent:'center',
        marginLeft:9
    },
    textKeterangan:{
        color:WARNA_HITAM,
        textAlign:'center',
        fontFamily:"Poppins-Light",
        fontSize:13
    },
})
