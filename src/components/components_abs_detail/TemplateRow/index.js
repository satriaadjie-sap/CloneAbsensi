import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { WARNA_HITAM, WARNA_PUTIH, WARNA_SEKUNDER } from '../../../utils/constants'

const TemplateRow = ({no, question, answer}) => {
    return (
        <View style={no % 2 === 0 ? styles.container1 : styles.container2}>
            <View style={no % 2 === 0 ? styles.viewNo1 : styles.viewNo2}>
                <Text style={no % 2 === 0 ? styles.textNo1 : styles.textNo2}>{no}</Text>
            </View>
            <View style={no % 2 === 0 ? styles.viewPertanyaan1 : styles.viewPertanyaan2}>
                <Text style={no % 2 === 0 ? styles.textPertanyaan1 : styles.textPertanyaan2}>{question}</Text>
            </View>
            <View style={no % 2 === 0 ?  styles.viewJawaban1 : styles.viewJawaban2}>
                <Text style={no % 2 === 0 ? styles.textJawaban1 : styles.textJawaban2}>{answer}</Text>
            </View>
        </View>
    )
}

export default TemplateRow

const styles = StyleSheet.create({
    container1:{
        flexDirection:'row',
        backgroundColor:WARNA_SEKUNDER,
        padding:5
    },
    container2:{
        flexDirection:'row',
        backgroundColor:WARNA_PUTIH,
        padding:5
    },
    viewNo1:{
        borderRightWidth:1,
        borderColor:WARNA_PUTIH,
        width:30,
        justifyContent:'center'
    },
    viewPertanyaan1:{
        borderRightWidth:1,
        borderColor:WARNA_PUTIH,
        flex:1,
        alignItems:'stretch',
        alignSelf:'stretch'
    },
    viewJawaban1:{        
        alignItems:'center',
        width:70,
        justifyContent:'center'
    },
    viewNo2:{
        borderRightWidth:1,
        borderColor:WARNA_SEKUNDER,
        width:30,
        justifyContent:'center'
    },
    viewPertanyaan2:{
        borderRightWidth:1,
        borderColor:WARNA_SEKUNDER,
        flex:1,
        alignItems:'stretch',
        alignSelf:'stretch'
    },
    viewJawaban2:{        
        alignItems:'center',
        width:70,
        justifyContent:'center'
    },
    textNo1:{        
        textAlign:'center',
        color:WARNA_HITAM,
        fontFamily:"Poppins-Light",
        fontSize:12
    },
    textPertanyaan1:{
        justifyContent:'space-around',        
        color:WARNA_HITAM,
        paddingLeft:10,
        fontFamily:"Poppins-Light",
        fontSize:12
    },
    textJawaban1:{        
        textAlign:'center',
        color:WARNA_HITAM,
        fontFamily:"Poppins-Light",
        fontSize:12
    },
    textNo2:{        
        textAlign:'center',
        color:WARNA_HITAM,
        fontFamily:"Poppins-Light",
        fontSize:12
    },
    textPertanyaan2:{
        justifyContent:'space-around',        
        paddingLeft:10,
        color:WARNA_HITAM,
        fontFamily:"Poppins-Light",
        fontSize:12
    },
    textJawaban2:{        
        textAlign:'center',
        color:WARNA_HITAM,
        fontFamily:"Poppins-Light",
        fontSize:12
    },
})
