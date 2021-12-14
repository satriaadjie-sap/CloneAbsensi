import React, {useState} from 'react'
import axios, { Axios } from 'axios'
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { WARNA_BIRU, WARNA_BIRU_MUDA, WARNA_HITAM, WARNA_PUTIH, LINK_API } from '../../../utils/constants'
// import { Form_absensi_sudah, Form_absensi_1, Form_absensi_2, Form_absensi_3,
//     Form_absensi_4, Form_absensi_5, Form_absensi_detail } from './Form_routing'

const ButtonSelanjutnya3Kry = (props) => {

    const nav = useNavigation();

    const [step, setStep] = useState('Step 1')
    const [nim, setNim] = useState('0320190003')
    const [tinggal, setTinggal] = useState('Jakarta')
    const [posisi, setPosisi] = useState('Bandung')
    const [astra, setAstra] = useState('y')
    const [astraDesc, setAstraDesc] = useState('tes')
    const [noHP, setNohp] = useState('0821764723')
    const [profesi, setProfesi] = useState('tes')
    const [luarNegri, setLuarNegri] = useState('tes')
    const [luarNegriDesc, setLuarNegriDesc] = useState('tes')

    const [kesehatan, setKesehatan] = useState('tes')
    const [kesehatanDesc, setKesehatanDesc] = useState('tes')
    const [kesehatanFam, setKesehatanFam] = useState('tes')
    const [kesehatanFamDesc, setKesehatanFamDesc] = useState('tes')
    const [covid, setCovid] = useState('tes')
    const [covidDesc, setCovidDesc] = useState('tes')
    const [covidArr, setCovidArr] = useState('tes')
    const [covidArrDesc, setCovidArrDesc] = useState('tes')
    const [riwayat, setRiwayat] = useState('-')
    const [ojt, setOjt] = useState('tes')

    const [ojtAlamat, setOjtAlamat] = useState('tes')
    const [ojtDesc, setOjtDesc] = useState('tes')
    const [kendaraan, setKendaraan] = useState('tes')
    const [kendaraanDesc, setKendaraanDesc] = useState('tes')
    const [rs, setRS] = useState('tes')
    const [rsDesc, setRSDesc] = useState('tes')
    const [sudahVaksin, setSudahVaksin] = useState('tes')
    const [jumlahVaksin, setJumlahVaksin] = useState('tes')
    const [namaVaksin, setNamaVaksin] = useState('tes')
    const [sertifVaksin, setSertifVaksin] = useState('tes')

    const handleSubmitPress = (props) => {
        axios
            .post(`${LINK_API}Absensi/CreateAbsensi?step=${step}&nim=${nim}&tempatTinggal=${tinggal}
            &posisi=${posisi}&astra=${astra}&astraDesc=${astraDesc}&noHp=${noHP}&profesi=${profesi}
            &luarNegri=${luarNegri}&luarNegriDesc=${luarNegriDesc}&kesehatan=${kesehatan}
            &kesehatanDesc=${kesehatanDesc}&kesehatanFam=${kesehatanFam}&kesehatanFamDesc=${kesehatanFamDesc}
            &covid=${covid}&covidDesc=${covidDesc}&covidArr=${covidArr}&covidArrDesc=${covidArrDesc}
            &riwayat=${riwayat}&ojt=${ojt}&ojtAlamat=${ojtAlamat}&ojtDesc=${ojtDesc}&kendaraan=${kendaraan}
            &kendaraanDesc=${kendaraanDesc}&RS=${rs}&RSDesc=${rsDesc}&sudahVaksin=${sudahVaksin}
            &jumlahVaksin=${jumlahVaksin}&namaVaksin=${namaVaksin}&sertifVaksin=${sertifVaksin}`)
            .then((res) => {
                if(res.data.result === "SUCCESS") {
                    // let step = res.data.step;
                    let fma_id = res.data.fma_id;
                
                    // let data = {
                    //     step: step,
                    //     nim: nim
                    // }
                    // console.log(data);
                    props.navigation.navigate('/src/pages/Form_absensi/Form_absensi_4')
                    // navigation.replace('MainAppKry');
                    // nav.navigate('Form_absensi_4');

                    //notif kalo berhasil diubah
                    alert('Berhasil tambah data ' + fma_id);
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
            
    return (
        <View  style={styles.button}>
            <TouchableOpacity
                onPress={handleSubmitPress}
                // onPress={() => props.navigation.navigate("Form Absensi")}
                // onPress={() => navigation.replace('Absensi4')}
                // onPress={() => Alert.alert("Selanjutnya")}
            >
                <Text style={styles.textButton}>SELANJUTNYA</Text>
            </TouchableOpacity>
        </View>                        
    )
}

export default ButtonSelanjutnya3Kry

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
