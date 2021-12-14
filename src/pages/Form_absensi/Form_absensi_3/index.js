import React, { Component, useState } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { FormPengisian_3_1, HeaderFormAbsesni, ButtonBatal3, ButtonSelanjutnya3 } from '../../../components'
import { WARNA_SEKUNDER } from '../../../utils/constants'

// let astra = ''
function kosTemen(a, b){
    console.log("Saya ganteng " + a + "  " + b)
    return a
};

class Form_absensi_3 extends Component {
    constructor(props){
        super(props);
        this.state = {
            ojt:'', posisi:'', perusahaan:'', magang:''
        }
    }
    
    ojt = (a, b, c, d) => {
        console.log("Ojt " + a + " " + b)
        this.setState({
            ojt: a,
            posisi: b,
            perusahaan: c,
            magang: d
        })
    };

    render(){
        return (
            <View>
                <ScrollView style={styles.containerScrollView}>
                    <View style={styles.containerForm}>
                        <HeaderFormAbsesni text={"Langkah 3 / 5 : Mengisi Data OJT/Magang"}/>            
                        <FormPengisian_3_1 callBack={this.ojt}
                        />
                    </View>
                    <View style={styles.button}>
                        <ButtonBatal3 navigation={this.props.navigation}/>
                        <ButtonSelanjutnya3 navigation={this.props.navigation} ojt={this.state}/>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

export default Form_absensi_3

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