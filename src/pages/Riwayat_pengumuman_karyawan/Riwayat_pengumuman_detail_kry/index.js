import AsyncStorage from '@react-native-async-storage/async-storage'
import React from 'react'
import { StyleSheet, Text, View, Image, Dimensions, ScrollView } from 'react-native'
import { Component } from 'react/cjs/react.production.min'
import { ButtonTutupPengKry, ButtonTutupPengumuman } from '../../../components'
import { WARNA_HITAM, LINK_API } from '../../../utils/constants'
import axios, { Axios } from 'axios'


export default class Riwayat_pengumuman_detail_kry extends Component{
    constructor(props){
        super(props);
        this.state = {
            data: []
          } 
    }
    GetDetailPengumuman = async () => {
        try{
            const pen_id = await AsyncStorage.getItem('pen_id');
                axios
                .get(`${LINK_API}Pengumuman/getDetailPengumuman?pen_id=${pen_id}`)
                .then( res => {
                        this.setState({
                        data:res.data
                        })
                    })
                    // console.log("INI ADALAH PENGUMUMAN SUBYEK : " + state.data.subyek)
        }catch(error){
            console.log(error);
        }
        
    }
    componentDidMount(){
      this.GetDetailPengumuman();
    }
    render(){
        const state = this.state;
        const props = this.props;
        return (
            <View style={ styles.page }>            
                <ScrollView style={styles.containerScroll}>
                    <View style={styles.container}>
                        <View styles={styles.containerInfo}>
                            <Text style={styles.textHeader}>
                                Subyek Pengumuman
                            </Text>
                            <Text style={styles.textBody}>
                                {state.data.pen_subyek}
                            </Text>
                        </View>
            
                        <View>
                            <Text style={styles.textHeader}>
                            Isi Pengumuman
                            </Text>
                            {/* <View style={styles.containerImage}>
                                <Image
                                    source={{
                                        uri : state.data.pen_isi,
                                        uri: "https://satgas-covid19.polman.astra.ac.id/Files/IMGTINYMCE/PENGUMUMAN_LLNb2zjkpIoFw31zZLNdWziHcIBJ7wBhYMTXmjV1FEBNzgvJZNbQSzGQMo1=01h=.jpg",
                                        cache: 'only-if-cached'
                                    }}
                                    style={styles.image}
                                    resizeMode="contain"
                                    />
                            </View>                 */}
                            <Text style={styles.textBody}>
                                {state.data.pen_isi}
                            </Text>
                        </View>
            
                        <View style={styles.button}>
                            <ButtonTutupPengKry navigation={props.navigation}/>
                        </View>
                    </View>
                </ScrollView>
            </View>
            
        )
    }
}


const styles = StyleSheet.create({
    container:{
        paddingHorizontal:16
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
    }
})
