import React, { Component, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { FormPengisian_5_1, HeaderFormAbsesni, ButtonBatal3, ButtonSelanjutnya3, ButtonSelesaiKry } from '../../../components'
import { WARNA_SEKUNDER } from '../../../utils/constants'

class Form_absensi_5 extends Component {
    constructor(props){
        super(props);
        this.state = {
            kryId:'',
            namaDepan:'',
            namaBelakang:'',
            strDesc:''
        } 
    }
    render(){
        return (
            <View>
                <View style={styles.containerForm}>
                    <HeaderFormAbsesni text={"Langkah 5 / 5 : Unduh Formulir Deklarasi Kesehatan"}/>            
                    <FormPengisian_5_1/>                
                </View>
                <View style={styles.button}>
                    <ButtonSelesaiKry navigation={this.props.navigation}/>
                </View>
            </View>
        )
    }
}

export default Form_absensi_5

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
