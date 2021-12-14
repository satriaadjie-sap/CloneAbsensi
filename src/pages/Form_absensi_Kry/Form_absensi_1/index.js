import React, { Component, useState } from 'react'
import { ScrollView, StyleSheet, Text, View, AsyncStorage } from 'react-native'
import { FormPengisian_1_2Kry, FormPengisian_1_3,FormPengisian_1_4,
    FormPengisian_1_5Kry, FormPengisian_1_6Kry, FormPengisian_2_1Kry, FormPengisian_2_2Kry, FormPengisian_2_3Kry,
    FormPengisian_2_4Kry, FormPengisian_2_5Kry, FormPengisian_2_6Kry, HeaderFormAbsesni, InformasiDataDiriKry, ButtonSelanjutnya1Kry }
    from '../../../components'

import { LINK_API, WARNA_SEKUNDER } from '../../../utils/constants'
import axios, { Axios } from 'axios'

class Form_absensi_1 extends Component {
    constructor(props){
        super(props);
        this.state = {
            sehat:'', sehatDesc:'', sehatArr:'', sehatArrDes:'', odp:'', odpDesc:'', odpArr:'', odpArrDesc:'',
            vaksin:'', suntik:'', NVaksin:'', sertif:'', Hipertensi:'', Diabetes:'', Jantung:'', Paru:'', 
            Ginjal:'', Lever:'', Sakit:'', kendaraan:'', JKendaraan:'', rs:'', rs2:''
        }
    }

    
    componentDidMount() {    
        let username = ''    
        AsyncStorage.getItem('user', (error, result) => {
            if(result){
                //Parse result ke JSON
                let resultParsed = JSON.parse(result)
                username = resultParsed.uname
                console.log(username)

                axios
                .get(`${LINK_API}Absensi/GetDataInformasiKaryawan?username=${username}`)
                .then((res) => {
                    if(res.data[0].result === "SUCCESS") {
        
                        this.setState({
                            kryId:res.data[0].kry_id,
                            namaDepan:res.data[0].kry_nama_depan,
                            namaBelakang:res.data[0].kry_nama_belakang,
                            strDesc:res.data[0].str_desc
                        })
                        return;
                    }
                    else
                    {
                        alert('Gagal menambah data!');
                        return;
                    }
                })
                .catch(error => alert(error))
                return username;
            }
        });
    }


    rSakit = (a, b) => {
        console.log("RumahSakit " + a + " " + b)
        this.setState({
            rs: a,
            rs2: b
        })
    };

    kendaraan = (a, b) => {
        console.log("Kendaraan " + a + " " + b)
        this.setState({
            kendaraan: a,
            JKendaraan: b
        })
    };
    
    penyakit = (a, b, c, d, e, f, g) => {
        console.log("Vaksin " + a + " " + b + " " + c + " " + d)
        this.setState({
            Hipertensi: a,
            Diabetes: b,
            Jantung: c,
            Paru: d,
            Ginjal: e,
            Lever: f,
            Sakit: g
        })
    };

    vaksin = (a, b, c, d) => {
        console.log("Vaksin " + a + " " + b + " " + c + " " + d)
        this.setState({
            vaksin: a,
            suntik: b,
            NVaksin: c,
            sertif: d
        })
    };

    odpArr = (a, b) => {
        console.log("OdpArr " + a + " " + b)
        this.setState({
            odpArr: a,
            odpArrDesc: b
        })
    };
    
    keluargaOdp = (a, b) => {
        console.log("Kesehatan " + a + " " + b)
        this.setState({
            odp: a,
            odpDesc: b
        })
    };

    sehatArr = (a, b) => {
        console.log("KesehatanArr " + a + " " + b)
        this.setState({
            sehatArr: a,
            sehatArrDes: b
        })
    };
    
    sehat = (a, b) => {
        console.log("Kesehatan " + a + " " + b)
        this.setState({
            sehat: a,
            sehatDesc: b
        })
    };

    render(){
        return (
            <View>
                <ScrollView style={styles.containerScrollView}>
                    <View style={styles.containerForm}>
                        <HeaderFormAbsesni text={"Langkah 1 / 5 : Mengisi Data Diri dan Keluarga"}/>
                        <InformasiDataDiriKry id={this.state.kryId} namaDpn={this.state.namaDepan}
                        namaBlkg={this.state.namaBelakang} status={this.state.strDesc} />
                        <FormPengisian_1_2Kry/>
                        <FormPengisian_2_1Kry callBack={this.sehat}/>
                        <FormPengisian_2_2Kry callBack={this.sehatArr}/>
                        <FormPengisian_2_3Kry callBack={this.keluargaOdp}/>
                        <FormPengisian_2_4Kry callBack={this.odpArr}/>
                        <FormPengisian_1_5Kry callBack={this.kendaraan}/>
                        <FormPengisian_1_6Kry callBack={this.rSakit}/>
                        <FormPengisian_2_6Kry callBack={this.vaksin}/>
                        <FormPengisian_2_5Kry callBack={this.penyakit}/>
                    </View>
                    <View style={styles.button}>
                        {/* <ButtonBatal1/> */}
                    <ButtonSelanjutnya1Kry navigation={this.props.navigation} sehat={this.state}
                        sehatArr={this.state} keluargaOdp={this.state} odpArr={this.state}
                        vaksin={this.state} penyakit={this.state}  kendaraan={this.state} rSakit={this.state}
                    />
                    </View>
                </ScrollView>
            </View>
        )
    }
}

export default Form_absensi_1

const styles = StyleSheet.create({
    containerForm:{
        borderWidth:1,
        borderColor:WARNA_SEKUNDER,
        borderRadius:3,
        paddingHorizontal:8
    },
    button:{
        flexDirection:'row',
        justifyContent:'flex-end',
        marginVertical:5
    },
    containerScrollView:{
        paddingHorizontal:13
    }
})
