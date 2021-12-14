import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { RadioButton } from 'react-native-paper';
import { WARNA_PUTIH, WARNA_SEKUNDER } from '../../../utils/constants'

const RowPertanyaan = ({no, pertanyaan}) => {
    const [value, setValue] = React.useState('first');
    return (
        <View style={no % 2 === 0 ? styles.containerQuestion1 : styles.containerQuestion2}>
            <View style={no % 2 === 0 ? styles.viewNo1 : styles.viewNo2}>
                <Text style={styles.text}>{no}</Text>
            </View>
            <View style={no % 2 === 0 ? styles.viewPertanyaan1 : styles.viewPertanyaan2}>
                <Text style={styles.text}>{pertanyaan}</Text>
            </View>
            <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
                <View style={styles.rbGroup}>
                    <View style={no % 2 === 0 ? styles.viewYa1 : styles.viewYa2}> 
                        <RadioButton
                            color={no % 2 === 0 ? WARNA_PUTIH : WARNA_SEKUNDER}
                            value="first" 
                            onPress={() => setChecked('first')}
                        />                
                    </View>
                    <View style={styles.viewTidak1}>
                        <RadioButton
                            color={no % 2 === 0 ? WARNA_PUTIH  : WARNA_SEKUNDER}
                            value="second" 
                            onPress={() => setChecked('second')}
                        />
                    </View>
                </View>
            </RadioButton.Group>
        </View>   
    )
}

export default RowPertanyaan

const styles = StyleSheet.create({
    containerQuestion1:{
        flexDirection:'row',        
        padding:5,
        backgroundColor:WARNA_SEKUNDER,        
    },
    containerQuestion2:{
        flexDirection:'row',        
        padding:5,
        backgroundColor:WARNA_PUTIH,        
    },
    rbGroup:{
        flexDirection:'row',        
    },
    viewNo1:{
        borderRightWidth:1,
        borderColor:WARNA_PUTIH,
        width:25,
        justifyContent:'center',
    },
    viewPertanyaan1:{
        borderRightWidth:1,
        borderColor:WARNA_PUTIH,
        flex:1,
        alignItems:'stretch',
        alignSelf:'stretch',
        paddingLeft:5
    },
    viewYa1:{
        borderRightWidth:1,
        borderColor:WARNA_PUTIH,
        alignItems:'center',        
        width:25,
    },
    viewTidak1:{
        alignSelf:'center',
        width:40,
    },
    viewNo2:{
        borderRightWidth:1,
        borderColor:WARNA_SEKUNDER,
        width:25,
        justifyContent:'center',        
    },
    viewPertanyaan2:{
        borderRightWidth:1,
        borderColor:WARNA_SEKUNDER,
        flex:1,
        alignItems:'stretch',
        alignSelf:'stretch',
        paddingLeft:5
    },
    viewYa2:{
        borderRightWidth:1,
        borderColor:WARNA_SEKUNDER,
        alignItems:'center',
        width:25,
    },    
    text:{
        fontFamily:"Poppins-Light",
        fontSize:12,        
    },
    radio:{
        color:{WARNA_SEKUNDER},
        borderColor:{WARNA_PUTIH}
    }
})
