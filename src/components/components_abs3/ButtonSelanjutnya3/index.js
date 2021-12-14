import React, {useState} from 'react'
import axios, { Axios } from 'axios'
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import { AsyncStorage } from 'react-native'
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { WARNA_BIRU, WARNA_BIRU_MUDA, WARNA_HITAM, WARNA_PUTIH, LINK_API } from '../../../utils/constants'
// import { Form_absensi_sudah, Form_absensi_1, Form_absensi_2, Form_absensi_3,
//     Form_absensi_4, Form_absensi_5, Form_absensi_detail } from './Form_routing'

const ButtonSelanjutnya3 = ({
        navigation, ojt
    }) => {
    
    const [nim, setNim] = useState('0320190024')
    const [idForm, setIdForm] = useState('5')

    const [ojtt, setOjt] = useState('t')
    const [ojtAlamat, setOjtAlamat] = useState('-')
    const [ojtDesc, setOjtDesc] = useState('-')

    const PindahForm = () => {
        navigation.navigate('Form_absensi_4')
    }

    const handleSubmitPress = (a, b, c) => {
        AsyncStorage.getItem('user', (error, result) => {
            if(result){
                //Parse result ke JSON
                let resultParsed = JSON.parse(result)
                // username = resultParsed.uname
                setNim(resultParsed.uname)
                console.log(nim)
                console.log(resultParsed.uname)
        axios
            .get(`${LINK_API}Resiko/GetDataFormMahasiswaById?id=${resultParsed.uname}`)
            .then((res) => {
                // if(res.data.result === "SUCCESS") {

                    setIdForm(res.data[0].fma_id)
                    // idForm = res.data.fma_id;

                    console.log("coba 3 " + res.data[0].fma_id);
                    axios
            .post(`${LINK_API}Absensi/CreateAbsensi3?nim=${resultParsed.uname}&idForm=${res.data[0].fma_id}
            &ojt=${ojtt}&ojtAlamat=${ojtAlamat}&ojtDesc=${ojtDesc}`)
            .then((res) => {
                if(res.data.result === "SUCCESS") {
                    // let step = res.data.step;
                    let fma_id = res.data.fma_id;
                
                    // let data = {
                    //     step: step,
                    //     nim: nim
                    // }
                    // console.log(data);
                    navigation.navigate('Form_absensi_4')
                    // navigation.replace('MainAppKry');
                    // nav.navigate('Form_absensi_4');

                    //notif kalo berhasil diubah
                    // alert('Berhasil tambah data ' + fma_id);
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
                    return;
            })
            // .catch(error => alert(error))

        
            // .finally(() => setLoading(false));
            };
        });
    }

    return (
        <View  style={styles.button}>
            <TouchableOpacity
                // onPress={PindahForm}
                onPress={() => handleSubmitPress(
                    ojt.ojt, ojt.posisi, ojt.perusahaan, ojt.magang
                    )}
                // onPress={() => props.navigation.navigate("Form Absensi")}
                // onPress={() => navigation.replace('Absensi4')}
                // onPress={() => Alert.alert("Selanjutnya")}
            >
                <Text style={styles.textButton}>SELANJUTNYA</Text>
            </TouchableOpacity>
        </View>                        
    )
}

export default ButtonSelanjutnya3

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