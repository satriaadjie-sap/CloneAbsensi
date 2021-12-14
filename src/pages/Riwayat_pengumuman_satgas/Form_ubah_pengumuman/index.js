import React, { useState } from 'react'
import { AsyncStorage } from 'react-native'
import axios, { Axios } from 'axios'
import {Picker} from '@react-native-picker/picker'
// import ImagePicker from 'react-native-image-picker'
import * as ImagePicker from "react-native-image-picker"
import {StyleSheet, Text, TextInput, View, TouchableOpacity, Button, Image, ScrollView } from 'react-native'
import { WARNA_BG_FORM, WARNA_HIJAU_MUDA, WARNA_HITAM, WARNA_MERAH, WARNA_PUTIH, WARNA_UNGU_MUDA, LINK_API } from '../../../utils/constants';
import react from 'react';
// import { Button } from 'react-native-paper';

const Form_ubah_pengumuman = (props) => {
    // export default class Form_create_pengumuman extends React.Component {

    // constructor(props) {
    //   super(props);
    //   this.state = {
    //     photo: null,
    //   }      
    // }
  
    // render() {
    const [selectedValue, setSelectedValue] = useState("");
    const [subyek, setSubyek] = React.useState('');
    let usern = '';
    const [untuk, setUntuk] = useState('');
    const [isi, setIsi] = React.useState("");
    const [aisi, setAisi] = React.useState("");
    const [asubyek, setAsubyek] = React.useState("");
    const [auntuk, setAuntuk] = React.useState("");
    const [username, setUsername] = React.useState("");
    const [errortext, setErrortext] = React.useState('');
    const [loading, setLoading] = useState(false);
    

    AsyncStorage.getItem('user', (error, result) => {
        if(result){
            //Parse result ke JSON
            let resultParsed = JSON.parse(result)
            usern = resultParsed.uname;
        }
    });

    AsyncStorage.getItem('pengumuman', (error, result) => {
        if(result){
            let resulted = JSON.parse(result)
            console.log(resulted.pen_isi + " iini result");
            // aisi = resulted.pen_isi;
            setAisi(resulted.pen_isi);
            setAsubyek(resulted.pen_subyek);
            setAuntuk(resulted.pen_untuk);
        }
        
        // console.log(aisi+" ini aisi");
        //}
    });

    console.log(aisi+" ini aisi");
     //Parse result ke JSON
    // let resulted = JSON.parse(result)
    // console.log(resulted.pen_isi + " iini result");
    // aisi = resulted.pen_isi;
    // console.log(aisi + "2")
    // auntuk = resulted.pen_untuk;
    // asubyek = resulted.pen_subyek;
    
    // console.log(aisi + "22")

    const handleSubmitPress = async () => {

        setErrortext('');

        // if (!subyek) {
        //     alert('Subyek Pengumuman harus diisi!');
        //     return;
        // }
        // if (!isi) {
        //     alert('Isi pengumuman harus diisi!');
        //     return;
        // }

        const pen_id =  AsyncStorage.getItem('pen_id');
        axios
            .post(`${LINK_API}Pengumuman/editPengumuman?id=${pen_id}&&subyek=${subyek}&&untuk=${untuk}&&isi=${isi}&&username=${usern}`)
            .then((res) => {
                console.log(res.data.result+ "sebelum true")
                console.log(subyek, untuk, isi, username)
                if(res.data.result === "True") {
                    let subyek = res.data.pen_subyek;
                    let untuk = res.data.pen_untuk;
                    let isi = res.data.pen_isi;
                    let username = res.data.pen_username;
                
                    let data = {
                        subyek: subyek,
                        untuk: untuk,
                        isi: isi,
                        username: username
                    }
                    console.log(data);
                    //navigation.replace('MainApp');

                    //notif kalo berhasil diubah
                    alert('Berhasil mengubah data pengumuman!');
                    AsyncStorage.removeItem('pengumuman');
                    return;
                }
                else
                {
                    //notif gagal diubah
                    console.log(error);
                    alert('Gagal mengubah data pengumuman!');
                    return;
                }    
            })
            .catch(error => alert('error 404 found!', error))
            .finally(() => setLoading(false));
    
    }
    
   // const state = this.state;
    //const resubyek = this.resubyek;


    //let resultParsed = JSON.stringify(result);
   // AsyncStorage.getItem('pengumuman');
 
    return (
        <ScrollView style={styles.containerScroll}>
        <View style={styles.container}>            
            {/* Dimanakah posisi Anda saat OJT/Magang/Bekerja? */}
             <View style={styles.containerQuestion}>
                <Text style={styles.textHeader}>
                Subyek Pengumuman
                <Text style={styles.Mandatory}> *</Text>
                </Text>
                <TextInput
                    style={styles.textInput}    
                    onChangeText={subyek => setSubyek(subyek)}    
                    value={asubyek}          
                    />
            </View>

            {/* Apakah saat ini Anda sedang OJT/Magang/Bekerja? */}
            <View style={styles.containerQuestion}>
                <Text style={styles.textHeader}>
                Siapa yang bisa melihat Pengumuman?
                    <Text style={styles.Mandatory}> *</Text>
                </Text>
                <View style={styles.comboBox}>
                    <Picker
                        selectedValue={auntuk}                                                
                        mode="dropdown"
                        backgroundColor={WARNA_PUTIH}
                        fontSize="13"
                        // onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                        onValueChange={(untuk) => setUntuk(untuk)}
                    >
                        <Picker.Item label="-- Pilih --" value="" />
                        <Picker.Item label="Mahasiswa" value="Mahasiswa" />
                        <Picker.Item label="Karyawan" value="Karyawan" />
                        <Picker.Item label="Semua" value="Semua" />
                    </Picker>
                </View>
            </View>

            <View style={styles.containerQuestion}>
                <Text style={styles.textHeader}>
                Isi Pengumuman
                <Text style={styles.Mandatory}> *</Text>
                </Text>
                {/* {photo && (
                    <Image
                    source={{uri: photo.uri}}
                    style={{width: 300, height: 300}}
                    />
                )}
                <Button title="Choose Photo" 
                    onPress={handleChoosePhoto}
                /> */}
                 <TextInput
                    style={styles.textInput}   
                    onChangeText={isi => setIsi(isi)}    
                    value={aisi}               
                    />
                
            </View>

            <View style={styles.buttonOut}>
                <TouchableOpacity style={styles.button}
                    onPress={handleSubmitPress}
                >
                    <Text style={styles.text}>Simpan</Text>
                </TouchableOpacity>            
            </View>

            {/* <TouchableOpacity onPress = {set}>
                   <Image source = {iconUrl} style={{width: 
                       30, height: 30}} />
               </TouchableOpacity> */}
        </View>
        </ScrollView>
    )
//             }
}

export default Form_ubah_pengumuman

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
    button:{
        backgroundColor:WARNA_HIJAU_MUDA,
        justifyContent: 'center', 
        alignItems: 'center',
        width:75,
        height:25
    },
    buttonOut:{
        marginTop:10,
        marginBottom:10,
        alignItems:'flex-end'
    },
    text:{
        fontFamily:"Poppins-Light",
        textAlign:'center',
        alignSelf:'center',
        color:WARNA_PUTIH
    }
})