import React, { useState } from 'react'
import {Picker} from '@react-native-picker/picker'
import {StyleSheet, Text, TextInput, View } from 'react-native'
import { WARNA_BG_FORM, WARNA_HITAM, WARNA_MERAH, WARNA_PUTIH } from '../../../utils/constants';


const Form_create_pengumuman = () => {
    const [selectedValue, setSelectedValue] = useState("");
    return (
        <View style={styles.container}>            
            {/* Dimanakah posisi Anda saat OJT/Magang/Bekerja? */}
            <View style={styles.containerQuestion}>
                <Text style={styles.textHeader}>
                Subyek Pengumuman
                <Text style={styles.Mandatory}> *</Text>
                </Text>
                <TextInput
                    style={styles.textInput}                    
                    />
            </View>

            {/* Apakah saat ini Anda sedang OJT/Magang/Bekerja? */}
            <View style={styles.containerQuestion}>
                <Text style={styles.textHeader}>
                Siapa yang bisa melihat Pengumuman?
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
                        <Picker.Item label="Mahasiswa" value="" />
                        <Picker.Item label="Karyawan" value="" />
                        <Picker.Item label="Semua" value="" />
                    </Picker>
                </View>
            </View>

            {/* <TouchableOpacity onPress = {set}>
                   <Image source = {iconUrl} style={{width: 
                       30, height: 30}} />
               </TouchableOpacity> */}
        </View>
    )
}

export default FormPengisian_3_1

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
