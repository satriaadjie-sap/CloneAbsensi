import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { FormUbahSandi, HeaderApps } from '../../components'
import { WARNA_PUTIH } from '../../utils/constants'

const Ubah_sandi = () => {
    return (
        <View style={ styles.page }>
            <FormUbahSandi/>
        </View>
    )
}

export default Ubah_sandi

const styles = StyleSheet.create({
    page:{ 
        flex: 1, 
        backgroundColor:WARNA_PUTIH,
        justifyContent:'center',
        alignItems:'center'
    }
})
