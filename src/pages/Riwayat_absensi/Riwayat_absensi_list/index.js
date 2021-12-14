import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { TablePengisian } from '../../../components'
import { WARNA_PUTIH } from '../../../utils/constants'

const Riwayat_absensi_list = ({hasAbsen=false, navigation}) => {
    return (
        <View style={ styles.page }>            
            <ScrollView style={styles.containerScroll}>
                <TablePengisian navigation={navigation}/>
            </ScrollView>
        </View>
    )
}

// export default Riwayat_absensi_list
export default Riwayat_absensi_list

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