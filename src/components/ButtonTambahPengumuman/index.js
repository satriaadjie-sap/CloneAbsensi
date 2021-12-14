import AsyncStorage from '@react-native-async-storage/async-storage'
import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native'
import { WARNA_PUTIH, WARNA_HIJAU_MUDA } from '../../utils/constants'

const ButtonTambahPengumuman = (props) => {
    const detailHandle = () => {
        //AsyncStorage.setItem('pen_id',props.pen_id+"")
        props.navigation.navigate('Form_create_pengumuman'); 
    }
    return (
        <View style={styles.outbutton}>
            <View style={styles.button}>
                <TouchableOpacity
                    onPress={detailHandle}>
                    <Text style={styles.text}>Tambah</Text>
                </TouchableOpacity>            
            </View> 
        </View> 
        
        // <View style={styles.container}>                        
        //     <TouchableOpacity 
        //         onPress={detailHandle}
        //     >
        //         <View style={styles.detail}>
        //             <IconDetail/>                    
        //         </View>
        //     </TouchableOpacity>   
        // </View>
    )
}

export default ButtonTambahPengumuman

const styles = StyleSheet.create({
    // container:{
    //     flexDirection:'row',
    //     alignSelf:'center',
        
    // },
    row:{        
        alignSelf:'center',
        borderWidth:1
    },
    printer:{
        marginRight:2,        
    },
    detail:{
        marginLeft:2
    },
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