import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { WARNA_HITAM } from '../../../utils/constants'

const TemplateInfo = ({question, answer}) => {
    return (
        <View>
            <Text style={styles.header}>
                {question}
            </Text>
            <Text style={styles.body}>
                {answer}
            </Text>
        </View>
    )
}

export default TemplateInfo

const styles = StyleSheet.create({
    header:{
        fontFamily:"Poppins-SemiBold",
        fontSize:13,
        color:WARNA_HITAM,
        paddingBottom:5
    },
    body:{
        fontFamily:"Poppins-Light",
        fontSize:13,
        color:WARNA_HITAM
    }        
})
