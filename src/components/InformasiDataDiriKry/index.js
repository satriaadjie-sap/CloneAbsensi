import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { WARNA_HITAM } from '../../utils/constants'

const InformasiDataDiri = ({id, namaDpn, namaBlkg, status}) => {
    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.textHeader}>
                    NPK/Nama Akun
                </Text>
                <Text style={styles.textBody}>
                    {id}
                </Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.textHeader}>
                    Nama
                </Text>
                <Text style={styles.textBody}>
                    {namaDpn} {namaBlkg}
                </Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.textHeader}>
                    Seksi/Departemen
                </Text>
                <Text style={styles.textBody}>
                    {status}
                </Text>
            </View>
        </View>
    )
}

export default InformasiDataDiri

const styles = StyleSheet.create({
    container:{

    },
    textContainer:{

    },
    textHeader:{
        color:WARNA_HITAM,
        fontSize:13,
        fontFamily:"Poppins-Bold",
        marginBottom:-5
    },
    textBody:{        
        color:WARNA_HITAM,
        fontSize:13,
        fontFamily:"Poppins-Light"
    }
})
