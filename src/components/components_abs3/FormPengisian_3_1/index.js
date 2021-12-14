import React, { useState } from 'react'
import {Picker} from '@react-native-picker/picker'
import {StyleSheet, Text, TextInput, View } from 'react-native'
import { WARNA_BG_FORM, WARNA_HITAM, WARNA_MERAH, WARNA_PUTIH } from '../../../utils/constants';


const FormPengisian_3_1 = ({callBack}) => {
    const [selectedValue, setSelectedValue] = useState("");
    const [ojt, setOjt] = useState("");
    const [namaPer, setNamaPer] = useState("");
    const [ta, setTa] = useState("");

    return (
        <View style={styles.container}>            
            {/* Apakah saat ini Anda sedang OJT/Magang/Bekerja? */}
            <View style={styles.containerQuestion}>
                <Text style={styles.textHeader}>
                Apakah saat ini Anda sedang OJT/Magang/Bekerja?
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
                            callBack(selectedValue, ojt, namaPer, ta);
                        }}
                    >
                        <Picker.Item label="-- Pilih --" value="" />
                        <Picker.Item label="Ya" value="1" />
                        <Picker.Item label="Tidak" value="0" />
                    </Picker>
                </View>
            </View>

            {/* Dimanakah posisi Anda saat OJT/Magang/Bekerja? */}
            <View style={styles.containerQuestion}>
                <Text style={styles.textHeader}>
                Dimanakah posisi Anda saat OJT/Magang/Bekerja?
                <Text style={styles.Mandatory}> *</Text>
                </Text>
                <TextInput
                    onChangeText={ojt => {
                        setOjt(ojt);
                        callBack(selectedValue, ojt, namaPer, ta);
                    }}
                    style={styles.textInput}                    
                    />
            </View>

            {/* Tuliskan nama perusahaan dan cabang/site nya! */}
            <View style={styles.containerQuestion}>
                <Text style={styles.textHeader}>
                Tuliskan nama perusahaan dan cabang/site nya!
                <Text style={styles.Mandatory}> *</Text>
                </Text>
                <TextInput
                    onChangeText={namaPer => {
                        setNamaPer(namaPer);
                        callBack(selectedValue, ojt, namaPer, ta);
                    }}
                    style={styles.textInput}                    
                    />
            </View>

            {/* Deskripsikan secara singkat tentang Magang/TA Anda! (proposal, monitoring, bimbingan, project/produk TA) */}
            <View style={styles.containerQuestion}>
                <Text style={styles.textHeader}>
                Deskripsikan secara singkat tentang Magang/TA Anda! (proposal, monitoring, bimbingan, project/produk TA)
                <Text style={styles.Mandatory}> *</Text>
                </Text>
                <TextInput
                    onChangeText={ta => {
                        setTa(ta);
                        callBack(selectedValue, ojt, namaPer, ta);
                    }}
                    multiline={true}
                    numberOfLines={4}
                    style={styles.textInput}                    
                    />
            </View>
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
