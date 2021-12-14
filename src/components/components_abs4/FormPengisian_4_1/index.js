import React, { useState } from 'react'
import {StyleSheet, Text, TextInput, View } from 'react-native'
import { HeaderFormPengisian } from '..';
import InformationPenting from '../InformationPenting';
import RowPertanyaan from '../RowPertanyaan';



const FormPengisian_4_1 = () => {
    const [selectedValue, setSelectedValue] = useState("");
    return (
        <View style={styles.container}>
            <InformationPenting/>
            <HeaderFormPengisian/>            
            {/* Apakah saat ini Anda sedang OJT/Magang/Bekerja? */}
            <RowPertanyaan no={1} pertanyaan={"Apakah pernah keluar rumah/tempat umum (pasar, fasyankes, kerumunan orang, dan lain-lain)?"}/>
            <RowPertanyaan no={2} pertanyaan={"Apakah pernah menggunakan transportasi umum?"}/>
            <RowPertanyaan no={3} pertanyaan={"Apakah pernah melakukan perjalanan ke luar kota/internasional? (wilayah yang terjangkit/zona merah)"}/>
            <RowPertanyaan no={4} pertanyaan={"Apakah anda mengikuti kegiatan yang melibatkan orang banyak?"}/>
            <RowPertanyaan no={5} pertanyaan={"Apakah memiliki riwayat kontak erat dengan orang yang dinyatakan ODP, PDP atau konfirm COVID-19 (berjabat tangan, berbicara, berada dalam satu ruangan/satu rumah)?"}/>
            <RowPertanyaan no={6} pertanyaan={"Apakah pernah mengalami demam/batuk/pilek/sakit tenggorokan/sesak dalam 14 hari terakhir?"}/>
            <RowPertanyaan no={7} pertanyaan={"Apakah terdapat riwayat berkunjung dan/atau dikunjungi tamu (kerabat/keluarga berbeda rumah) dalam jangka waktu 14 hari terakhir?"}/>
        </View>
    )
}

export default FormPengisian_4_1

const styles = StyleSheet.create({
    container:{        
        borderRadius:3,
        padding:10,
        marginVertical:5
    },
    
})
