import React, { useState } from 'react'
import {Picker} from '@react-native-picker/picker'
import {StyleSheet, Text, TextInput, View } from 'react-native'
import { WARNA_BG_FORM, WARNA_HITAM, WARNA_MERAH, WARNA_PUTIH } from '../../../utils/constants';


const FormPengisian_2_2 = ({callBack}) => {
    const [selectedValue, setSelectedValue] = useState("");
    const [sehat, setSehat] = useState("");

    return (
        <View style={styles.container}>            
            {/* Bagaimana kondisi kesehatan keluarga Anda/kerabat Anda saat ini? (Jika berada di rumah orang tua/kerabat) */}
            <View style={styles.containerQuestion}>
                <Text style={styles.textHeader}>
                Bagaimana kondisi kesehatan keluarga Anda/kerabat Anda saat ini? (Jika berada di rumah orang tua/kerabat)
                    <Text style={styles.Mandatory}> *</Text>
                </Text>
                <View style={styles.comboBox}>
                    <Picker
                        selectedValue={selectedValue}                                                
                        mode="dropdown"
                        backgroundColor={WARNA_PUTIH}
                        fontSize="13"
                        onValueChange={(selectedValue) => {
                            setSelectedValue(selectedValue);
                            callBack(selectedValue, sehat);
                        }}
                    >
                        <Picker.Item label="-- Pilih --" value="" />
                        <Picker.Item label="Sehat" value="1" />
                        <Picker.Item label="Tidak sehat" value="0" />
                    </Picker>
                </View>
            </View>

            {/* Informasikan perihal penyakit atau gejala yang di alami! */}
            <View style={styles.containerQuestion}>
                <Text style={styles.textHeader}>
                Jelaskan data diri keluarga dan gejala yang di alami dan informasikan sejak kapan menderitanya!
                <Text style={styles.Mandatory}> *</Text>
                </Text>
                <TextInput
                    onChangeText={sehat => {
                            setSehat(sehat);
                            callBack(selectedValue, sehat);
                        }}
                    multiline={true}
                    numberOfLines={4}
                    style={styles.textInput}                    
                    />
            </View>
        </View>
    )
}

export default FormPengisian_2_2

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
