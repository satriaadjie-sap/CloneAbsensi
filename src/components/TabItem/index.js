import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { WARNA_BG_NAVBAR, WARNA_PUTIH, WARNA_SEKUNDER } from '../../utils/constants'
import {IconAbsensi, IconAbsensi_aktif, IconBeranda, IconBeranda_aktif, IconPengumuman, IconPengumuman_aktif,
    IconUbahsandi, IconUbahsandi_aktif} from '../../assets/icons'

const TabItem = ({label, isFocused, onPress, onLongPress}) => {

    const Icon = () => {
        if(label === "Beranda"){
            return isFocused ? <IconBeranda_aktif/> : <IconBeranda/>
        }
        if(label === "Form Absensi"){
            return isFocused ? <IconAbsensi_aktif/> : <IconAbsensi/>
        }
        if(label === "Pengumuman"){
            return isFocused ? <IconPengumuman_aktif/> : <IconPengumuman/>
        }
        if(label === "Ubah Sandi"){
            return isFocused ? <IconUbahsandi_aktif/> : <IconUbahsandi/>
        }
        if(label === "Testing"){
            return isFocused ? <IconUbahsandi_aktif/> : <IconUbahsandi/>
        }
        if(label === "List Absensi"){
            return isFocused ? <IconAbsensi_aktif/> : <IconAbsensi_aktif/>
        }
        if(label === "Laporan"){
            return isFocused ? <IconAbsensi_aktif/> : <IconAbsensi/>
        }
    }

    return (
        <TouchableOpacity                 
            onPress={onPress}
            onLongPress={onLongPress}
            style={ isFocused ? styles.containerFocus  : styles.container }
          >
            <Icon/>
            {
            isFocused && 
            <Text style={ styles.text }>
                {label.toUpperCase()}
            </Text>
            }            
          </TouchableOpacity>
    )
}

export default TabItem

const styles = StyleSheet.create({
    container:{
        alignItems : 'center',
        alignContent : 'center',
        padding:5,
        width:83
    },
    containerFocus:{
        alignItems : 'center',
        alignContent : 'center',
        padding:5,
        backgroundColor: WARNA_BG_NAVBAR,
        borderRadius: 4,
        width:83
    },
    text:{
        color:WARNA_PUTIH,
        fontSize:8,
        margin:3,
        fontFamily:'Poppins-Bold'
    }
})
