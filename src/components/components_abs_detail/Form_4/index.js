import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import HeaderFormAbsesni from '../../HeaderFormAbsesni'
import TableKesehatan from '../TableKesehatan'
import TableKesehatanMahasiswa from '../TableKesehatanMahasiswa'

const Form_4 = () => {
    return (
        <View>
            <HeaderFormAbsesni text={"4. Formulir Deklarasi Kesehatan"}/>
            <View style={styles.container}>
                <Text style={styles.info}>
                    Dalam 14 hari terakhir, apakah Anda pernah mengalami hal hal berikut.
                </Text>
            </View>
            <View style={styles.container}>
                <TableKesehatanMahasiswa/>
            </View>
        </View>
    )
}

export default Form_4

const styles = StyleSheet.create({
    container:{
        marginHorizontal:7,
        marginBottom:10
    },
    info:{
        fontFamily:"Poppins-Light",
        fontSize:12,
        marginLeft:10,
        marginBottom:5
    },
})