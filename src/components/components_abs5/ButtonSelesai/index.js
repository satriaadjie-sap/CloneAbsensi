import React, { useState } from 'react'
import { Alert, StyleSheet, Text, TouchableOpacity, View, AsyncStorage } from 'react-native'
import { WARNA_HITAM, WARNA_PUTIH, WARNA_UNGU_MUDA, LINK_API } from '../../../utils/constants'
import { notifikasi } from '../Notifikasi'
import axios, { Axios } from 'axios'

const ButtonSelesai = (props) => {
    const [nim, setNim] = useState('0320190027')
    const [idForm, setIdForm] = useState('3')
    const [result, setResult] = useState('SUCCESS')

    const PindahForm = () => {
        let rAbsen = props.riwayat;
        console.log("Selesai " + rAbsen)
        let data = {
            selesai: rAbsen
        }
        AsyncStorage.setItem('absensi', JSON.stringify(data));

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
        .get(`${LINK_API}Resiko/GetResikoMahasiswaById?id=${res.data[0].fma_id}`)
        .then((res) => {
            // console.log(res.data)
            console.log(res.data[0].result)
            // let mydata = JSON.parse(res.data)           
            // console.log(mydata[0].result)
//             var t = JSON.parse(res.data);
// alert(t['result'])
            // alert('Berhasil tambah data ' + res.data.result);
            if(res.data[0].result === "SUCCESS") {

                let bom_total = res.data[0].bom_total;
                let bom_resiko = res.data[0].bom_resiko;
                // let bom_resiko = "Hijau";

                notifikasi.configure();

                notifikasi.kirimNotifikasi("2", "Resiko ditempat anda", bom_resiko);
                // notifikasi.kirimNotifikasi("2", "Resiko ditempat anda", bom_resiko);
                props.navigation.navigate('Form_absensi_sudah')

                // alert('Berhasil tambah data ' + bom_resiko);
                return;
            }
            else
            {
                alert('Gagal menambah data!');
                return;
            }
        })
        .catch(error => alert(error))

                    return;
            })
            // .catch(error => alert(error))

                    };
        });
    }
    
    return (        
        <View  style={styles.button}>
            <TouchableOpacity
                onPress={PindahForm}
                // onPress={() => Alert.alert("Selesai")}
            >
                <Text style={styles.textButton}>SELESAI</Text>
            </TouchableOpacity>
        </View>     
    )
}

export default ButtonSelesai

const styles = StyleSheet.create({    
    button:{
        backgroundColor:WARNA_UNGU_MUDA,
        width:85,
        height:25,
        justifyContent:'center',
    },
    textButton:{
        color:WARNA_PUTIH,
        textAlign:'center',
        fontFamily:"Poppins-Light",
        fontSize:13
    },    
})
