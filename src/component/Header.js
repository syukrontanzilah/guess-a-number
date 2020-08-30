import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import colors from '../util/colors'
import { fonts } from '../util/fonts'

const Header = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{props.title}</Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 50,
        // paddingTop:30,
        backgroundColor: colors.primary,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        color: '#fff',
        fontSize: 25,
        fontFamily: fonts.tiki,
        letterSpacing: 3
    }
})
