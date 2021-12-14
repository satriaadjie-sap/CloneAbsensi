import React from 'react'
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { WARNA_PUTIH, WARNA_UTAMA } from '../../utils/constants'

const ButtonSimpanSandi = ({baru}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity 
                style={styles.button}
                onPress={() => Alert.alert(baru)}
                //onPress={handleSubmitPress}
            >
                <Text style={styles.text}>SIMPAN</Text>
            </TouchableOpacity>            
        </View>
    )
}

export default ButtonSimpanSandi

const styles = StyleSheet.create({
    container:{        
        alignItems:'flex-end'       
    },
    button:{
        backgroundColor:WARNA_UTAMA,
        width:79,
        alignItems:'center',
        paddingVertical:2
    },
    text:{
        color:WARNA_PUTIH,
        fontSize:12,
        fontFamily:"Poppins-Light"
    }
})
