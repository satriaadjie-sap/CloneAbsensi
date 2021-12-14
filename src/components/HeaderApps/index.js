import React from 'react'
import { AsyncStorage } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { Alert, StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native'
import { IconLogoPolman } from '../../assets/icons'
import { WARNA_PUTIH, WARNA_SEKUNDER, WARNA_UTAMA } from '../../utils/constants'
// import { AsyncStorage } from '@react-navigation-async-storage/async-storage'

const HeaderApps = ({}) => {

    const navigation = useNavigation();

    const handleSubmitPress = () => {
        
        // Menghapus data dari local storage
        AsyncStorage.removeItem('user');
        navigation.replace("Login")        
    }

    return (
        <View style={styles.container}>
            <IconLogoPolman/>
            {/* {<ButtonIsiFormulir navigation = {navigation}/>} */}
            <TouchableOpacity 
                style={styles.touchable}
                onPress={handleSubmitPress}
                >
                <Text style={styles.text}>
                    Logout
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default HeaderApps

const styles = StyleSheet.create({
    container:{
        height:55,
        borderBottomColor:WARNA_SEKUNDER,
        borderBottomWidth:1,        
        flexDirection:'row',
        alignContent:'center',
        alignItems:'center',
        marginHorizontal:-15,
        marginTop:-15,        
        marginBottom:4,
        justifyContent:'space-between'
    },
    touchable:{                
    },
    text:{
        fontFamily:"Poppins-Regular",
        fontSize:12,
        color:WARNA_UTAMA,
        textAlign:'right',
        paddingRight:13,
    }
})
