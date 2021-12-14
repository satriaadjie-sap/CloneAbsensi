import React, { useState } from 'react'
import {Picker} from '@react-native-picker/picker'
import {StyleSheet, Text, TextInput, View } from 'react-native'
import { WARNA_BG_FORM, WARNA_HITAM, WARNA_MERAH, WARNA_PUTIH } from '../../../utils/constants';


const FormPengisian_2_6Kry = ({callBack}) => {
    const [selectedValue, setSelectedValue] = useState("");
    const [selectedValue2, setSelectedValue2] = useState("");
    const [selectedValue3, setSelectedValue3] = useState("");
    const [selectedValue4, setSelectedValue4] = useState("");

    return (
        <View style={styles.container}>

            <View style={styles.containerQuestion}>
                <Text style={styles.textHeader}>
                Apakah Anda telah menerima vaksin COVID-19?
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
                            callBack(selectedValue, selectedValue2, selectedValue3, selectedValue4);
                        }}
                    >
                        <Picker.Item label="-- Pilih --" value="" />
                        <Picker.Item label="Sudah" value="1" />
                        <Picker.Item label="Belum" value="0" />
                    </Picker>
                </View>
            </View>
            
            <View style={styles.containerQuestion}>
                <Text style={styles.textHeader}>
                Berapa kali Anda telah Menerima suntikan vaksin COVID-19?
                    <Text style={styles.Mandatory}> *</Text>
                </Text>
                <View style={styles.comboBox}>
                    <Picker
                        selectedValue={selectedValue2}                                                
                        mode="dropdown"
                        backgroundColor={WARNA_PUTIH}
                        fontSize="13"
                        onValueChange={(selectedValue2) => {
                            setSelectedValue2(selectedValue2);
                            callBack(selectedValue, selectedValue2, selectedValue3, selectedValue4);
                        }}
                    >
                        <Picker.Item label="-- Pilih --" value="" />
                        <Picker.Item label="Satu Kali" value="1" />
                        <Picker.Item label="Dua Kali" value="0" />
                    </Picker>
                </View>
            </View>
            
            <View style={styles.containerQuestion}>
                <Text style={styles.textHeader}>
                Apa nama vaksin yang Anda terima?
                    <Text style={styles.Mandatory}> *</Text>
                </Text>
                <View style={styles.comboBox}>
                    <Picker
                        selectedValue={selectedValue3}                                                
                        mode="dropdown"
                        backgroundColor={WARNA_PUTIH}
                        fontSize="13"
                        onValueChange={(selectedValue3) => {
                            setSelectedValue3(selectedValue3);
                            callBack(selectedValue, selectedValue2, selectedValue3, selectedValue4);
                        }}
                    >
                        <Picker.Item label="-- Pilih --" value="" />
                        <Picker.Item label="Sinopharm" value="1" />
                        <Picker.Item label="Sinovac" value="2" />
                        <Picker.Item label="AstraZeneca" value="3" />
                        <Picker.Item label="Pfizer" value="4" />
                        <Picker.Item label="Moderna" value="5" />
                        <Picker.Item label="Lainnya" value="6" />
                    </Picker>
                </View>
            </View>
            
            <View style={styles.containerQuestion}>
                <Text style={styles.textHeader}>
                Apakah Anda telah menerima sertifikat vaksin?
                    <Text style={styles.Mandatory}> *</Text>
                </Text>
                <View style={styles.comboBox}>
                    <Picker
                        selectedValue={selectedValue4}                                                
                        mode="dropdown"
                        backgroundColor={WARNA_PUTIH}
                        fontSize="13"
                        onValueChange={(selectedValue4) => {
                            setSelectedValue4(selectedValue4);
                            callBack(selectedValue, selectedValue2, selectedValue3, selectedValue4);
                        }}
                    >
                        <Picker.Item label="-- Pilih --" value="" />
                        <Picker.Item label="Sudah" value="1" />
                        <Picker.Item label="Belum" value="0" />
                    </Picker>
                </View>
            </View>
        </View>
    )
}

export default FormPengisian_2_6Kry

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
