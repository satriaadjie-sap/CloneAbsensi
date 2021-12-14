import AsyncStorage from '@react-native-async-storage/async-storage'
import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Alert} from 'react-native'
import { IconDetail, IconPrinter } from '../../assets/icons'
import { WARNA_SEKUNDER } from '../../utils/constants'

const CellAksiFormulirMahasiswa = (props) => {
    const detailHandle = () => {
        // AsyncStorage.setItem('fma_id',props.fma_id+"")
        AsyncStorage.setItem('fma_id',props.fma_id+"")
        props.navigation.navigate('Form_absensi_detail');
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => Alert.alert('ini printer')}>
                <View style={styles.printer}>
                    <IconPrinter/>                    
                </View>
            </TouchableOpacity>            
            <TouchableOpacity 
                onPress={detailHandle}
                >
                <View style={styles.detail}>
                    <IconDetail/>                    
                </View>
            </TouchableOpacity>   
        </View>
    )
}

export default CellAksiFormulirMahasiswa

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignSelf:'center',
        
    },
    row:{        
        alignSelf:'center',
        borderWidth:1
    },
    printer:{
        marginRight:2,        
    },
    detail:{
        marginLeft:2
    }
})