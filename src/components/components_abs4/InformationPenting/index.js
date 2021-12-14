import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { WARNA_KUNING, WARNA_KUNING_TUA } from '../../../utils/constants'

const InformationPenting = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.textPenting}>Penting!</Text>
            <Text style={styles.textBody}>Demi kesehatan dan keselamatan bersama, anda harus JUJUR dalam menjawab pertanyaan ini.</Text>
            <View style={styles.line}>

            </View>
            <Text style={styles.textBody}>Dalam 14 hari terakhir, apakah Anda pernah mengalami hal hal berikut.</Text>
        </View>
    )
}

export default InformationPenting

const styles = StyleSheet.create({
    container:{
        backgroundColor:WARNA_KUNING,
        padding:4,
        paddingVertical:10,
        borderRadius:3,
        marginBottom:10
    },
    textPenting:{
        fontFamily:"Poppins-Regular",
        fontSize:16,
        color:WARNA_KUNING_TUA
    },
    textBody:{
        fontFamily:"Poppins-Light",
        fontSize:12,
        color:WARNA_KUNING_TUA
    },
    line:{
        borderWidth:0.5,
        borderColor:WARNA_KUNING_TUA,
        marginHorizontal:10,
        marginVertical:8
    }
})
