import React from 'react'
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { WARNA_HITAM, WARNA_PUTIH, WARNA_UNGU_MUDA } from '../../../utils/constants'

const ButtonBatal2Kry = (props) => {
    const PindahForm = () => {
        props.navigation.navigate('Form_absensi_1')
    }
    return (        
        <View  style={styles.button}>
            <TouchableOpacity
                onPress={PindahForm}
                // onPress={() => Alert.alert("Batal")}
            >
                <Text style={styles.textButton}>BATAL</Text>
            </TouchableOpacity>
        </View>     
    )
}

export default ButtonBatal2Kry

const styles = StyleSheet.create({    
    button:{
        backgroundColor:WARNA_UNGU_MUDA,
        width:60,
        height:25,
        justifyContent:'center',
    },
    textButton:{
        color:WARNA_PUTIH,
        textAlign:'center',
        fontFamily:"Poppins-Light",
        fontSize:13
    },
    keterangan:{
        justifyContent:'center',
        marginLeft:9
    },
    textKeterangan:{
        color:WARNA_HITAM,
        textAlign:'center',
        fontFamily:"Poppins-Light",
        fontSize:13
    },
})
