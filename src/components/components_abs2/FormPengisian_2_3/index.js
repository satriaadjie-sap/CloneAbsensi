import React, { useState } from 'react'
import {Picker} from '@react-native-picker/picker'
import {StyleSheet, Text, TextInput, View } from 'react-native'
import { WARNA_BG_FORM, WARNA_HITAM, WARNA_MERAH, WARNA_PUTIH } from '../../../utils/constants';


const FormPengisian_2_3 = ({callBack}) => {
    const [selectedValue, setSelectedValue] = useState("");
    const [odp, setOdp] = useState("");

    return (
        <View style={styles.container}>            
            {/* Apakah di dalam keluarga Anda (termasuk Anda), ada anggota keluarga yang terpapar virus Corona/COVID-19? (ODP/PDP/Suspect/Positif) */}
            <View style={styles.containerQuestion}>
                <Text style={styles.textHeader}>
                Apakah di dalam keluarga Anda (termasuk Anda), ada anggota keluarga yang terpapar virus Corona/COVID-19? (ODP/PDP/Suspect/Positif)
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
                            callBack(selectedValue, odp);
                        }}
                    >
                        <Picker.Item label="-- Pilih --" value="" />
                        <Picker.Item label="Ada" value="1" />
                        <Picker.Item label="Tidak ada" value="0" />
                    </Picker>
                </View>
            </View>

            {/* Mohon jelaskan jika terdapat ODP/PDP/Suspect/Positif! */}
            <View style={styles.containerQuestion}>
                <Text style={styles.textHeader}>
                Mohon jelaskan jika terdapat ODP/PDP/Suspect/Positif!
                <Text style={styles.Mandatory}> *</Text>
                </Text>
                <TextInput
                    onChangeText={odp => {
                            setOdp(odp);
                            callBack(selectedValue, odp);
                        }}
                    multiline={true}
                    numberOfLines={4}
                    style={styles.textInput}                    
                    />
            </View>
        </View>
    )
}

export default FormPengisian_2_3

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
