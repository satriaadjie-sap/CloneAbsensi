import React, { useState } from 'react'
import {Picker} from '@react-native-picker/picker'
import {StyleSheet, Text, TextInput, View } from 'react-native'
import { WARNA_BG_FORM, WARNA_HITAM, WARNA_MERAH, WARNA_PUTIH, WARNA_SEKUNDER } from '../../../utils/constants'
import ButtonSalin from '../ButtonSalinKry'

const FormPengisian_1_3Kry = () => {
    const [selectedValue, setSelectedValue] = useState("");
    return (
        <View style={styles.container}>            
            {/* Apakah Anda tinggal di kos/kontrakan bersama rekan mahasiswa/karyawan Polman Astra lain? */}
            <View style={styles.containerQuestion}>
                <Text style={styles.textHeader}>
                Apakah Anda tinggal di kos/kontrakan bersama rekan mahasiswa/karyawan Polman Astra lain? 
                    <Text style={styles.Mandatory}> *</Text>
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
                        <Picker.Item label="Ya" value="" />
                        <Picker.Item label="Tidak" value="" />
                    </Picker>
                </View>
            </View>

            {/* Informasikan nama dan program studi/departemennya! * */}
            <View style={styles.containerQuestion}>
                <Text style={styles.textHeader}>
                Informasikan nama dan program studi/departemennya!
                    <Text style={styles.Mandatory}> *</Text>
                </Text>
                <TextInput 
                        style={styles.textInput}                    
                    />
            </View>
        </View>
    )
}

export default FormPengisian_1_3Kry

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
