import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { WARNA_BIRU, WARNA_BIRU_MUDA } from '../../../utils/constants'

const InformasiTinggalBersama = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
            Bila Anda tinggal di rumah/apartemen baik milik keluarga maupun mengontrak tetapi tinggal <Text style={styles.textBold}>BERSAMA</Text> keluarga inti, maka pilihlah pilihan <Text style={styles.textBold}>KELUARGA</Text>.
            {"\n\n"}
            Bila Anda tinggal di rumah/apartemen/kos baik milik kerabat maupun mengontrak tetapi tinggal <Text style={styles.textBold}>TIDAK/BUKAN</Text>TIDAK/BUKAN keluarga inti, maka pilihlah pilihan <Text style={styles.textBold}>KERABAT</Text>.
            {"\n\n"}
            Bila Anda tinggal di kos/mengontrak rumah/apartemen tetapi <Text style={styles.textBold}>TIDAK</Text> tinggal bersama keluarga maupun saudara/kerabat/keluarga lainnya atau hanya tinggal sendiri maka pilihlah pilihan <Text style={styles.textBold}>KOS/KONTRAKAN</Text>.
            {"\n\n"}
            Pilihan lainnya hanya bila Anda tidak dalam ketiga pilihan sebelumnya.
            </Text>
        </View>
    )
}

export default InformasiTinggalBersama

const styles = StyleSheet.create({
    container:{
        backgroundColor:WARNA_BIRU_MUDA,
        borderRadius:3,
        padding:5,
        paddingRight:15,
        paddingLeft:10
    },
    text:{
        fontFamily:"Poppins-Light",
        fontSize:13,
        color:WARNA_BIRU
    },
    textBold:{
        fontFamily:"Poppins-Bold",
        fontSize:13
    }
})
