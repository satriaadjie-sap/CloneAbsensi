import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { WARNA_PUTIH, WARNA_UTAMA } from '../../utils/constants'

const HeaderFormAbsesni = ({text}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{text}</Text>
        </View>
    )
}

export default HeaderFormAbsesni

const styles = StyleSheet.create({
    container:{
        backgroundColor:WARNA_UTAMA,
        height:37,        
        justifyContent:'center',        
        marginVertical:8,
        borderRadius:3
    },
    text:{
        color:WARNA_PUTIH,
        textAlign:'center',
        fontFamily:"Poppins-Light",
        fontSize:13
    }
})
