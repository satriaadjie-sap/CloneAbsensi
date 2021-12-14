import React, { useState } from 'react'
import {Picker} from '@react-native-picker/picker'
import {StyleSheet, Text, TextInput, View } from 'react-native'
import { WARNA_BG_FORM, WARNA_HITAM, WARNA_MERAH, WARNA_PUTIH, WARNA_SEKUNDER } from '../../../utils/constants'
import ButtonSalin from '../ButtonSalinKry'

const FormPengisian_1_4Kry = () => {
    const [selectedValue, setSelectedValue] = useState("");
    return (
        <View style={styles.container}>
            {/* Nomor Kontak Lain yang Bisa Dihubungi */}
            <View style={styles.containerQuestion}>
                <Text style={styles.textHeader}>
                Nomor Kontak Lain yang Bisa Dihubungi 
                    <Text style={styles.Mandatory}> *</Text>
                </Text>
                <TextInput 
                        style={styles.textInput}                    
                    />
            </View>

            {/* Apakah keluarga Anda ada yang berprofesi sebagai berikut? */}
            <View style={styles.containerQuestion}>
                <Text style={styles.textHeader}>
                Apakah keluarga Anda ada yang berprofesi sebagai berikut?                     
                </Text>
                <View style={styles.comboBox}>
                    <Picker
                        selectedValue={selectedValue}                                                
                        mode="dropdown"
                        backgroundColor={WARNA_PUTIH}
                        fontSize="13"
                        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                    >
                        <Picker.Item label="-- Pilih --" value="" />
                        <Picker.Item label="Dokter" value="" />
                        <Picker.Item label="Perawat/Tenaga Medis non Dokter" value="" />
                        <Picker.Item label="Pilot/Kru Penerbangan" value="" />
                        <Picker.Item label="TNI/Polri" value="" />
                        <Picker.Item label="Kru Kapal Laut" value="" />
                    </Picker>
                </View>
            </View>
        </View>
    )
}

export default FormPengisian_1_4Kry

const styles = StyleSheet.create({
    container:{
        backgroundColor:WARNA_BG_FORM,
        borderRadius:3,
        padding:10,
        marginVertical:5
    },
    containerQuestion:{
        marginVertical:5,
    },
    comboBox:{
        color:WARNA_HITAM,        
        borderRadius:3,        
        overflow:'hidden'        
    },    
    textHeader:{
        fontFamily:"Poppins-SemiBold",
        fontSize:13,
        color:WARNA_HITAM
    },
    Mandatory:{
        fontFamily:"Poppins-SemiBold",
        fontSize:13,
        color:WARNA_MERAH
    },
    textBody:{
        fontFamily:"Poppins-Light",
        fontSize:13,
        color:WARNA_HITAM
    },
    textInput:{                
        backgroundColor:WARNA_PUTIH,
        borderRadius:3,
        paddingLeft:10,
        textAlignVertical:'center'
    },
})
