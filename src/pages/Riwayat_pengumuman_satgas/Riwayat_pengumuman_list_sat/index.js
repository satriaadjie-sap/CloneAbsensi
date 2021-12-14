import React from 'react'
import {AsyncStorage, StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native'
import { ButtonTambahPengumuman, TablePengumumanSatgas } from '../../../components'
import { WARNA_PUTIH, WARNA_HIJAU_MUDA} from '../../../utils/constants'

const Riwayat_pengumuman_list_sat = ({navigation}) => {
    
    // const detailHandle = () => {
    //     //AsyncStorage.setItem('pen_id',props.pen_id+"")
    //     props.navigation.navigate('Form_create_pengumuman')
    // }
        return (
            <View style={ styles.page }>
                <ButtonTambahPengumuman navigation={navigation}/>          
                <ScrollView style={styles.containerScroll}>
                    <TablePengumumanSatgas navigation={navigation}/>
                </ScrollView>
            </View>
        )  
}

export default Riwayat_pengumuman_list_sat

const styles = StyleSheet.create({
    page:{ 
        flex: 1, 
        backgroundColor:WARNA_PUTIH
    },
    containerScroll:{
        height:300,
        marginHorizontal:13
    },
    container:{        
    },
    button:{
        backgroundColor:WARNA_HIJAU_MUDA,
        justifyContent: 'center', 
        alignItems: 'center',
        width:75,
        height:25,
    },
    outbutton:{
        marginBottom:10,
        marginEnd:15,
        alignItems:'flex-end'
    },
    text:{
        fontFamily:"Poppins-Light",
        textAlign:'center',
        alignSelf:'center',
        color:WARNA_PUTIH
    }
})