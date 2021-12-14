import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { WARNA_HITAM } from '../../utils/constants'

const InformasiDataDiriKaryawan = ({nim, nama, prodi, tingkat, status, beasiswa, nomor}) => {
    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.textHeader}>
                    NPK/Nama Akun
                </Text>
                <Text style={styles.textBody}>
                    51786
                </Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.textHeader}>
                    Nama
                </Text>
                <Text style={styles.textBody}>
                   Yosep Setiawan
                </Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.textHeader}>
                    Jenis Kelamin
                </Text>
                <Text style={styles.textBody}>
                    Pria
                </Text>
            </View>
        </View>
    )
}

export default InformasiDataDiriKaryawan

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