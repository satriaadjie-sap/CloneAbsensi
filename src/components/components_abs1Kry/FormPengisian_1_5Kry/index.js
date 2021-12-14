import React, { useState } from 'react'
import {Picker} from '@react-native-picker/picker'
import {StyleSheet, Text, TextInput, View } from 'react-native'
import { WARNA_BG_FORM, WARNA_HITAM, WARNA_MERAH, WARNA_PUTIH, WARNA_SEKUNDER } from '../../../utils/constants'
import ButtonSalin from '../ButtonSalinKry'

const FormPengisian_1_5Kry = ({callBack}) => {
    const [selectedValue, setSelectedValue] = useState("");
    const [kendaraan, setKendaraan] = useState("");

    return (
        <View style={styles.container}>
            {/* Apakah Anda menggunakan kendaraan umum saat ke kampus? */}
            <View style={styles.containerQuestion}>
                <Text style={styles.textHeader}>
                Apakah Anda menggunakan kendaraan umum? (Ojek Online/Angkot Bus)                   
                </Text>
                <View style={styles.comboBox}>
                    <Picker
                        selectedValue={selectedValue}                                                
                        mode="dropdown"
                        backgroundColor={WARNA_PUTIH}
                        fontSize="13"
                        onValueChange={(selectedValue) => {
                            setSelectedValue(selectedValue);
                            callBack(selectedValue, kendaraan);
                        }}
                    >
                        <Picker.Item label="-- Pilih --" value="" />
                        <Picker.Item label="Ya" value="y" />
                        <Picker.Item label="Tidak" value="t" />
                    </Picker>
                </View>
            </View>

            {/* Sebutkan jenis kendaraan umum yang Anda gunakan! */}
            <View style={styles.containerQuestion}>
                <Text style={styles.textHeader}>
                Sebutkan jenis kendaraan umum yang Anda gunakan!
                    <Text style={styles.Mandatory}> *</Text>
                </Text>
                <TextInput 
                    onChangeText={kendaraan => {
                        setKendaraan(kendaraan);
                        callBack(selectedValue, kendaraan);
                    }}
                    style={styles.textInput}                    
                />
            </View>
        </View>
    )
}

export default FormPengisian_1_5Kry

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
