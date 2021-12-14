import React from 'react'
import axios, { Axios } from 'axios'
import { AsyncStorage } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'
import { Component } from 'react/cjs/react.production.min'
import { CheckboxPenyakit, InformasiDataDiriKry } from '../..'
import { WARNA_SEKUNDER, LINK_API } from '../../../utils/constants'
import HeaderFormAbsesni from '../../HeaderFormAbsesni'
import TemplateInfo from '../TemplateInfo'

class Form_1_karyawan extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: []
        }
    }

    GetDetailAbsensiKaryawan = async () => {
        try{
            const for_id = await AsyncStorage.getItem('for_id');
                axios
                .get(`${LINK_API}Absensi/GetDetailAbsensiKaryawan?for_id=${for_id}`)
                .then( res => {
                    console.log('detail karyawan' + res.data)
                        this.setState({
                        data: [res.data]
                        })
                    })
        }catch(error){
            console.log(error);
        }
    }

    componentDidMount(){
      this.GetDetailAbsensiKaryawan();

      let username = '';
        AsyncStorage.getItem('user', (error, result) => {
            if(result){
                //Parse result ke JSON
                let resultParsed = JSON.parse(result)
                username = resultParsed.uname

                axios
                .get(`${LINK_API}Absensi/GetDataInformasiKaryawan?username=${username}`)
                .then((res) => {
                    if(res.data[0].result === "SUCCESS") {
        
                        this.setState({
                            kryId:res.data[0].kry_id,
                            namaDepan:res.data[0].kry_nama_depan,
                            namaBelakang:res.data[0].kry_nama_belakang,
                            strDesc:res.data[0].str_desc
                        })
                        return;
                    }
                    else
                    {
                        alert('Gagal menambah data!');
                        return;
                    }
                })
                .catch(error => alert(error))
                return username;
            }
        });
    }

    render() {
        const props = this.props;
        let equalizeData = this.state.data.map((myValue, index) => {
            //============== DATA 1
            // var info1 = myValue.fam_alamat_tinggal.split(",,,");
            console.log("INI RIWAYAT" + myValue.fab_riwatat_penyakit)
            return(
                <View key={index}>

                    <View style={styles.info}>
                        <TemplateInfo
                            question="Apakah Anda hamil?"
                            //answer="[Keluarga]  RT03/01, Kauman, Comal, Kabupaten Pemalang, Jawa Tengah"
                            // answer={"["+info1[0]+"]  "+info1[1].split("###").join(", ")}
                            answer={myValue.fab_is_hamil}
                        />
                    </View>

                    <View style={styles.info}>
                        <TemplateInfo
                            question="Dimana posisi Anda saat ini?"
                            // answer="RT03/01, Kauman, Comal, Kabupaten Pemalang, Jawa Tengah"
                            answer={myValue.fab_alamat}
                        />
                    </View>
                    
                    <View style={styles.infoDark}>
                        <TemplateInfo
                            question="Bagaimana kondisi kesehatan Anda saat ini?"
                            //answer="Tidak"
                            answer={myValue.fab_sehat_self}
                        />
                        <TemplateInfo
                            question="Informasikan perihal penyakit atau gejala yang dialami!"
                            //answer="---"
                            answer={myValue.fab_sehat_self_desc == "" ? "---" : myValue.fab_sehat_self_desc}
                        />
                    </View>

                    <View style={styles.infoDark}>
                        <TemplateInfo
                            question="Bagaimana kondisi kesehatan keluarga Anda/kerabat Anda saat ini? (Jika berada di rumah orang tua/kerabat)"
                            //answer="Bapak, 087711643355"
                            answer={myValue.fab_sehat_family}
                        />
                        <TemplateInfo
                            question="Jelaskan data diri keluarga dan gejala yang dialami dan informasikan sejak kapan menderitanya!"
                            //answer="---"
                            answer={myValue.fab_sehat_family_desc == "" ? "---" : myValue.fab_sehat_family_desc}
                        />
                    </View>

                    <View style={styles.infoDark}>
                        <TemplateInfo
                            question="Apakah di dalam keluarga Anda (termasuk Anda), ada anggota keluarga yang terpapar virus Corona/COVID-19? (ODP/PDP/Suspect/Positif!"
                            //answer="Tidak"
                            answer={myValue.fab_covid_family}
                        />
                        <TemplateInfo
                            question="Mohon jelaskan jika terdapat ODP/PDP/Suspect/Positif!"
                            //answer="---"
                            answer={myValue.fab_covid_family_desc == "" ? "---" : myValue.fab_covid_family_desc}
                        />
                    </View>

                    <View style={styles.infoDark}>
                        <TemplateInfo
                            question="Apakah Anda menggunakan kendaraan umum? (Ojek Online/Angkot/Bus)"
                            //answer="Tidak"
                            answer={myValue.fab_kendaraan_umum}
                        />
                        
                    </View>

                    <View style={styles.infoDark}>
                        <TemplateInfo
                            question="Apakah dalam 7 hari terakhir Anda mengunjungi rumah sakit?"
                            //answer="Tidak"
                            answer={myValue.fab_rumah_sakit}
                        />
                        <TemplateInfo
                            question="Untuk keperluan apa Anda ke rumah sakit/fasilitas kesehatan lainnya?"
                            //answer="---"
                            answer={myValue.fab_rumah_sakit_desc == "" ? "---" : myValue.fab_rumah_sakit_desc}
                        />
                    </View>

                    <View style={styles.infoDark}>
                            <CheckboxPenyakit
                                Hipertensi={myValue.fab_riwatat_penyakit.includes("Hipertensi") ? true : false}
                                Diabetes={myValue.fab_riwatat_penyakit.includes("Diabetes") ? true : false}
                                Jantung={myValue.fab_riwatat_penyakit.includes("Jantung") ? true : false}
                                Paru={myValue.fab_riwatat_penyakit.includes("Paru") ? true : false}
                                Ginjal={myValue.fab_riwatat_penyakit.includes("Ginjal") ? true : false}
                                Lever={myValue.fab_riwatat_penyakit.includes("Lever") ? true : false}
                                Nope={myValue.fab_riwatat_penyakit.includes("Tidak Ada") ? true : false}
                            />
                        </View>
                </View>
            )
        });

        return (
            <View>
                <HeaderFormAbsesni text={"1. Data Diri dan Keluarga"}/>
                <View style={styles.container}>
                    <InformasiDataDiriKry id={this.state.kryId} namaDpn={this.state.namaDepan}
                        namaBlkg={this.state.namaBelakang} status={this.state.strDesc} />
                    {equalizeData}
                </View>            
            </View>
        )
    }
}

export default Form_1_karyawan

const styles = StyleSheet.create({
    container:{
        marginHorizontal:7,
        marginBottom:10
    },
    info:{
        marginVertical:5
    },
    infoDark:{
        marginVertical:5,
        backgroundColor:WARNA_SEKUNDER,
        padding:10,
        borderRadius:3
    }
})