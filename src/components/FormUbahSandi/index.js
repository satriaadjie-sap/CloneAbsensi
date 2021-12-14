import axios, { Axios } from 'axios'
import { AsyncStorage } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import React, { Component, useState, createRef, useEffect } from 'react'
import { StyleSheet, Keyboard, Text, TextInput, View, TouchableOpacity } from 'react-native'
import { ButtonSimpanSandi } from '..'
import { WARNA_HITAM, WARNA_MERAH, WARNA_UTAMA, WARNA_PUTIH, WARNA_SEKUNDER, LINK_API } from '../../utils/constants'

const FormUbahSandi = ({}) => {   
    
    const navigation = useNavigation();

    const [username, setUsername] = React.useState('');
    let usern = '';
    const [password, setPassword] = useState('');
    const [oldpassword, setOldPassword] = React.useState("");
    const [repassword, setRePassword] = React.useState("");
    const [errortext, setErrortext] = React.useState('');
    const [loading, setLoading] = useState(false);

    AsyncStorage.getItem('user', (error, result) => {
        if(result){
            //Parse result ke JSON
            let resultParsed = JSON.parse(result)
            usern = resultParsed.uname;
        }
    });

    const handleSubmitPress = () => {
        setErrortext('');
        // if (!oldpassword) {
        //     alert('Kata sandi lama harus diisi!');
        // return;
        //}
        if (!password) {
            alert('Kata sandi baru harus diisi!');
            return;
        }
        if (!repassword) {
            alert('Konfirmasi Kata sandi baru harus diisi!');
            return;
        }
        
        if (password!=repassword) {
            alert('Konfirmasi Kata sandi tidak cocok!');
            return;
        }
        //setLoading(true);
    
        axios
            .post(`${LINK_API}Login/UbahSandi?username=${usern}&&password=${password}`)
            .then((res) => {
            
                if(res.data.result === "SUCCESS") {
                    let uname = res.data.username;
                    let pass = res.data.repassword;
                
                    let data = {
                        uname: uname,
                        pass: pass
                    }
                    console.log(data);
                    navigation.replace('MainApp');

                    //notif kalo berhasil diubah
                    alert('Berhasil Mengubah Kata Sandi!');
                    return;
                }
                else
                {
                    //notif gagal diubah
                    console.log(error);
                    alert('Gagal Mengubah Kata Sandi!');
                    return;
                }    
            })
            .catch(error => alert('error 404 found!', error))
            .finally(() => setLoading(false));
            };

    return (
        <View style={styles.container}>
            <View style={styles.penting}>
                <Text style={styles.textPenting}>
                PENTING! {"\n"}
                Perubahan kata sandi akan berpengaruh pada seluruh aplikasi, akses hotspot, dan login Handphone Anda!
                </Text>
            </View> 
            <View style={styles.formInput}>
                <Text style={styles.formInfo}>
                    Kata Sandi Lama <Text style={{color:WARNA_MERAH}}>*</Text>
                </Text>
                <TextInput 
                    style={styles.textInput}
                    placeholder="*******"
                />
            </View>
            <View style={styles.formInput}>
                <Text style={styles.formInfo}>
                    Kata Sandi Baru <Text style={{color:WARNA_MERAH}}>*</Text>
                </Text>
                <TextInput
                    onChangeText={password => setPassword(password)}
                    style={styles.textInput}                    
                />
            </View>
            <View style={styles.formInput}>
                <Text style={styles.formInfo}>
                    Konfirmasi Kata Sandi <Text style={{color:WARNA_MERAH}}>*</Text>
                </Text>
                <TextInput 
                    onChangeText={repassword => setRePassword(repassword)}
                    style={styles.textInput}                    
                />
            </View>
            {/* <View>
                <ButtonSimpanSandi baru={password}/>
            </View> */}
            <View style={styles.containerbut}>
                <TouchableOpacity 
                    style={styles.button}
                    //onPress={() => Alert.alert(baru)}
                    onPress={handleSubmitPress}
                >
                    <Text style={styles.text}>SIMPAN</Text>
                </TouchableOpacity>            
            </View>
        </View>
    )
}

export default FormUbahSandi

const styles = StyleSheet.create({
    container:{
        borderWidth:1,
        borderColor:WARNA_SEKUNDER,
        borderRadius:5,
        width:254,
        padding:9,
    },
    penting:{
        backgroundColor: 'rgba(86, 00, 00, 0.20)',        
        borderRadius:5
    },
    textPenting:{
        color:WARNA_MERAH,
        marginHorizontal:12,
        marginVertical:7,
        fontFamily:"Poppins-Light",
        fontSize:9
    },
    formInput:{
        marginVertical:7
    },
    formInfo:{
        color:WARNA_HITAM,
        fontFamily:"Poppins-Bold",
        fontSize:9
    },
    textInput:{
        borderWidth:1,
        borderColor:WARNA_SEKUNDER,
        backgroundColor:'rgba(00, 00, 00, 0.20)',        
        height:27,
        paddingVertical:-15,
        fontFamily:"Poppins-Light",
        fontSize:9,
    
        textAlignVertical:'center'
    },
    button:{
        backgroundColor:WARNA_UTAMA,
        width:79,
        alignItems:'center',
        paddingVertical:2
    },
    text:{
        color:WARNA_PUTIH,
        fontSize:12,
        fontFamily:"Poppins-Light"
    },
    containerbut:{        
        alignItems:'flex-end'       
    },
})
