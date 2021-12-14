import React, { Component, useState, createRef, useEffect } from 'react'
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View, AsyncStorage } from 'react-native'
import { ButtonIsiFormulir, HeaderApps, HeaderInformation, InformasiPengisian, NotifPengisian } from '../../components'
import { WARNA_BG_FORM, WARNA_MERAH, WARNA_PUTIH, WARNA_SEKUNDER } from '../../utils/constants'

let rolget = '';

const Beranda_karyawan = ({hasAbsen=false, navigation}) => {

    return (
        <View style={ styles.page }>            
            <ScrollView  style={styles.containerScroll}>
                <View style={styles.container}>
                    <Text style={styles.textUtama}>
                        Selamat Datang!{"\n\n"}
                        Ini merupakan halaman beranda dari Aplikasi Formulir Absensi dan Pendataan Kesehatan Karyawan.{"\n\n"}
                        Formulir ini wajib diisi harian oleh seluruh karyawan Politeknik Astra. Data yang masuk setiap hari dipergunakan untuk memonitor kondisi seluruh karyawan Polman Astra dan ada tindakan khusus bila diperlukan.{"\n\n"}
                        Apabila dirasa ada yang perlu disampaikan secara khusus dan urgent silahkan menghubungi langsung tim DKAK ataupun tim kendali COVID-19 Polman Astra (Ka. Dept DKAK atau Ka. Dept DPUSDM).{"\n\n"}
                        Diharapkan semua karyawan Polman Astra dapat mengisi dengan benar data kesehatan harian dan absensi ini dan menjadi bagian dari absen harian seperti saat perkuliahan dalam keadaaan normal.
                    </Text>
                    {/* <InformasiPengisian data={data} />  */}
                    <InformasiPengisian /> 
                    {/* NOTIFIKASI PENGISIAN AKAN AKTIF JIKA SUDAH MENGISI FORMULIR*/}
                    {/* BUTTON ISI FORMULIR AKAN AKTTIF JIKA BELUM MENGISI FORMULIR */}
                    {hasAbsen == true ? <NotifPengisian data={data}/>  : <ButtonIsiFormulir navigation = {navigation}/>}
                    
                    <Text style={styles.textKesulitan}>
                        Jika terdapat kesulitan tentang cara penggunaan aplikasi ini, silahkan menghubungi MIS / Bang Candra.
                    </Text>
                </View>                 
            </ScrollView>
        </View>
    )
}

export default Beranda_karyawan

const styles = StyleSheet.create({
    page:{ 
        flex: 1, 
        backgroundColor:WARNA_PUTIH,        
    },
    containerScroll:{        
        height:300
    },
    container:{
        marginHorizontal:23,
        marginBottom:10,        
        paddingTop:10
    },
    textUtama:{
        fontFamily:'Poppins-Light',
        fontSize:12
    },
    textKesulitan:{
        fontFamily:'Poppins-Light',
        fontSize:13,
        marginTop:10,
        borderTopWidth:1,
        borderColor:WARNA_SEKUNDER,
        paddingTop:10
    }
})
