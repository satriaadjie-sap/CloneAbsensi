import { Picker } from '@react-native-picker/picker'
import React from 'react'
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { WARNA_PUTIH } from '../../utils/constants'


class Testing extends React.Component {
    state = {
        provinsi:[],
        selectedProvinsi:'',
        kotakabupaten:[],
        selectedKotakabupaten:'',
        kecamatan:[],
        selectedKecamatan:'',
        kelurahan:[],
        selectedKelurahan:''        
    }
    GetDataProvinsi = () => {
        fetch('https://dev.farizdotid.com/api/daerahindonesia/provinsi')
        .then(response => response.json())
        .then(json => {
            console.log(json.provinsi)
            this.setState({
                provinsi:json.provinsi
            })
        })
    }
    GetDataKotaKabupaten = (id_provinsi) => {
        fetch('https://dev.farizdotid.com/api/daerahindonesia/kota?id_provinsi='+id_provinsi)
        .then(response => response.json())
        .then(json => {
            console.log("Kab"+json.kota_kabupaten)
            this.setState({
                kotakabupaten:json.kota_kabupaten
            })
        })
    }
    GetDataKecamatan = (id_kota) => {
        fetch('https://dev.farizdotid.com/api/daerahindonesia/kecamatan?id_kota='+id_kota)
        .then(response => response.json())
        .then(json => {
            console.log(json.kecamatan)
            this.setState({
                kecamatan:json.kecamatan
            })
        })
    }
    GetDataKelurahan = (id_kecamatan) => {
        fetch('https://dev.farizdotid.com/api/daerahindonesia/kelurahan?id_kecamatan='+id_kecamatan)
        .then(response => response.json())
        .then(json => {
            console.log(json.kelurahan)
            this.setState({
                kelurahan:json.kelurahan
            })
        })
    }
    componentDidMount() {
        this.GetDataProvinsi()        
        }
    
    render() {
        let myProvinsi = this.state.provinsi.map((myValue,myIndex)=>{
            return(
                <Picker.Item label={myValue.id + ' - ' + myValue.nama} value={myValue.id} key={myIndex}/>
            )
        });        
        let myKotakabupaten = this.state.kotakabupaten.map((myValue,myIndex)=>{
            return(
                <Picker.Item label={myValue.id + ' - ' + myValue.nama} value={myValue.id} key={myIndex}/>
            )
        });
        let myKecamatan = this.state.kecamatan.map((myValue,myIndex)=>{
            return(
                <Picker.Item label={myValue.id + ' - ' + myValue.nama} value={myValue.id} key={myIndex}/>
            )
        });
        let myKelurahan = this.state.kelurahan.map((myValue,myIndex)=>{
            return(
                <Picker.Item label={myValue.id + ' - ' + myValue.nama} value={myValue.id} key={myIndex}/>
            )
        });
        return (
            <View style={ styles.page }>
                <Picker 
                    selectedValue={this.state.selectedProvinsi} 
                    onValueChange={
                        (value)=>this.setState({selectedProvinsi:value},
                            this.GetDataKotaKabupaten(value))
                    }
                >
                    {myProvinsi}
                </Picker>
                <Picker 
                    selectedValue={this.state.selectedKotakabupaten} 
                    onValueChange={
                        (value)=>this.setState({selectedKotakabupaten:value},
                        this.GetDataKecamatan(value))
                    } 
                >
                    {myKotakabupaten}
                </Picker>
                <Picker 
                    selectedValue={this.state.selectedKecamatan} 
                    onValueChange={
                        (value)=>this.setState({selectedKecamatan:value},
                        this.GetDataKelurahan(value))
                    }
                >
                    {myKecamatan}
                </Picker>
                <Picker 
                    selectedValue={this.state.selectedKelurahan} 
                    onValueChange={
                        (value)=>this.setState({selectedKelurahan:value})                     
                    }
                >
                    {myKelurahan}
                </Picker>
                <TouchableOpacity
                    onPress={() => Alert.alert(this.state.selectedValue)}
                >
                    <Text>Tes</Text>
                </TouchableOpacity>
            </View>            
        )
    }
}

export default Testing

const styles = StyleSheet.create({
    page:{ 
        flex: 1, 
        backgroundColor:WARNA_PUTIH,
        marginHorizontal:23,
        marginBottom:10,        
        paddingTop:10
    },
})
