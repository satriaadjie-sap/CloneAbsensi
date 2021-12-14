import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { HeaderApps,HeaderInformation, TablePengisian, TablePengumuman } from '../../components'
import { WARNA_PUTIH } from '../../utils/constants'
import {Riwayat_pengumuman_list, Riwayat_pengumuman_detail } from './Riwayat_pengumuman_routing'

const Stack = createStackNavigator();

const IndexPengumuman = () => {
    return (
        <Stack.Navigator initialRouteName="Riwayat_pengumuman_list">
            <Stack.Screen name="Riwayat_pengumuman_list"
                component={Riwayat_pengumuman_list} 
                options={{
                    headerShown:false
                }}
                />
            <Stack.Screen name="Riwayat_pengumuman_detail"
                component={Riwayat_pengumuman_detail} 
                options={{
                     headerShown:false
                }}
                />
        </Stack.Navigator>
        
    )
}


const Riwayat_pengumuman = () => {
    return (
        <View style={ styles.page }>            
            <ScrollView style={styles.containerScroll}>
                <IndexPengumuman/>
            </ScrollView>
        </View>
    )
}

export default IndexPengumuman

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
