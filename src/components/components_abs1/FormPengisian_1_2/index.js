import React, { Component, useState } from 'react'
import {Picker} from '@react-native-picker/picker'
import {StyleSheet, Text, TextInput, View } from 'react-native'
import { WARNA_BG_FORM, WARNA_HITAM, WARNA_MERAH, WARNA_PUTIH, WARNA_SEKUNDER } from '../../../utils/constants'
import ButtonSalin from '../ButtonSalin'
import InformasiTinggalBersama from '../InformasiTinggalBersama'


class FormPengisian_1_2 extends Component {
    state={
        selectedValue:'',
        provinsi:[],
        selectedProvinsi:'',
        kotakabupaten:[],
        selectedKotakabupaten:'',
        kecamatan:[],
        selectedKecamatan:'',
        kelurahan:[],
        selectedKelurahan:'' 
    }
    GetDataProvinsi = () => {
        fetch('https://dev.farizdotid.com/api/daerahindonesia/provinsi')
        .then(response => response.json())
        .then(json => {
            console.log(json.provinsi)
            this.setState({
                provinsi:json.provinsi
            })
        })
    }
    GetDataKotaKabupaten = (id_provinsi) => {
        fetch('https://dev.farizdotid.com/api/daerahindonesia/kota?id_provinsi='+id_provinsi)
        .then(response => response.json())
        .then(json => {
            console.log("Kab"+json.kota_kabupaten)
            this.setState({
                kotakabupaten:json.kota_kabupaten
            })
        })
    }
    GetDataKecamatan = (id_kota) => {
        fetch('https://dev.farizdotid.com/api/daerahindonesia/kecamatan?id_kota='+id_kota)
        .then(response => response.json())
        .then(json => {
            console.log(json.kecamatan)
            this.setState({
                kecamatan:json.kecamatan
            })
        })
    }
    GetDataKelurahan = (id_kecamatan) => {
        fetch('https://dev.farizdotid.com/api/daerahindonesia/kelurahan?id_kecamatan='+id_kecamatan)
        .then(response => response.json())
        .then(json => {
            console.log(json.kelurahan)
            this.setState({
                kelurahan:json.kelurahan
            })
        })
    }
    componentDidMount() {
        this.GetDataProvinsi()        
        }
    render(){
        let myProvinsi = this.state.provinsi.map((myValue,myIndex)=>{
            return(
                <Picker.Item label={myValue.id + ' - ' + myValue.nama} value={myValue.id} key={myIndex}/>
            )
        });        
        let myKotakabupaten = this.state.kotakabupaten.map((myValue,myIndex)=>{
            return(
                <Picker.Item label={myValue.id + ' - ' + myValue.nama} value={myValue.id} key={myIndex}/>
            )
        });
        let myKecamatan = this.state.kecamatan.map((myValue,myIndex)=>{
            return(
                <Picker.Item label={myValue.id + ' - ' + myValue.nama} value={myValue.id} key={myIndex}/>
            )
        });
        let myKelurahan = this.state.kelurahan.map((myValue,myIndex)=>{
            return(
                <Picker.Item label={myValue.id + ' - ' + myValue.nama} value={myValue.id} key={myIndex}/>
            )
        });     
        return (
            <View style={styles.container}>
    
                {/* Nama Jalan/Blok/RT dan RW */}
                <View style={styles.containerQuestion}>
                    <Text style={styles.textHeader}>
                    Nama Jalan/Blok/RT dan RW 
                        <Text style={styles.Mandatory}> *</Text>
                    </Text>
                    <TextInput 
                            style={styles.textInput}                    
                        />
                </View>
    
                {/* Provinsi */}
                <View style={styles.containerQuestion}>
                    <Text style={styles.textHeader}>
                    Provinsi 
                        <Text style={styles.Mandatory}> *</Text>
                    </Text>
                    <View style={styles.comboBox}>
                        <Picker
                            selectedValue={this.state.selectedProvinsi} 
                            onValueChange={
                                (value)=>this.setState(
                                    {selectedProvinsi:value},
                                    this.GetDataKotaKabupaten(value),
                                    this.GetDataKecamatan(-1),
                                    this.GetDataKelurahan(-1)
                                )
                            }
                            mode="dropdown"
                            backgroundColor={WARNA_PUTIH}
                            fontSize="13"                            
                        >
                            <Picker.Item label="-- Pilih --" value="" />
                            {myProvinsi}
                        </Picker>
                    </View>
                </View>
    
                {/* Kota/Kabupaten */}
                <View style={styles.containerQuestion}>
                    <Text style={styles.textHeader}>
                    Kota/Kabupaten 
                        <Text style={styles.Mandatory}> *</Text>
                    </Text>
                    <View style={styles.comboBox}>
                        <Picker
                            selectedValue={this.state.selectedKotakabupaten} 
                            onValueChange={
                                (value)=>this.setState(
                                    {selectedKotakabupaten:value},
                                    this.GetDataKecamatan(value),                                    
                                    this.GetDataKelurahan(-1)
                                )
                            }
                            mode="dropdown"
                            backgroundColor={WARNA_PUTIH}
                            fontSize="13"                            
                        >
                            <Picker.Item label="-- Pilih --" value="" />
                            {myKotakabupaten}
                        </Picker>
                    </View>
                </View>
    
                {/* Kecamatan */}
                <View style={styles.containerQuestion}>
                    <Text style={styles.textHeader}>
                    Kecamaatan 
                        <Text style={styles.Mandatory}> *</Text>
                    </Text>
                    <View style={styles.comboBox}>
                        <Picker
                            selectedValue={this.state.selectedKecamatan} 
                            onValueChange={
                                (value)=>this.setState({selectedKecamatan:value},
                                this.GetDataKelurahan(value))
                            }                                             
                            mode="dropdown"
                            backgroundColor={WARNA_PUTIH}
                            fontSize="13"                            
                        >
                            <Picker.Item label="-- Pilih --" value="" />
                            {myKecamatan}
                        </Picker>
                    </View>
                </View>
    
                {/* Desa/Kelurahan */}
                <View style={styles.containerQuestion}>
                    <Text style={styles.textHeader}>
                    Desa/Kelurahan 
                        <Text style={styles.Mandatory}> *</Text>
                    </Text>
                    <View style={styles.comboBox}>
                        <Picker
                            selectedValue={this.state.selectedKelurahan} 
                            onValueChange={
                                (value)=>this.setState({selectedKelurahan:value})                     
                            }                                              
                            mode="dropdown"
                            backgroundColor={WARNA_PUTIH}
                            fontSize="13"                            
                        >
                            <Picker.Item label="-- Pilih --" value="" />
                            {myKelurahan}
                        </Picker>
                    </View>
                </View>
            </View>
        )
    }    
}

export default FormPengisian_1_2

const styles = StyleSheet.create({
    container:{
        backgroundColor:WARNA_BG_FORM,
        borderRadius:3,
        padding:10,
        marginVertical:5
    },
    containerQuestion:{
        marginVertical:5,
    },
    comboBox:{
        color:WARNA_HITAM,        
        borderRadius:3,        
        overflow:'hidden'        
    },    
    textHeader:{
        fontFamily:"Poppins-SemiBold",
        fontSize:13,
        color:WARNA_HITAM
    },
    Mandatory:{
        fontFamily:"Poppins-SemiBold",
        fontSize:13,
        color:WARNA_MERAH
    },
    textBody:{
        fontFamily:"Poppins-Light",
        fontSize:13,
        color:WARNA_HITAM
    },
    textInput:{                
        backgroundColor:WARNA_PUTIH,
        borderRadius:3,
        paddingLeft:10,
        textAlignVertical:'center'
    },
})