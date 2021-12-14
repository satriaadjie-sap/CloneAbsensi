import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { NotifPengisian, TablePengisian, TablePengisianMahasiswa } from '../../../components'
import { WARNA_PUTIH } from '../../../utils/constants'

const Form_absensi_sudah = ({navigation}) => {
    return (
        <View style={ styles.page }>
            <ScrollView style={styles.containerScrollView}>
                <View>            
                <NotifPengisian/>
                    <ScrollView style={styles.containerScroll}>
                        <View styl={styles.container}>   
                            <TablePengisianMahasiswa navigation={navigation}/>
                        </View>
                    </ScrollView>
                </View>
            </ScrollView>
        </View>
    )
}

export default Form_absensi_sudah

const styles = StyleSheet.create({
    
    containerScroll:{
        height:420,        
    },
    container:{        
    },
    page:{ 
        flex: 1, 
        backgroundColor:WARNA_PUTIH,
        
    },
    containerScrollView:{
        paddingHorizontal:13
    }
})