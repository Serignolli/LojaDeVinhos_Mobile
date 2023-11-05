import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

import Button from '../componets/Button';
import Footer from '../componets/Footer';

export default function Detail({ navigation }){

    navigation.setOptions({
        headerTitle:  'Vinho bla bla'
    })
    return(
        <ScrollView style={styles.container}>
            <Image
            source={require('../assets/vinho1.webp')}
            style={styles.image}
            />

            <View>
                <View>
                    <Text style={[styles.title, {fontSize:24}]}>R$123,45</Text>
                </View>
                <View opacity={0.4}>
                    <Text style={[styles.title, {fontSize:30}]}>Nome do produto</Text>
                </View>
            </View>

            <View style={styles.textContent}>
                <Text style={styles.textTitle}>
                    Nome vinho
                </Text>
                <Text style={styles.textContent}>
                    Descrição do vinho
                    aaaaaaaaaaaaaaaaaaa
                    aaaaaaaaaaaaaaaaaaaa
                    aaaaaaaaaaaaaaaaaaaaa
                </Text>
                <Text style={styles.textList}>
                    Ano - 1256
                </Text>
                <Text style={styles.textList}>
                    Nacionalidade - Konoha
                </Text>
            </View>

            <Button/>

            <View style={styles.line}></View>

            <Footer/>
        
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        width: '100%',
        backgroundColor:  '#FFF',
    },
    image:{
        width: '100%'
    },
    title:{
        fontFamily: 'Inter_400Regular',
        paddingHorizontal: '2%',
    },
    textContent:{
        fontSize: 16,
        lineHeight: 25,
        marginVertical: '2%',
        paddingHorizontal: '2%'
    },
    textTitle:{
        fontSize: 22,
        marginVertical: '2%'
    },
    textList:{
        fontSize: 16,
        lineHeight: 25,
    },
    Line:{
        borderWidth: 1,
        borderBottomColor: '#DDD',
        marginVertical: '2%'
    }
})