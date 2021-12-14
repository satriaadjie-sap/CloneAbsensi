import React, {useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import CheckBox from '@react-native-community/checkbox'

const CheckboxPenyakit = ({Hipertensi, Diabetes, Jantung, Paru, Ginjal, Lever, Nope}) => {
    const [isSelected, setSelection] = useState(false);
    return (
        <View>
            <View style={styles.containerQuestion}>
                <Text style={styles.textHeader}>
                    Apakah Anda menderita penyakit di bawah ini?                    
                </Text>
                
                {/* Hipertensi */}
                <View style={styles.checkboxContainer}>
                    <CheckBox
                        value={Hipertensi}
                        onValueChange={setSelection}
                        disabled={true}
                    />
                    <Text style={styles.label}>Hipertensi</Text>
                </View>

                {/* Diabetes */}
                <View style={styles.checkboxContainer}>
                    <CheckBox
                        value={Diabetes}
                        onValueChange={setSelection}
                        disabled={true}
                    />
                    <Text style={styles.label}>Diabetes</Text>
                </View>

                {/* Jantung */}
                <View style={styles.checkboxContainer}>
                    <CheckBox
                        value={Jantung}
                        onValueChange={setSelection}
                        disabled={true}
                    />
                    <Text style={styles.label}>Jantung</Text>
                </View>

                {/* Gangguan Paru-Paru (Misalnya : Asma) */}
                <View style={styles.checkboxContainer}>
                    <CheckBox
                        value={Paru}
                        onValueChange={setSelection}
                        disabled={true}
                    />
                    <Text style={styles.label}>Gangguan Paru-Paru (Misalnya : Asma)</Text>
                </View>

                {/* Ginjal */}
                <View style={styles.checkboxContainer}>
                    <CheckBox
                        value={Ginjal}
                        onValueChange={setSelection}
                        disabled={true}
                    />
                    <Text style={styles.label}>Ginjal</Text>
                </View>

                {/* Lever */}
                <View style={styles.checkboxContainer}>
                    <CheckBox
                        value={Lever}
                        onValueChange={setSelection}
                        disabled={true}
                    />
                    <Text style={styles.label}>Lever</Text>
                </View>

                {/* Tidak ada satupun  tertera di atas */}
                <View style={styles.checkboxContainer}>
                    <CheckBox
                        value={Nope}
                        onValueChange={setSelection}
                        disabled={true}
                    />
                    <Text style={styles.label}>Tidak ada satupun  tertera di atas</Text>
                </View>
            </View>
        </View>
    )
}

export default CheckboxPenyakit

const styles = StyleSheet.create({
    textHeader:{
        marginBottom:5
    },
    checkboxContainer: {        
        height:25,
        flexDirection: "row",
        alignItems:'center'
    }, 
    label: {
        fontFamily:"Poppins-Light",
        fontSize:13
    },
})
