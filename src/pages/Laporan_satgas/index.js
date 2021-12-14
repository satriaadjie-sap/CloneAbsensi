import React from 'react'
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import TableLaporan from '../../components/TableLaporan';
import { WARNA_BG_FORM, WARNA_MERAH, WARNA_PUTIH, WARNA_SEKUNDER } from '../../utils/constants'

let rolget = '';

const Laporan_satgas = ({hasAbsen=false, navigation}) => {
    return (
        <View style={ styles.page }>                
            <ScrollView style={styles.containerScroll}>
                <TableLaporan navigation={navigation}/>
            </ScrollView>
        </View>
                      
    )
}

export default Laporan_satgas

const styles = StyleSheet.create({
    page:{ 
        flex: 1, 
        backgroundColor:WARNA_PUTIH,        
    },
    containerScroll:{        
        height:300
    },
    container:{
        marginHorizontal:23,
        marginBottom:10,        
        paddingTop:10
    },
    textUtama:{
        fontFamily:'Poppins-Light',
        fontSize:12
    },
    textKesulitan:{
        fontFamily:'Poppins-Light',
        fontSize:13,
        marginTop:10,
        borderTopWidth:1,
        borderColor:WARNA_SEKUNDER,
        paddingTop:10
    }
})