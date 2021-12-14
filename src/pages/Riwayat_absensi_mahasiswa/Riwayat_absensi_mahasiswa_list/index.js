import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { TablePengisianMahasiswa, ButtonIsiFormulir, NotifPengisian  } from '../../../components'
import { WARNA_PUTIH } from '../../../utils/constants'
// import { , HeaderApps, HeaderInformation, InformasiPengisian, NotifPengisian } from '../../components'

const Riwayat_absensi_mahasiswa_list = ({hasAbsen=false, navigation}) => {
    return (
        <View style={ styles.page }>  
        <ScrollView style={styles.containerScroll}>
            {/* BUTTON ISI FORMULIR AKAN AKTTIF JIKA BELUM MENGISI FORMULIR */}
            {/* {hasAbsen == true ? <NotifPengisian data={data}/>  : <ButtonIsiFormulir navigation = {navigation}/>} */}
                <TablePengisianMahasiswa navigation={navigation}/>
            </ScrollView>
        </View>
    )
}

// export default Riwayat_absensi_mahasiswa_list
export default Riwayat_absensi_mahasiswa_list

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