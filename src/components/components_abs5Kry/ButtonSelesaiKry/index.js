import React, {useState} from 'react'
import axios, { Axios } from 'axios'
import { Alert, StyleSheet, Text, TouchableOpacity, View, AsyncStorage } from 'react-native'
import { WARNA_HITAM, WARNA_PUTIH, WARNA_UNGU_MUDA, LINK_API  } from '../../../utils/constants'
import { notifikasi } from '../Notifikasi'

const ButtonSelesaiKry = (props) => {
    const [npk, setNpk] = useState('suhendra')
    const [idForm, setIdForm] = useState('2')
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
                setNpk(resultParsed.uname)
                console.log(npk)
                console.log(resultParsed.uname)
        axios
            .get(`${LINK_API}Resiko/GetDataFormKaryawanById?id=${npk}`)
            .then((res) => {
                // if(res.data.result === "SUCCESS") {

                    setIdForm(res.data[0].for_id)
                    // idForm = res.data.fma_id;

                    console.log("coba 3 " + res.data[0].for_id);
                    return;
            })
            .catch(error => alert(error))
        axios
            .get(`${LINK_API}Resiko/GetDataFormKaryawanById?id=${npk}`)
            .then((res) => {
                // if(res.data.result === "SUCCESS") {

                    setIdForm(res.data[0].for_id)
                    // idForm = res.data.fma_id;

                    console.log("coba 3 " + res.data[0].for_id);
                    return;
            })
            .catch(error => alert(error))
        axios
        .get(`${LINK_API}Resiko/GetResikoKaryawanById?id=${idForm}`)
        .then((res) => {
            // console.log(res.data)
            console.log(res.data[0].bob_resiko)
            
            if(res.data[0].result === "SUCCESS") {

                let bom_total = res.data[0].bob_total;
                let bom_resiko = res.data[0].bob_resiko;
                // let bom_resiko = "Hijau";

                notifikasi.configure();
                // notifikasi.buatChannel("2");
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

export default ButtonSelesaiKry

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
