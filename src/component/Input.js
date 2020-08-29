import React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'

const Input = (props) => {
    return (
        <TextInput
            {...props}
            // placeholder={props.placeholder}
            // keyboardType={props.keyboardType}
            style={{ ...styles.input, ...props.style }}

        />
    )
}

export default Input

const styles = StyleSheet.create({
    input: {
        height: 30,
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        marginVertical: 10
    }
})
