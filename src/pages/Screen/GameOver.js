import React from 'react'
import { StyleSheet, Text, View, Button, Image } from 'react-native'
import colors from '../../util/colors'

const GameOver = (props) => {
    return (
        <View style={styles.page}>
            <Text>Game Selesai...</Text>
            <Text>Jumlah round: {props.roundsNumber}</Text>
            <Text>Angka Kamu: {props.userNumber}</Text>
            <Image source={require('../../asset/icon/nussa-family.png')}
            style={{height:110, width:200, marginTop:10}}/>
            <View style={{marginTop:20}}>
                <Button title ="Main lagi" 
                color={colors.primary}
                onPress={props.onRestart}
                />
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
    }
})
