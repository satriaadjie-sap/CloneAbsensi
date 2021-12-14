import AsyncStorage from '@react-native-async-storage/async-storage'
import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native'
import { IconDetail, IconPrinter } from '../../../assets/icons'

const CellAksiPengumumanSatgas = (props) => {
    const detailHandle = () => {
        AsyncStorage.setItem('pen_id',props.pen_id+"")
        props.navigation.navigate('Riwayat_pengumuman_detail_sat')
    }
    return (
        <View style={styles.container}>                        
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

export default CellAksiPengumumanSatgas

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
