import React, { useState } from 'react'
import {StyleSheet, Text, View } from 'react-native'
import CheckBox from '@react-native-community/checkbox'
import { WARNA_BG_FORM, WARNA_HITAM, WARNA_MERAH, WARNA_PUTIH } from '../../../utils/constants';


const FormPengisian_2_5 = ({callBack}) => {
    const [isSelected, setSelection] = useState(false);
    const [isSelected2, setSelection2] = useState(false);
    const [isSelected3, setSelection3] = useState(false);
    const [isSelected4, setSelection4] = useState(false);
    const [isSelected5, setSelection5] = useState(false);
    const [isSelected6, setSelection6] = useState(false);
    const [isSelected7, setSelection7] = useState(false);

    return (
        <View style={styles.container}>            
            {/* Apakah Anda menderita penyakit di bawah ini? */}
            <View style={styles.containerQuestion}>
                <Text style={styles.textHeader}>
                Apakah Anda menderita penyakit di bawah ini?
                    <Text style={styles.Mandatory}> *</Text>
                </Text>
                
                {/* Hipertensi */}
                <View style={styles.checkboxContainer}>
                    <CheckBox
                        value={isSelected}
                        onValueChange={(isSelected) => {
                            setSelection(isSelected);
                            callBack(isSelected, isSelected2, isSelected3, isSelected4, 
                                isSelected5, isSelected6, isSelected7);
                        }}
                    />
                    <Text style={styles.label}>Hipertensi</Text>
                </View>

                {/* Diabetes */}
                <View style={styles.checkboxContainer}>
                    <CheckBox
                        value={isSelected2}
                        onValueChange={(isSelected2) => {
                            setSelection2(isSelected2);
                            callBack(isSelected, isSelected2, isSelected3, isSelected4, 
                                isSelected5, isSelected6, isSelected7);
                        }}
                    />
                    <Text style={styles.label}>Diabetes</Text>
                </View>

                {/* Jantung */}
                <View style={styles.checkboxContainer}>
                    <CheckBox
                        value={isSelected3}
                        onValueChange={(isSelected3) => {
                            setSelection3(isSelected3);
                            callBack(isSelected, isSelected2, isSelected3, isSelected4, 
                                isSelected5, isSelected6, isSelected7);
                        }}
                    />
                    <Text style={styles.label}>Jantung</Text>
                </View>

                {/* Gangguan Paru-Paru (Misalnya : Asma) */}
                <View style={styles.checkboxContainer}>
                    <CheckBox
                        value={isSelected4}
                        onValueChange={(isSelected4) => {
                            setSelection4(isSelected4);
                            callBack(isSelected, isSelected2, isSelected3, isSelected4, 
                                isSelected5, isSelected6, isSelected7);
                        }}
                    />
                    <Text style={styles.label}>Gangguan Paru-Paru (Misalnya : Asma)</Text>
                </View>

                {/* Ginjal */}
                <View style={styles.checkboxContainer}>
                    <CheckBox
                        value={isSelected5}
                        onValueChange={(isSelected5) => {
                            setSelection5(isSelected5);
                            callBack(isSelected, isSelected2, isSelected3, isSelected4, 
                                isSelected5, isSelected6, isSelected7);
                        }}
                    />
                    <Text style={styles.label}>Ginjal</Text>
                </View>

                {/* Lever */}
                <View style={styles.checkboxContainer}>
                    <CheckBox
                        value={isSelected6}
                        onValueChange={(isSelected6) => {
                            setSelection6(isSelected6);
                            callBack(isSelected, isSelected2, isSelected3, isSelected4, 
                                isSelected5, isSelected6, isSelected7);
                        }}
                    />
                    <Text style={styles.label}>Lever</Text>
                </View>

                {/* Tidak ada satupun  tertera di atas */}
                <View style={styles.checkboxContainer}>
                    <CheckBox
                        value={isSelected7}
                        onValueChange={(isSelected7) => {
                            setSelection7(isSelected7);
                            callBack(isSelected, isSelected2, isSelected3, isSelected4, 
                                isSelected5, isSelected6, isSelected7);
                        }}
                    />
                    <Text style={styles.label}>Tidak ada satupun  tertera di atas</Text>
                </View>
            </View>
        </View>
    )
}

export default FormPengisian_2_5

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
    checkboxContainer: {        
        height:25,
        flexDirection: "row",
        alignItems:'center'
    },    
    label: {
        fontFamily:"Poppins-Light",
        fontSize:13
    },
})
