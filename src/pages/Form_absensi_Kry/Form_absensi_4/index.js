import React, { Component, useState } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { FormPengisian_4_1, HeaderFormAbsesni, ButtonBatal4, ButtonSelanjutnya4Kry } from '../../../components'
import { WARNA_SEKUNDER } from '../../../utils/constants'

class Form_absensi_4 extends Component {
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
                <ScrollView style={styles.containerScrollView}>
                    <View style={styles.containerForm}>
                        <HeaderFormAbsesni text={"Langkah 4 / 5 : Mengisi Formulir Deklarasi Kesehatan"}/>            
                        <FormPengisian_4_1/>                
                    </View>
                    <View style={styles.button}>
                        {/* <ButtonBatal4/> */}
                        <ButtonSelanjutnya4Kry navigation={this.props.navigation}
        
                        />
                    </View>
                </ScrollView>
            </View>
        )
    }
}

export default Form_absensi_4

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
