// import React from 'react'
// import AsyncStorage from '@react-native-community/async-storage';
import React, {useState, createRef, useEffect} from 'react'
import axios, { Axios } from 'axios'
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { WARNA_BIRU, WARNA_BIRU_MUDA, WARNA_HITAM, WARNA_PUTIH, LINK_API } from '../../../utils/constants'

const ButtonSelanjutnya1Kry = ({
    navigation, kendaraan, rSakit, sehat, sehatArr, keluargaOdp, odpArr, vaksin, penyakit
}) => {
    const [step, setStep] = useState('Step 1')
    const [npk, setNpk] = useState('suhendra')
    const [hamil, setHamil] = useState('tidak')
    const [tinggal, setTinggal] = useState('Jakarta')
    const [posisi, setPosisi] = useState('Bandung')

    const [kesehatan, setKesehatan] = useState('tes')
    const [kesehatanDesc, setKesehatanDesc] = useState('tes')
    const [kesehatanFam, setKesehatanFam] = useState('tes')
    const [kesehatanFamDesc, setKesehatanFamDesc] = useState('tes')
    const [covid, setCovid] = useState('tes')
    const [covidDesc, setCovidDesc] = useState('tes')
    const [covidArr, setCovidArr] = useState('tes')
    const [covidArrDesc, setCovidArrDesc] = useState('tes')
    const [riwayat, setRiwayat] = useState('-')

    const [kendaran, setKendaraan] = useState('tes')
    const [rs, setRS] = useState('tes')
    const [rsDesc, setRSDesc] = useState('tes')
    const [banjirArr, setBanjirArr] = useState('y')
    const [banjirRumah, setBanjirRumah] = useState('y')
    const [sudahVaksin, setSudahVaksin] = useState('tes')
    const [jumlahVaksin, setJumlahVaksin] = useState('tes')
    const [namaVaksin, setNamaVaksin] = useState('tes')
    const [sertifVaksin, setSertifVaksin] = useState('tes')

    const PindahForm = () => {
        props.navigation.navigate('Form_absensi_4')
    }

    const handleSubmitPress = (
        kendaran, kendaraanDesc, rs, rsDesc
        ) => {

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

        axios
            .post(`${LINK_API}Absensi/CreateKarAbsensi?step=${step}&npk=${npk}&fab_is_hamil=${hamil}
            &tempatTinggal=${tinggal}
            &lokasi=${posisi}&kesehatan=${kesehatan}&kesehatanDesc=${kesehatanDesc}
            &kesehatanFam=${kesehatanFam}&kesehatanFamDesc=${kesehatanFamDesc}&covid=${covid}
            &covidDesc=${covidDesc}&covidArr=${covidArr}&covidArrDesc=${covidArrDesc}&riwayat=${riwayat}
            &kendaraan=${kendaran}&RS=${rs}&RSDesc=${rsDesc}&banjirArr=${banjirArr}&banjirRumah=${banjirRumah}
            &sudahVaksin=${sudahVaksin}&jumlahVaksin=${jumlahVaksin}&namaVaksin=${namaVaksin}
            &sertifVaksin=${sertifVaksin}`)
            .then((res) => {
                
                if(res.data.result === "SUCCESS") {
                    // let step = res.data.step;
                    let for_id = res.data.for_id;
                
                    // let data = {
                    //     step: step,
                    //     nim: nim
                    // }
                    // console.log(data);
                    // navigation.replace('Absensi4');
                    // navigation.navigate('Absensi4');
                    navigation.navigate('Form_absensi_4')

                    //notif kalo berhasil diubah
                    // alert('Berhasil tambah data ' + for_id);
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
            .finally(() => setLoading(false));
            };
            
    return (        
        <View  style={styles.button}>
            <TouchableOpacity
                // onPress={PindahForm}
                onPress={() => handleSubmitPress(
                    kendaraan.kendaraan, kendaraan.JKendaraan, rSakit.rs, rSakit.rs2,
                    sehat.sehat, sehat.sehatDesc, sehatArr.sehatArr, sehatArr.sehatArrDesc, 
                    keluargaOdp.odp, keluargaOdp.odpDesc, odpArr.odpArr, odpArr.odpArrDesc,
                    vaksin.vaksin, vaksin.suntik, vaksin.NVaksin, vaksin.sertif,
                    penyakit.Hipertensi, penyakit.Diabetes, penyakit.Jantung, penyakit.Paru,
                    penyakit.Ginjal, penyakit.Lever, penyakit.Sakit
                    )}
                // onPress={() => Alert.alert("Selanjutnya")}
            >
                <Text style={styles.textButton}>SELANJUTNYA</Text>
            </TouchableOpacity>
        </View>                        
    )
}

export default ButtonSelanjutnya1Kry

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
