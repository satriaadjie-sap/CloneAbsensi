import AsyncStorage from '@react-native-async-storage/async-storage'
import React from 'react'
import axios, { Axios } from 'axios'
import { StyleSheet, Text, View, Image, Dimensions, TextInput, ScrollView } from 'react-native'
import { Component } from 'react/cjs/react.production.min'
import { Form_1_karyawan } from '../../../components'
import { WARNA_HITAM, LINK_API, WARNA_PUTIH , WARNA_BG_FORM, WARNA_KUNING, WARNA_SEKUNDER} from '../../../utils/constants'
import ButtonKembaliKaryawan from '../../../components/components_abs_detail/ButtonKembaliKaryawan'
import Form_2_karyawan from '../../../components/components_abs_detail/Form_2_karyawan'

export default class Form_absensi_detail extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: []
          };
    }

    GetDetailAbsensiKaryawan = async () => {
        try{
            const for_id = await AsyncStorage.getItem('for_id');
                axios
                .get(`${LINK_API}Absensi/GetDetailAbsensiKaryawan?for_id=${for_id}`)
                .then( res => {
                        this.setState({
                        data:res.data
                        })
                    })
        }catch(error){
            console.log(error);
        }
    }
    componentDidMount(){
      this.GetDetailAbsensiKaryawan();
    }

    render(){
        // const state = this.state;
        return (
            <View>
                <ScrollView style={styles.containerScrollView}>
                    <View style={styles.containerForm}>  
                        <Form_1_karyawan/>
                        <Form_2_karyawan/>
                        <View style={styles.button}>
                            <ButtonKembaliKaryawan navigation={this.props.navigation}/>
                        </View>
                    </View>
                </ScrollView>
            </View>
            
        )
    }
}



const styles = StyleSheet.create({
    container:{
        color:WARNA_HITAM
        // paddingHorizontal:16
    },
    containerScrollView:{
        paddingHorizontal:13
    },
    containerInfo:{
        marginBottom:10,
    },
    containerImage:{        
        marginBottom:15,
    },
    textHeader:{
        fontFamily:"Poppins-SemiBold",
        fontSize:13,
        color:WARNA_HITAM,        
    },
    textBody:{
        fontFamily:"Poppins-Light",
        fontSize:13,
        color:WARNA_HITAM,        
    },
    image:{        
        width: '100%',
        height : Dimensions.get('window').height
    },
    button:{
        marginBottom:10,
        alignItems:'flex-end'
    },
    containerForm:{
        borderWidth:1,
        borderColor:WARNA_SEKUNDER,
        borderRadius:3,
        paddingHorizontal:8
    }
})