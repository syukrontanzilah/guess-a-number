import React from 'react'
import { StyleSheet, Text, View, Button, Image } from 'react-native'
import colors from '../../util/colors'
import { fonts } from '../../util/fonts'
import MyButton from '../../component/MyButton'

const GameOver = (props) => {
    return (
        <View style={styles.page}>
            <Text style={styles.title}>Game Selesai...</Text>
            <Text style={styles.title}>hp mu perlu {''}
                <Text style={{ fontSize: 30, color: colors.secondary }}>
                    {props.roundsNumber}
                </Text>
                {''} ronde
            </Text>
            <Text style={styles.title}>untuk tebak Angka <Text style={{ fontSize: 35, color: colors.secondary }}>
                {props.userNumber}
            </Text> Hihi..</Text>
            <Image source={require('../../asset/icon/nussa-family.png')}
                style={{ height: 110, width: 200, marginTop: 10, marginBottom: 10 }} />
            <View style={{ marginTop: 5 }}>
                <MyButton
                    onPress={props.onRestart}
                >
                    Main Lagi
                </MyButton>
            </View>
        </View>
    )
}

export default GameOver

const styles = StyleSheet.create({
    page: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontFamily: fonts.happy,
        fontSize: 24
    }

})
