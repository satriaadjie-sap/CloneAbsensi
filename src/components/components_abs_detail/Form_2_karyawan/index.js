import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import TableKesehatan from '../TableKesehatan'
import HeaderFormAbsesni from '../../HeaderFormAbsesni'

const Form_2_karyawan = () => {
    return (
        <View>
            <HeaderFormAbsesni text={"4. Formulir Deklarasi Kesehatan"}/>
            <View style={styles.container}>
                <Text style={styles.info}>
                    Dalam 14 hari terakhir, apakah Anda pernah mengalami hal hal berikut.
                </Text>
            </View>
            <View style={styles.container}>
                <TableKesehatan/>
            </View>
        </View>
    )
}

export default Form_2_karyawan

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