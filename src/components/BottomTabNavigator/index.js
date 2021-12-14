import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity  } from 'react-native'
import { WARNA_SEKUNDER, WARNA_UTAMA } from '../../utils/constants';
import TabItem from '../TabItem';

const BottomTabNavigator = ( { state, descriptors, navigation } ) => {
    const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View style={ styles.container }>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TabItem
            key={index}
            isFocused={isFocused}
            label={label}
            onPress={onPress}
            onLongPress={onLongPress}
          />
        );
      })}
    </View>
  );
}

export default BottomTabNavigator

const styles = StyleSheet.create({
     container:{
         flexDirection : 'row',
         backgroundColor: WARNA_UTAMA,
         justifyContent:'space-between',
         paddingTop: 11,
         paddingBottom:6,
         paddingHorizontal:14,
         height:58,
         borderTopLeftRadius:7,
         borderTopRightRadius:7
     }
})
