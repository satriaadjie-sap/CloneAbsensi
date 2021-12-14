import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { HeaderApps,HeaderInformation, TablePengisian, TablePengumuman } from '../../components'
import { WARNA_PUTIH } from '../../utils/constants'
import {Riwayat_absensi_mahasiswa_list, Riwayat_absensi_mahasiswa_detail } from './Riwayat_absensi_mahasiswa_routing'

const Stack = createStackNavigator();

const IndexAbsensiMahasiswa = () => {
    return (
        <Stack.Navigator initialRouteName="Riwayat_absensi_mahasiswa_list">
            <Stack.Screen name="Riwayat_absensi_mahasiswa_list"
                component={Riwayat_absensi_mahasiswa_list} 
                options={{
                    headerShown:false
                }}
                />
            <Stack.Screen name="Riwayat_absensi_mahasiswa_detail"
                component={Riwayat_absensi_mahasiswa_detail} 
                options={{
                     headerShown:false
                }}
                />
        </Stack.Navigator>
    )
}


const Riwayat_absensi_mahasiswa = () => {
    return (
        <View style={ styles.page }>            
            <ScrollView style={styles.containerScroll}>
                <IndexAbsensiMahasiswa/>
            </ScrollView>
        </View>
    )
}

export default IndexAbsensiMahasiswa

const styles = StyleSheet.create({
    page:{ 
        flex: 1, 
        backgroundColor:WARNA_PUTIH
    },
    containerScroll:{
        height:300,
        marginHorizontal:13
    },
    container:{        
    },
})