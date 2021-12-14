import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { HeaderApps,HeaderInformation, TablePengisian, TablePengumuman } from '../../components'
import { WARNA_PUTIH } from '../../utils/constants'
import { Riwayat_absensi_list, Riwayat_absensi_detail } from './Riwayat_absensi_routing'

const Stack = createStackNavigator();

const IndexAbsensi = () => {
    return (
        <Stack.Navigator initialRouteName="Riwayat_absensi_list">
            <Stack.Screen name="Riwayat_absensi_list"
                component={Riwayat_absensi_list} 
                options={{
                    headerShown:false
                }}
                />
            <Stack.Screen name="Riwayat_absensi_detail"
                component={Riwayat_absensi_detail} 
                options={{
                     headerShown:false
                }}
                />
        </Stack.Navigator>
    )
}


const Riwayat_absensi = () => {
    return (
        <View style={ styles.page }>            
            <ScrollView style={styles.containerScroll}>
                <IndexAbsensi/>
            </ScrollView>
        </View>
    )
}

export default IndexAbsensi

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