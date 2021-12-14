import React, { Component } from 'react';
import axios, { Axios } from 'axios'
import { AsyncStorage } from 'react-native'
import { StyleSheet,Button, Text, View, TouchableOpacity, Alert } from 'react-native'
import { DataTable } from 'react-native-paper';
import { Table, Row,TableWrapper, Cell, Rows } from 'react-native-table-component';
import { CellAksiFormulir } from '..';
import { WARNA_HITAM, WARNA_PUTIH, WARNA_SEKUNDER, WARNA_UTAMA, LINK_API } from '../../utils/constants';
import CellAksiFormulirMahasiswa from '../CellAksiFormulirMahasiswa';

let id = '';

AsyncStorage.getItem('user', (error, result) => {
        if(result){
            //Parse result ke JSON
            let resultParsed = JSON.parse(result)
            id = resultParsed.uname;
        }
    });

export default class TablePengisianMahasiswa extends Component {
    constructor(props) {
      super(props);
      this.state = {
        tableHead: ['No', 'Tanggal dan Waktu Buat', 'Status', 'Aksi'],
        widthArr: [32, 175, 79, 51],
        tableData: []
      }      
    }
    
    GetDataAbsensi = () => {

      axios
      .get(`${LINK_API}Absensi/GetListAbsensiMahasiswa?id=${id}`)
      .then( async (res) => {
            this.setState({
              tableData:res.data
            })
          })
    }
    componentDidMount(){
      this.GetDataAbsensi();
    }
    render() {
      const state = this.state;
      const props = this.props;
      let myRow = this.state.tableData.map((myValue,myIndex)=>{
        return(
          <DataTable.Row key={myIndex} style={styles.row}>
              <DataTable.Cell  style={{flex: 0.3}}>
                <Text style={styles.textData}>{myIndex+1}</Text>
              </DataTable.Cell>
              <DataTable.Cell  style={{flex: 2}}>
                <Text style={styles.textData}>{myValue.fma_tanggal_waktu}</Text>
              </DataTable.Cell>
              <DataTable.Cell  style={{flex: 1}}>
                <Text style={styles.textData}>{myValue.fma_status}</Text>
              </DataTable.Cell>
              <DataTable.Cell  style={{flex: 0.5}}>
                <CellAksiFormulirMahasiswa navigation = {props.navigation} fma_id = {myValue.fma_id}/>
              </DataTable.Cell>
          </DataTable.Row>
        )
    });      
      return (
        <View style={styles.container}>
          <Table style={styles.table}>
            <DataTable.Row style={styles.head}>
                <DataTable.Cell style={{flex: 0.3}}>
                  <Text style={styles.textHead}>{this.state.tableHead[0]}</Text>
                </DataTable.Cell>
                <DataTable.Cell style={{flex: 2}}>
                  <Text style={styles.textHead}>{this.state.tableHead[1]}</Text>
                </DataTable.Cell>
                <DataTable.Cell style={{flex: 1}}>
                  <Text style={styles.textHead} numberOfLines={1}>{this.state.tableHead[2]}</Text>
                </DataTable.Cell>
                <DataTable.Cell style={{flex: 0.5}}>
                  <Text style={styles.textHead}>{this.state.tableHead[3]}</Text>
                </DataTable.Cell>
            </DataTable.Row>
            {myRow}
          </Table>
        </View>
      )
    }
  }

const styles = StyleSheet.create({    
    container: { 
        flex: 1,
        paddingTop:16,        
    },
    head: { 
        height: 40, 
        backgroundColor: WARNA_UTAMA,
        borderTopLeftRadius:5,
        borderTopRightRadius:5
    },
    textHead: { 
        margin: 6,        
        textAlign:'center',
        fontSize:10,
        fontFamily:"Poppins-Light",
        color:WARNA_PUTIH
    },
    textData:{
        textAlign:'center',
        fontSize:10,
        fontFamily:"Poppins-Light",
        color:WARNA_HITAM,
    },
    row: {         
        flexDirection: 'row',        
        borderBottomWidth:1,
        borderBottomColor:WARNA_SEKUNDER, 
    },
})

