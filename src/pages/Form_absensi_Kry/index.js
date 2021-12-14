import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import { StyleSheet,Text, View, ScrollView } from 'react-native'
import { WARNA_PUTIH } from '../../utils/constants'
import { Form_absensi_sudah, Form_absensi_1, Form_absensi_2, Form_absensi_3,
    Form_absensi_4, Form_absensi_Loc, Form_absensi_5, Form_absensi_detail } from './Form_routing'

const Stack = createStackNavigator();

const MainForm = () => {
    return (
        <Stack.Navigator initialRouteName="Form_absensi_1">
            <Stack.Screen name="Form_absensi_sudah"
                component={Form_absensi_sudah} 
                // component={Form_absensi_1} 
                options={{
                    headerShown:false
                }}
                />
            <Stack.Screen name="Form_absensi_detail"
                component={Form_absensi_detail} 
                options={{
                     headerShown:false
                }}
                />
            <Stack.Screen name="Form_absensi_1"
                component={Form_absensi_1} 
                options={{
                     headerShown:false
                }}
                />
            <Stack.Screen name="Form_absensi_2"
                component={Form_absensi_2}
                options={{
                     headerShown:false
                }}
                />
            <Stack.Screen name="Form_absensi_3"
                component={Form_absensi_3}
                options={{
                     headerShown:false
                }}
                />
            <Stack.Screen name="Form_absensi_4"
                component={Form_absensi_4}
                options={{
                     headerShown:false
                }}
                />
            <Stack.Screen name="Form_absensi_Loc"
                component={Form_absensi_Loc}
                options={{
                     headerShown:false
                }}
                />
            <Stack.Screen name="Form_absensi_5"
                component={Form_absensi_5}
                options={{
                     headerShown:false
                }}
                />
        </Stack.Navigator>
    )
}

const Form_absensi_Kry = () => {
    return (
        <View style={ styles.page }>
            <ScrollView style={styles.containerScrollView}>
                {/* <MainForm/> */}
                {/* <Form_absensi_sudah/> */}
                {/* <Form_absensi_detail/> */}
                {/* <Form_absensi_1/> */}
                {/* <Form_absensi_2/> */}
                {/* <Form_absensi_3/> */}
                {/* <Form_absensi_4/> */}
                {/* <Form_absensi_5/> */}
            </ScrollView>
        </View>
    )
}

export default MainForm

const styles = StyleSheet.create({
    page:{ 
        flex: 1, 
        backgroundColor:WARNA_PUTIH,
        
    },
    containerScrollView:{
        paddingHorizontal:13
    }
})
