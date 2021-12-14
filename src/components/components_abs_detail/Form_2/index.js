import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Component } from 'react/cjs/react.production.min'
import { CheckboxPenyakit, InformasiDataDiri } from '../..'
import { WARNA_SEKUNDER, LINK_API } from '../../../utils/constants'
import HeaderFormAbsesni from '../../HeaderFormAbsesni'
import TemplateInfo from '../TemplateInfo'
import axios, { Axios } from 'axios'
import { AsyncStorage } from 'react-native'

class Form_2 extends Component{
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
            return(
                <View key={index}>
                    <HeaderFormAbsesni text={"2. Riwayat Kesehatan"}/>
                    <View style={styles.container}>
                        <View style={styles.infoDark}>
                            <TemplateInfo
                                question="Bagaimana kondisi kesehatan Anda saat ini?"
                                //answer="Sehat"
                                answer={myValue.fam_sehat_self == "" ? "---" : myValue.fam_sehat_self}
                            />
                            <TemplateInfo
                                question="Informasikan perihal penyakit atau gejala yang di alami!"
                                //answer="---"
                                answer={myValue.fam_sehat_self_desc == "" ? "---" : myValue.fam_sehat_self_desc}
                            />
                        </View>
        
                        <View style={styles.infoDark}>
                            <TemplateInfo
                                question="Bagaimana kondisi kesehatan keluarga Anda/kerabat Anda saat ini? (Jika berada di rumah orang tua/kerabat)"
                                //answer="Sehat Semua"
                                answer={myValue.fam_sehat_family == "" ? "---" : myValue.fam_sehat_family}
                            />
                            <TemplateInfo
                                question="Jelaskan data diri keluarga dan gejala yang di alami dan informasikan sejak kapan menderitanya!"
                                //answer="---"
                                answer={myValue.fam_sehat_family_desc == "" ? "---" : myValue.fam_sehat_family_desc}
                            />
                        </View>
        
                        <View style={styles.infoDark}>
                            <TemplateInfo
                                question="Apakah di dalam keluarga Anda (termasuk Anda), ada anggota keluarga yang terpapar virus Corona/COVID-19? (ODP/PDP/Suspect/Positif)"
                                //answer="Tidak Ada"
                                answer={myValue.fam_covid_self == "" ? "---" : myValue.fam_covid_self}
                            />
                            <TemplateInfo
                                question="Mohon jelaskan jika terdapat ODP/PDP/Suspect/Positif!"
                                //answer="---"
                                answer={myValue.fam_covid_self_desc == "" ? "---" : myValue.fam_covid_self_desc}
                            />
                        </View>
        
                        <View style={styles.infoDark}>
                            <TemplateInfo
                                question="Apakah di lingkungan Anda (termasuk Anda), ada warga yang terpapar virus Corona/COVID-19? (ODP/PDP/Suspect/Positif, terbatas dalam RT/Blok dan ada data resmi dari pengurus RT/penanggung jawab setempat)"
                                //answer="Tidak Ada"
                                answer={myValue.fam_covid_around == "" ? "---" : myValue.fam_covid_around}
                            />
                            <TemplateInfo
                                question="Mohon jelaskan jika terdapat ODP/PDP/Suspect/Positif!"
                                //answer="---"
                                answer={myValue.fam_covid_around_desc == "" ? "---" : myValue.fam_covid_around_desc}
                            />
                        </View>
        
                        <View style={styles.infoDark}>
                            <CheckboxPenyakit
                                Hipertensi={myValue.fam_riwayat_penyakit.includes("Hipertensi") ? true : false}
                                Diabetes={myValue.fam_riwayat_penyakit.includes("Diabetes") ? true : false}
                                Jantung={myValue.fam_riwayat_penyakit.includes("Jantung") ? true : false}
                                Paru={myValue.fam_riwayat_penyakit.includes("Paru") ? true : false}
                                Ginjal={myValue.fam_riwayat_penyakit.includes("Ginjal") ? true : false}
                                Lever={myValue.fam_riwayat_penyakit.includes("Lever") ? true : false}
                                Nope={myValue.fam_riwayat_penyakit.includes("Tidak Ada") ? true : false}
                            />
                        </View>
                    </View>            
                </View>
            )
        });
        return (
            <View>
                {equalizeData}
            </View>
        )
    }
    
}

export default Form_2
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