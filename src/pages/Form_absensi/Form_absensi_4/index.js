import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { FormPengisian_4_1, HeaderFormAbsesni, ButtonBatal4, ButtonSelanjutnya4 } from '../../../components'
import { WARNA_SEKUNDER } from '../../../utils/constants'

const Form_absensi_4 = ({navigation}) => {
    return (
        <View>
            <ScrollView style={styles.containerScrollView}>
                <View style={styles.containerForm}>
                    <HeaderFormAbsesni text={"Langkah 4 / 5 : Mengisi Formulir Deklarasi Kesehatan"}/>            
                    <FormPengisian_4_1/>                
                </View>
                <View style={styles.button}>
                    <ButtonBatal4 navigation={navigation}/>
                    <ButtonSelanjutnya4 navigation = {navigation}/>
                </View>
            </ScrollView>
        </View>
    )
}

export default Form_absensi_4

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