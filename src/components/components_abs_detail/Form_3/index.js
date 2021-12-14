import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Component } from 'react/cjs/react.production.min'
import { WARNA_SEKUNDER, LINK_API } from '../../../utils/constants'
import HeaderFormAbsesni from '../../HeaderFormAbsesni'
import TemplateInfo from '../TemplateInfo'
import axios, { Axios } from 'axios'
import { AsyncStorage } from 'react-native'

class Form_3 extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: [] 
        }
    }

    GetDetailAbsensiMahasiswa = async () => {
        try{
            const fma_id = await AsyncStorage.getItem('fma_id');
                axios
                .get(`${LINK_API}Absensi/GetDetailAbsensiMahasiswa?fma_id=${fma_id}`)
                .then( res => {
                        this.setState({
                        data: [res.data]
                        })
                    })
        }catch(error){
            console.log(error);
        }
    }

    componentDidMount(){
      this.GetDetailAbsensiMahasiswa();
    }

    render(){
        // const state = this.state;
        let equalizeData = this.state.data.map((myValue, index) => {
            // data1 = myValue.fam_is_ojt.alamat.split(",");
            return(
            <View key={index}>
                <HeaderFormAbsesni text={"3. Data OJT/Magang"}/>
                <View style={styles.container}>
    
                    <View style={styles.infoDark}>
                        <TemplateInfo
                            question="Apakah saat ini Anda sedang OJT/Magang/Bekerja?"
                            //answer="Tidak"
                            answer={myValue.fam_is_ojt == "" ? "---" : myValue.fam_is_ojt}
                        />
    
                        <TemplateInfo
                            question="Dimanakah posisi Anda saat OJT/Magang/Bekerja?"
                            //answer="---"
                            // answer={data1[0]}
                            answer={myValue.fam_is_ojt_alamat == "" ? "---" : myValue.fam_is_ojt_alamat}
                        />
                        
                        <TemplateInfo
                            question="Tuliskan nama perusahaan dan cabang/site nya!"
                            //answer="---"
                            // answer={data1[1]}
                            answer={myValue.fam_is_ojt_alamat == "" ? "---" : myValue.fam_is_ojt_alamat}
                        />
    
                        <TemplateInfo
                            question="Deskripsikan secara singkat tentang Magang/TA Anda! (proposal, monitoring, bimbingan, project/produk TA)"
                            //answer="---"
                            answer={myValue.fam_is_ojt_desc == "" ? "---" : myValue.fam_is_ojt_desc}
                        />
                    </View>                
                </View>
            </View>
            )
            
        })
        return (
            <View>
                {equalizeData}
            </View>
        )
    }
    
}

export default Form_3

const styles = StyleSheet.create({
    container:{
        marginHorizontal:7,
        marginBottom:10
    },    
    infoDark:{
        marginVertical:5,
        backgroundColor:WARNA_SEKUNDER,
        padding:10,
        borderRadius:3
    }
})