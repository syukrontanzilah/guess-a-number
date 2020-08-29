import React from 'react'
import { StatusBar, StyleSheet, View } from 'react-native'
import Header from '../../component/Header'
import colors from '../../util/colors'
import StartGame from '../Screen/StartGame'

const Home = () => {
    return (
        <View style={styles.page}>
            <StatusBar backgroundColor={colors.primary} />
            <Header title="Tebak Angka" />
            <StartGame />

        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    page: {
        flex: 1
    }
})
