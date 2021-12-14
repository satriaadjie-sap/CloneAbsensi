import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { HeaderApps,HeaderInformation, TablePengisian, TablePengumumanSatgas } from '../../components'
import { WARNA_PUTIH } from '../../utils/constants'
import {Riwayat_pengumuman_list_sat, Riwayat_pengumuman_detail_sat, Form_create_pengumuman, Form_ubah_pengumuman } from './Riwayat_pengumuman_sat_routing'

const Stack = createStackNavigator();

const IndexPengumuman_sat = () => {
    return (
        <Stack.Navigator initialRouteName="Riwayat_pengumuman_list_sat">
            <Stack.Screen name="Riwayat_pengumuman_list_sat"
                component={Riwayat_pengumuman_list_sat} 
                options={{
                    headerShown:false
                }}
                />
            <Stack.Screen name="Riwayat_pengumuman_detail_sat"
                component={Riwayat_pengumuman_detail_sat} 
                options={{
                     headerShown:false
                }}
                />
            <Stack.Screen name="Form_create_pengumuman"
                component={Form_create_pengumuman} 
                options={{
                     headerShown:false
                }}
                />
            <Stack.Screen name="Form_ubah_pengumuman"
                component={Form_ubah_pengumuman} 
                options={{
                     headerShown:false
                }}
                />
                {/* <Stack.Screen name="Riwayat_pengumuman_detail_kry"
                component={Riwayat_pengumuman_detail_kry} 
                options={{
                     headerShown:false
                }}
                /> */}
        </Stack.Navigator>
        
    )
}

const Riwayat_pengumuman_satgas = () => {
    return (
        <View style={ styles.page }>            
            <ScrollView style={styles.containerScroll}>
                <IndexPengumuman_sat/>
            </ScrollView>
        </View>
    )
}

export default IndexPengumuman_sat

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