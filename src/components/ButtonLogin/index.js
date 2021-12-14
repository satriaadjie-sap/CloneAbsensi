import React from 'react'
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { IconLogin } from '../../assets/icons'
import { WARNA_PUTIH, WARNA_UTAMA } from '../../utils/constants'

const ButtonLogin = (props) => {
    return (
        <View style={styles.button}>
            <TouchableOpacity
                onPress={
                    () => props.navigation.replace("MainApp")}
                style={styles.touch}
            >
                <Text style={styles.text}>
                    LOGIN
                </Text>
                <IconLogin/>
            </TouchableOpacity>            
        </View>
    )
}

export default ButtonLogin

const styles = StyleSheet.create({
    button:{
        backgroundColor:WARNA_UTAMA,        
        width:115,
        height:36,
        borderRadius:20,
        justifyContent: 'center', 
        alignItems: 'center'
    },
    text:{
        color:WARNA_PUTIH,
        paddingRight:10
    },
    touch:{
        flexDirection:'row',        
        alignItems:'center'        
    }
})
