import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { FormPengisian_5_1, HeaderFormAbsesni, ButtonBatal3, ButtonSelanjutnya3, ButtonSelesai } from '../../../components'
import { WARNA_SEKUNDER } from '../../../utils/constants'

const Form_absensi_5 = ({navigation}) => {
    return (
        <View>
            <View style={styles.containerForm}>
                <HeaderFormAbsesni text={"Langkah 5 / 5 : Unduh Formulir Deklarasi Kesehatan"}/>            
                <FormPengisian_5_1/>                
            </View>
            <View style={styles.button}>
                <ButtonSelesai navigation = {navigation} riwayat="true"/>
            </View>
        </View>
    )
}

export default Form_absensi_5

const styles = StyleSheet.create({
    containerForm:{
        borderWidth:1,
        borderColor:WARNA_SEKUNDER,
        borderRadius:3,
        paddingHorizontal:8
    },
    button:{
        flexDirection:'row',
        justifyContent:'flex-end',
        marginVertical:5
    } 
})