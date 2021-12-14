import React, { Component, useState, createRef, useEffect } from 'react'
import { StyleSheet, Text, button, TextInput, View , AsyncStorage, TouchableOpacity} from 'react-native'
import { WARNA_BIRU, WARNA_UTAMA } from '../../utils/constants'

let rolget = '';

const InformasiPengisian = (props) => {
    
// const [rolen, setRolen] = useState('');

// AsyncStorage.getItem('user', (error, result) => {
//         if(result){
//             //Parse result ke JSON
//             let resultParsed = JSON.parse(result)
//             rolget = resultParsed.role;
//         }
//     });

    // const myFunction = () => {
    //     if (rolget == "ROL23"){
    //         setRolen('Mahasiswa');
    //         //rolen => setRolen(rolen)        
    //     }
    //     else if (rolget== "ROL01"){
    //         setRolen('Karyawan');
    //         //rolen => setRolen(rolen) 
    //     }
    // }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Formulir absensi dan pendataan kesehatan {props.data} 
                tersedia mulai pukul 04.30 - 09.00 WIPA untuk hari ini.
            </Text>
        
            {/* <View style={styles.containerbut}>
                <TouchableOpacity 
                    style={styles.button}
                    //onPress={() => Alert.alert(baru)}
                    onPress={myFunction}
                >
                    <Text style={styles.text}>SIMPAN</Text>
                </TouchableOpacity>  
            </View>    */}

            {/* <TextInput 
                onChangeText={rolen => setRolen(rolen)}
                value={rolen}
                placeholder="enter here"
            /> */}

        </View>
    )
}

export default InformasiPengisian

const styles = StyleSheet.create({
    container:{
        backgroundColor:'rgba(00, 05, 86, 0.21)',
        marginTop:21,
        borderRadius:5,
        paddingHorizontal:17,
        paddingVertical:7,
    },
    text:{
        color:WARNA_BIRU,
        fontFamily:'Poppins-Bold',
        fontSize:12
    },
    button:{
        backgroundColor:WARNA_UTAMA,
        width:79,
        alignItems:'center',
        paddingVertical:2
    },
})
