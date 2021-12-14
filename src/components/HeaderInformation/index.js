import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, ScrollView, StatusBar  } from 'react-native'
import AutoScrolling from 'react-native-auto-scrolling'
import { IconNotifikasi } from '../../assets/icons'
import { WARNA_BG_NAVBAR, WARNA_PUTIH, WARNA_UTAMA } from '../../utils/constants'

const HeaderInformation = ({user, role,lastLogin,notification}) => {
    return (
        <View style={styles.container}>
            {/* Nama last login */}
            <View style={styles.containerUser}>
                <Text numberOfLines={1} style={styles.textNama}>{user} ({role})</Text>
                {/* <Text style={styles.lastLogin}>{lastLogin}</Text> */}
            </View>
            {/* Notifikasi */}
            <View style={styles.notification}>
                <IconNotifikasi style={styles.notification_icon}/>
                {/* <AutoScrolling  style={styles.scroll}>
                    <Text style={styles.notification_text}>{notification}</Text>
                </AutoScrolling> */}
            </View>
        </View>
    )
}

export default HeaderInformation

const styles = StyleSheet.create({
    container:{
        backgroundColor:WARNA_UTAMA,
        marginHorizontal: -10,
        borderRadius:5,
        padding:8
    },
    containerUser:{
        paddingHorizontal:8,
    },
    textNama:{
        fontSize:14,
        color:WARNA_PUTIH,
        fontFamily:'Poppins-Light',
    },
    lastLogin:{
        fontSize:8,
        color:WARNA_PUTIH,
        fontFamily:'Poppins-Light',
    },
    notification:{
        marginTop:13,
        marginBottom:5,
        borderRadius:3,
        backgroundColor:WARNA_BG_NAVBAR,
        height:23,        
        flexDirection:'row',
        alignItems:'center'
    },
    notification_icon:{
        marginVertical:3,
        marginHorizontal:2
    },
    scroll:{
        marginLeft:4,
        marginRight:25,
        marginVertical:5
    },
    notification_text:{        
        fontSize:9,
        color:WARNA_PUTIH,
        fontFamily:'Poppins-Light',
    },    
})
