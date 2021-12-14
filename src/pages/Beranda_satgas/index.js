import React, { Component, useState, createRef, useEffect } from 'react'
import { AsyncStorage } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
// import { Beranda_satgas, HeaderApps } from '../../components'
import { ButtonIsiFormulir, HeaderApps, HeaderInformation, InformasiPengisian, NotifPengisian } from '../../components'
import { WARNA_PUTIH, WARNA_UTAMA, WARNA_SEKUNDER } from '../../utils/constants'

const Beranda_satgas = ({hasAbsen=false, navigation}) => {

   // const navigation = useNavigation();

    AsyncStorage.getItem('user', (error, result) => {
        if(result){
            //Parse result ke JSON
            let resultParsed = JSON.parse(result)
            //usern = resultParsed.uname;
        }
    });

    // const loginToKaryawan = () => {
    //     navigation.replace('MainAppKry');
    //     return;
    // };

    // const loginToSatgas = () => {
    //     navigation.replace('MainAppSatgas');
    //     return;
    // };

    return (
        <View style={ styles.page }>
            {/* <View style={styles.container}> */}
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.replace("MainAppKry")}>
                        <Text style={styles.text}>Login sebagai Karyawan</Text>
                    </TouchableOpacity>            
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.replace("MainAppSatgas")}>
                        <Text style={styles.text}>Login sebagai Satgas</Text>
                    </TouchableOpacity>            
                </View>
                {/* <View style={styles.buttonContainer}>                    
                        <View style={styles.button}>
                            <TouchableOpacity
                                style={styles.touch}>
                                <Text style={styles.text}
                                    onPress={() => navigation.replace("MainAppKry")}>
                                    Login Sebagai Karyawan
                                </Text>
                            </TouchableOpacity>            
                        </View>
                    </View>
                    <View style={styles.buttonContainer}>                    
                        <View style={styles.button}>
                            <TouchableOpacity
                                style={styles.touch}>
                                <Text style={styles.text}
                                    onPress={() => navigation.replace("MainAppSatgas")}>
                                    Login Sebagai Satgas
                                </Text>
                            </TouchableOpacity>            
                        </View>
                    </View> */}
            {/* </View> */}
        </View>
    );
}

export default Beranda_satgas

const styles = StyleSheet.create({
    // page:{ 
    //     flex: 1, 
    //     backgroundColor:WARNA_PUTIH
    // },
    // button:{
    //     backgroundColor:WARNA_UTAMA,
    //     width:79,
    //     alignItems:'center',
    //     paddingVertical:2
    // },
    // containerbut:{        
    //     alignItems:'flex-end'       
    // },
    // container:{
    //     borderWidth:1,
    //     borderColor:WARNA_SEKUNDER,
    //     borderRadius:5,
    //     width:254,
    //     padding:9,
    // },
    // text:{
    //     color:WARNA_PUTIH,
    //     fontSize:12,
    //     fontFamily:"Poppins-Light"
    // },
    page:{ 
        flex: 1, 
        backgroundColor:WARNA_PUTIH,
        justifyContent:'center',
        alignItems:'center'
    },
    container:{
        borderWidth:1,
        borderRadius:5,
        borderColor:WARNA_SEKUNDER,
        paddingHorizontal:9,        
        width:250
    },
    logo:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:14
    },
    viewInput:{
        marginVertical:20
    },
    textInput:{                
        backgroundColor:WARNA_SEKUNDER,        
        paddingLeft:10,
        textAlignVertical:'center',
        marginVertical:5,
        fontFamily:"Poppins-Light",
        fontSize:12
    },
    buttonContainer:{        
        marginTop:14,
        marginBottom:14,
        alignItems:'center'
    },
    
    button:{
        backgroundColor:WARNA_UTAMA,        
        width:200,
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

// import React from 'react'
// import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
// import { ButtonIsiFormulir, HeaderApps, HeaderInformation, InformasiPengisian, NotifPengisian } from '../../components'
// import { WARNA_BG_FORM, WARNA_MERAH, WARNA_PUTIH, WARNA_SEKUNDER } from '../../utils/constants'

// let rolget = '';

// const Beranda_satgas = ({hasAbsen=false, navigation}) => {

// // const [rolen, setRolen] = useState('');
// // const data = "Hello Everyone";

// //     AsyncStorage.getItem('user', (error, result) => {
// //         if(result){
// //             //Parse result ke JSON
// //             let resultParsed = JSON.parse(result)
// //             rolget = resultParsed.role;
// //         }
// //     });

//     //const myFunction = () => {
//         // if (rolget == "ROL23"){
//         //     setRolen('Mahasiswa');
//         //     //rolen => setRolen(rolen)        
//         // }
//         // else if (rolget== "ROL01"){
//         //     setRolen('Karyawan');
//         //     //rolen => setRolen(rolen) 
//         // }
//     //}

//     return (
//         <View style={ styles.page }>            
//             <ScrollView  style={styles.containerScroll}>
//                 <View style={styles.container}>
//                     <Text style={styles.textUtama}>
//                         Selamat Datang!{"\n\n"}
//                         Ini merupakan halaman beranda untuk Satgas.{"\n\n"}
                        
//                     </Text>
//                     {/* <InformasiPengisian data={data} />  */}
//                     <InformasiPengisian /> 
//                     {/* NOTIFIKASI PENGISIAN AKAN AKTIF JIKA SUDAH MENGISI FORMULIR*/}
//                     {/* BUTTON ISI FORMULIR AKAN AKTTIF JIKA BELUM MENGISI FORMULIR */}
//                     {hasAbsen == true ? <NotifPengisian/>  : <ButtonIsiFormulir navigation = {navigation}/>}
//                     <Text style={styles.textKesulitan}>
//                         Jika terdapat kesulitan tentang cara penggunaan aplikasi ini, silahkan menghubungi MIS / Bang Candra.
//                     </Text>
//                 </View>                 
//             </ScrollView>
//         </View>
//     )
// }

// export default Beranda_satgas

// const styles = StyleSheet.create({
//     page:{ 
//         flex: 1, 
//         backgroundColor:WARNA_PUTIH,        
//     },
//     containerScroll:{        
//         height:300
//     },
//     container:{
//         marginHorizontal:23,
//         marginBottom:10,        
//         paddingTop:10
//     },
//     textUtama:{
//         fontFamily:'Poppins-Light',
//         fontSize:12
//     },
//     textKesulitan:{
//         fontFamily:'Poppins-Light',
//         fontSize:13,
//         marginTop:10,
//         borderTopWidth:1,
//         borderColor:WARNA_SEKUNDER,
//         paddingTop:10
//     }
// })