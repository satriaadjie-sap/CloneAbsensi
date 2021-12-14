import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { WARNA_HIJAU } from '../../utils/constants'

const NotifPengisian = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Anda sudah mengisi formulir absensi dan pendataan kesehatan {props.data}. Terima kasih.
            </Text>
        </View>
    )
}

export default NotifPengisian

const styles = StyleSheet.create({
    container:{
        backgroundColor:'rgba(03, 80, 00, 0.30)',
        marginTop:10,
        borderRadius:5,
        paddingHorizontal:17,
        paddingVertical:7,
    },
    text:{
        color:WARNA_HIJAU,
        fontFamily:'Poppins-Bold',
        fontSize:12
    }
})
