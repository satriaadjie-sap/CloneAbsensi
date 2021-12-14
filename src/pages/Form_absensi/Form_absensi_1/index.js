import React, { Component, useState } from 'react'
import { ScrollView, StyleSheet, Text, View, AsyncStorage } from 'react-native'
import { ButtonBatal1, ButtonSelanjutnya1, FormPengisian_1_1, FormPengisian_1_2, FormPengisian_1_3, FormPengisian_1_4,
    FormPengisian_1_5,FormPengisian_1_6, HeaderFormAbsesni, InformasiDataDiri }
    from '../../../components'
import { LINK_API, WARNA_SEKUNDER } from '../../../utils/constants'
import axios, { Axios } from 'axios'
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from 'react-native/Libraries/Renderer/implementations/ReactNativeRenderer-dev'

class Form_absensi_1 extends Component {
    constructor(props){
        super(props);
        this.state = {
            nim:'', nama:'', prodi:'', tingkat:'', status:'', hp:'', kelamin:'',
            astra:'', astraDesc:'', kontak:'', profesi:'', kendaraan:'', JKendaraan:'',
            rs:'', rs2:'', 
        }
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

    kontak = (a, b) => {
        console.log("Kontak Temen " + a + " " + b)
        this.setState({
            kontak: a,
            profesi: b
        })
    };

    kosTemen = (a, b) => {
        console.log("Kos Temen " + a + " " + b)
        this.setState({
            astra: a,
            astraDesc: b
        })
    };

    componentDidMount() {
        let username = ''
        
        AsyncStorage.getItem('user', (error, result) => {
            if(result){
                //Parse result ke JSON
                let resultParsed = JSON.parse(result)
                username = resultParsed.uname
                console.log(username)

                axios
                .get(`${LINK_API}Absensi/GetDataInformasiMahasiswa?username=${username}`)
                .then((res) => {
                    if(res.data[0].result === "SUCCESS") {

                        this.setState({
                            nim:res.data[0].mhs_id,
                            nama:res.data[0].mhs_nama,
                            prodi:res.data[0].mhs_kon_nama,
                            tingkat:res.data[0].mhs_tingkat,
                            status:res.data[0].mhs_jalur,
                            hp:res.data[0].mhs_hp,
                            kelamin:res.data[0].mhs_jenis_kelamin
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

    render(){
        return (
        <View>
            <ScrollView style={styles.containerScrollView}>
                <View style={styles.containerForm}>
                    <HeaderFormAbsesni text={"Langkah 1 / 5 : Mengisi Data Diri dan Keluarga "}/>
                    <InformasiDataDiri nim={this.state.nim} 
                    nama={this.state.nama} nomor={this.state.hp} status={this.state.status}
                    prodi={this.state.prodi} tingkat={this.state.tingkat} />
                    <FormPengisian_1_1/>
                    <FormPengisian_1_2/>
                    <FormPengisian_1_3 callBack={this.kosTemen}/>
                    <FormPengisian_1_4 callBack={this.kontak} />
                    <FormPengisian_1_5 callBack={this.kendaraan} />
                    <FormPengisian_1_6 callBack={this.rSakit} />
                </View>
                <View style={styles.button}>
                    <ButtonSelanjutnya1 navigation={this.props.navigation} kos={this.state}
                    kontak={this.state} kendaraan={this.state} rSakit={this.state}
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