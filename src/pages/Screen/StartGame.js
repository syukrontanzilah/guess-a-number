import React from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import Card from '../../component/Card'
import colors from '../../util/colors'
import Input from '../../component/Input'

const StartGame = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Mulai Permainan</Text>
            <Card style={styles.inputContainer}>
                <Text>Pilih angka</Text>
                <Input
                    maxLength={3}
                    autoCorrect={false}
                    placeholder="0"
                    keyboardType="number-pad"
                    style={styles.input} />
                <View style={styles.btnContainer}>
                    <View style={styles.button}>
                        <Button title="Ubah" color={colors.secondary} onPress={() => { }} />
                    </View>
                    <View style={styles.button}>
                        <Button title="OK" color={colors.primary} />
                    </View>
                </View>
            </Card>

        </View>
    )
}

export default StartGame

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        marginVertical: 12
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
    },
    input: {
        color: '#f4287b',
        fontSize: 30,
        height: 50,
        maxWidth: 150,
        textAlign: 'center',

    },
    btnContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 13
    },
    button: {
        width: 80
    }
})
