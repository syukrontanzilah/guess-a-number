import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import colors from '../../util/colors'

const GameOver = (props) => {
    return (
        <View style={styles.page}>
            <Text>Game Selesai...</Text>
            <Text>Jumlah round: {props.roundsNumber}</Text>
            <Text>Angka Kamu: {props.userNumber}</Text>
            
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
