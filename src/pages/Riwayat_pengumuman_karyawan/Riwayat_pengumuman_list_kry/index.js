import React from 'react'
import {AsyncStorage, StyleSheet, Text, View, ScrollView } from 'react-native'
import { TablePengumumanKry } from '../../../components'
import { WARNA_PUTIH } from '../../../utils/constants'

const Riwayat_pengumuman_list_kry = ({navigation}) => {
    
        return (
            <View style={ styles.page }>            
                <ScrollView style={styles.containerScroll}>
                    <TablePengumumanKry navigation={navigation}/>
                </ScrollView>
            </View>
        )  
}

// export default Riwayat_pengumuman_list
export default Riwayat_pengumuman_list_kry

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
