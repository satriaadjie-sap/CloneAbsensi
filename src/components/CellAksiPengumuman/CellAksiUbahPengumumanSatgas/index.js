import AsyncStorage from '@react-native-async-storage/async-storage'
import React from 'react'
import axios, { Axios } from 'axios'
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native'
import { IconDetail,  IconPrinter,  IconUbah} from '../../../assets/icons'
import { LINK_API } from '../../../utils/constants';


const CellAksiUbahPengumumanSatgas = (props) => {
    // const detailHandle = () => {
    //     AsyncStorage.setItem('pen_id',props.pen_id+"")
    //     props.navigation.navigate('Riwayat_pengumuman_detail_sat')
    // }

    // let aisi = '';
    // let auntuk = '';
    // let asubyek = '';
    const updateHandle = () => {
        AsyncStorage.setItem('pen_id',props.pen_id+"")
        console.log(props.pen_id);

        //const pen_id = AsyncStorage.getItem('pen_id');
        axios
            .get(`${LINK_API}Pengumuman/getDataPengumuman?pen_id=${props.pen_id}`)
            .then((res) => {
            
               //if(res.data.result === "True") {
                    let pen_subyek = res.data.pen_subyek;
                    let pen_untuk = res.data.pen_untuk;
                    let pen_isi = res.data.pen_isi;
                    //let created_by = res.data.created_by;
                
                    let data = {
                        pen_subyek: pen_subyek,
                        pen_untuk: pen_untuk,
                        pen_isi: pen_isi,
                        //created_by: created_by
                    }
                    //AsyncStorage.setItem('pengumuman',data+"")
                    AsyncStorage.setItem('pengumuman', JSON.stringify(data));
                    console.log(JSON.stringify(data) + "ini data");
                    //navigation.replace('MainApp');

                    //  AsyncStorage.getItem('pengumuman', () => {
                    //     //if(result){
                    //         //Parse result ke JSON
                    //         let resulted = JSON.parse(result)
                    //         console.log(resulted + "ini result");
                    //         aisi = resulted.pen_isi;
                    //         auntuk = resulted.pen_untuk;
                    //         asubyek = resulted.pen_subyek;
                    //     //}
                    // }); 

                    // console.log(aisi+"ini aisi");


                    //notif kalo berhasil diubah
                    props.navigation.navigate('Form_ubah_pengumuman')
                    return;
                /// }
                // else
                // {
                //     //notif gagal diubah
                //     console.log(error);
                //     alert('Gagal Menambah data pengumuman!');
                //     return;
                // }    
            })
            .catch(error => alert('error 404 found!', error))
            //console.log(error);
            //.finally(() => setLoading(false));
            };
    
    return (
        <View style={styles.container}>                        
            {/* <TouchableOpacity 
                onPress={detailHandle}
            >
                <View style={styles.detail}>
                    <IconPrinter/>                    
                </View>
            </TouchableOpacity> */}

            <TouchableOpacity 
                onPress={updateHandle}
            >
                <View style={styles.detail}>
                    <IconPrinter/>                    
                </View>
            </TouchableOpacity>   
        </View>
    )
}

export default CellAksiUbahPengumumanSatgas

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignSelf:'center',
        
    },
    row:{        
        alignSelf:'center',
        borderWidth:1
    },
    printer:{
        marginRight:2,        
    },
     detail:{
        marginLeft:2
    }
})
