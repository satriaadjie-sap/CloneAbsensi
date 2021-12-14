import React, { Component, useState } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { FormPengisian_2_1, HeaderFormAbsesni, FormPengisian_2_2 , FormPengisian_2_3,
    FormPengisian_2_4, FormPengisian_2_5, FormPengisian_2_6, FormPengisian_2_7, ButtonBatal2, ButtonSelanjutnya2} from '../../../components'

import { WARNA_SEKUNDER } from '../../../utils/constants'

// let astra = ''
function kosTemen(a, b){
    console.log("Saya ganteng " + a + "  " + b)
    return a
};

class Form_absensi_2 extends Component {
    constructor(props){
        super(props);
        this.state = {
            sehat:'', sehatDesc:'', sehatArr:'', sehatArrDes:'', odp:'', odpDesc:'', odpArr:'', odpArrDesc:'',
            vaksin:'', suntik:'', NVaksin:'', sertif:'', Hipertensi:'', Diabetes:'', Jantung:'', Paru:'', 
            Ginjal:'', Lever:'', Sakit:''
        }
    }

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
                        <HeaderFormAbsesni text={"Langkah 2 / 5 : Mengisi Riwayat Kesehatan"}/>
                        <FormPengisian_2_1 callBack={this.sehat} />
                        <FormPengisian_2_2 callBack={this.sehatArr} />
                        <FormPengisian_2_3 callBack={this.keluargaOdp} />
                        <FormPengisian_2_4 callBack={this.odpArr} />
                        <FormPengisian_2_6 callBack={this.vaksin} />
                        <FormPengisian_2_5 callBack={this.penyakit} />
                    </View>
                    <View style={styles.button}>
                        <ButtonBatal2 navigation={this.props.navigation}/>
                        <ButtonSelanjutnya2 navigation={this.props.navigation} sehat={this.state}
                        sehatArr={this.state} keluargaOdp={this.state} odpArr={this.state}
                        vaksin={this.state} penyakit={this.state} />
                    </View>
                </ScrollView>
            </View>
        )
    }
}

export default Form_absensi_2

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
    } 
})