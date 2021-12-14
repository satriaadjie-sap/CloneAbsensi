// import React from 'react'
// import AsyncStorage from '@react-native-community/async-storage';
import { AsyncStorage } from 'react-native'
import React, {useState, createRef, useEffect} from 'react'
import axios, { Axios } from 'axios'
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { WARNA_BIRU, WARNA_BIRU_MUDA, WARNA_HITAM, WARNA_PUTIH, LINK_API } from '../../../utils/constants'

const ButtonSelanjutnya1 = ({
        navigation, kos, kontak, kendaraan, rSakit
    }) => {
    // let tinggal = ''

    // console.log("Saya ganteng 2 " + kos)

    const [step, setStep] = useState('Step 1')
    const [nim, setNim] = useState('0320190024')
    const [tinggal, setTinggal] = useState('Jl.Papanggo, Jawa Barat, Kabupaten Bekasi, Cikarang Selatan, Serang')
    const [posisi, setPosisi] = useState('Jl.Papanggo, Jawa Barat, Kabupaten Bekasi, Cikarang Selatan, Serang')
    // const [posisi, setPosisi] = useState('Bandung')
    const [astra, setAstra] = useState('y')
    const [astraDesc, setAstraDesc] = useState('-')
    const [noHP, setNohp] = useState('-')
    const [profesi, setProfesi] = useState('-')
    const [kendaran, setKendaraan] = useState('t')
    const [kendaraanDesc, setKendaraanDesc] = useState('-')
    const [rs, setRS] = useState('t')
    const [rsDesc, setRSDesc] = useState('-')

    const PindahForm = (a, b) => {
        
        console.log("BtnSelanjutnya "+a + "coba" + b)
        
        // AsyncStorage.getItem('provinsi', (error, result) => {
        //     if(result){
        //         //Parse result ke JSON
        //         let resultParsed = JSON.parse(result)
        //         tinggal = resultParsed.myProvinsi
        //     }
        //     else 
        //     {
        //         // tinggal = 5;
        //     }
        // });

        // alert('Berhasil tambah data ' + tinggal + ' data');
        // navigation.navigate('Form_absensi_2')
    }

    const handleSubmitPress = (astra, astraDesc, noHP, profesi, 
        kendaran, kendaraanDesc, rs, rsDesc) => {
        
            if(astra==""){
                astra = "-"
            }
            if(astraDesc==""){
                astraDesc = "-"
            }
            if(noHP==""){
                noHP = "-"
            }
            if(profesi==""){
                profesi = "-"
            }
            if(kendaran==""){
                kendaran = "-"
            }
            if(kendaraanDesc==""){
                kendaraanDesc = "-"
            }
            if(rs==""){
                rs = "-"
            }
            if(rsDesc==""){
                rsDesc = "-"
            }
        // console.log("BtnSelanjutnya "+a + " " + b)
        // console.log("BtnSelanjutnya2 "+c + " " + d)
        // console.log("BtnSelanjutnya3 "+e + " " + f)
        // console.log("BtnSelanjutnya4 "+g + " " + h)

        AsyncStorage.getItem('user', (error, result) => {
            if(result){
                //Parse result ke JSON
                let resultParsed = JSON.parse(result)
                // username = resultParsed.uname
                setNim(resultParsed.uname)
                console.log(resultParsed.uname)

        console.log(nim + " " + tinggal + " " + posisi + " " + astra + " " + astraDesc + " " + noHP + " " +
        profesi + " " + kendaran + " " + kendaraanDesc + " " + rs + " " + rsDesc)
        axios
            .post(`${LINK_API}Absensi/CreateAbsensi?nim=${resultParsed.uname}&tempatTinggal=${tinggal}
            &posisi=${posisi}&astra=${astra}&astraDesc=${astraDesc}&noHp=${noHP}&profesi=${profesi}
            &kendaraan=${kendaran}&kendaraanDesc=${kendaraanDesc}&RS=${rs}&RSDesc=${rsDesc}`)
            .then((res) => {
                console.log(res.data)
                if(res.data.result === "SUCCESS") {
                    // let step = res.data.step;
                    let fma_id = res.data.fma_id;
                
                    
                    navigation.navigate('Form_absensi_2')

                    return;
                }
                else
                {
                    //notif gagal diubah
                    console.log(error);
                    alert('Gagal menambah data!');
                    return;
                }    
            })
            .catch(error => alert(error))
            // .finally(() => setLoading(false));
            };
    });
}
            
    return (
        <View  style={styles.button}>
            <TouchableOpacity
                // onPress={handleSubmitPress}
                // onPress={() => PindahForm(kos.astra, kos.astraDesc)}
                onPress={() => handleSubmitPress(
                    kos.astra, kos.astraDesc, kontak.kontak, kontak.profesi, 
                    kendaraan.kendaraan, kendaraan.JKendaraan, rSakit.rs, rSakit.rs2
                    )}
                // onPress={() => Alert.alert("Selanjutnya")}
            >
                <Text style={styles.textButton}>SELANJUTNYA</Text>
            </TouchableOpacity>
        </View>                        
    )
}

export default ButtonSelanjutnya1

const styles = StyleSheet.create({    
    button:{
        backgroundColor:WARNA_BIRU_MUDA,
        width:100,
        height:25,
        justifyContent:'center',
        marginLeft:5
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