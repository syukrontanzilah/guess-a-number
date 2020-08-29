import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import colors from '../util/colors'

const NumberContainer = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.number}>{props.children}</Text>
        </View>
    )
}

export default NumberContainer

const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        borderColor: colors.secondary,
        padding:10,
        borderRadius:10,
        marginVertical:10,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'wheat'
    },
    number:{
        color: colors.secondary,
        fontSize:50
    }

})
