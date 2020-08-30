import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import colors from '../util/colors'
import { fonts } from '../util/fonts'

const MyButton = (props) => {
    return (
        <TouchableOpacity
        activeOpacity={0.6}
            onPress={props.onPress}
            style={styles.container}>
            <View style={{...styles.wrap, ...props.style}}>
                <Text style={styles.title}>{props.children}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default MyButton

const styles = StyleSheet.create({
    container: {

    },
    wrap: {
        backgroundColor: colors.primary,
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius:4
    },
    title: {
        color: '#fff',
        fontFamily: fonts.happy,
        fontSize: 18
    }
})
