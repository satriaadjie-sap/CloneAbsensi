import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { HeaderApps,HeaderInformation, TablePengisian, TablePengumumanKry } from '../../components'
import { WARNA_PUTIH } from '../../utils/constants'
import {Riwayat_pengumuman_list_kry, Riwayat_pengumuman_detail_kry } from './Riwayat_pengumuman_kry_routing'

const Stack = createStackNavigator();

const IndexPengumuman_kry = () => {
    return (
        <Stack.Navigator initialRouteName="Riwayat_pengumuman_list_kry">
            <Stack.Screen name="Riwayat_pengumuman_list_kry"
                component={Riwayat_pengumuman_list_kry} 
                options={{
                    headerShown:false
                }}
                />
            <Stack.Screen name="Riwayat_pengumuman_detail_kry"
                component={Riwayat_pengumuman_detail_kry} 
                options={{
                     headerShown:false
                }}
                />
        </Stack.Navigator>
        
    )
}

const Riwayat_pengumuman_karyawan = () => {
    return (
        <View style={ styles.page }>            
            <ScrollView style={styles.containerScroll}>
                <IndexPengumuman_kry/>
            </ScrollView>
        </View>
    )
}

export default IndexPengumuman_kry

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
