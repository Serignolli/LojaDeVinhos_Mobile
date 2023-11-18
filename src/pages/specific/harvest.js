import { useNavigation } from '@react-navigation/native';
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

import Itens from '../componets/Itens';

import vinho from '../objects/item.json';

import vinhoImg1 from '../assets/vinho1.webp';
import vinhoImg2 from '../assets/vinho2.webp';
import vinhoImg3 from '../assets/vinho3.jpg';
import vinhoImg4 from '../assets/vinho4.webp';


export default function Harvest(){
    const navigation = useNavigation();
    const navigateToDetail = (item, imagem) => {
        navigation.navigate('Detail', { item, imagem });
    };

    navigation.setOptions({
        headerTitle: 'Safras'
    });

    const vinho1 = vinho.vinho1;
    const vinho2 = vinho.vinho2;
    const vinho3 = vinho.vinho3;
    const vinho4 = vinho.vinho4;

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>Vinhos por safra</Text>
                </View>
                <View style={styles.Headerline}></View>

                <Text style={styles.text}>2010 - 2020</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <Itens
                            item={vinho1}
                            img={vinhoImg1}
                            onClick={() => navigateToDetail(vinho1, vinhoImg1)}>
                            {vinho1.nome}
                        </Itens>

                        <Itens
                            item={vinho2}
                            img={vinhoImg2}
                            onClick={() => navigateToDetail(vinho2, vinhoImg2)}>
                            {vinho2.nome}
                        </Itens>

                        <Itens
                            item={vinho3}
                            img={vinhoImg3}
                            onClick={() => navigateToDetail(vinho3, vinhoImg3)}>
                            {vinho3.nome}
                        </Itens>
                        <Itens
                            item={vinho4}
                            img={vinhoImg4}
                            onClick={() => navigateToDetail(vinho4, vinhoImg4)}>
                            {vinho4.nome}
                        </Itens>
                </ScrollView>

                <View style={styles.line}></View>

                <Text style={styles.text}>2000 - 2010</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <Itens
                            item={vinho1}
                            img={vinhoImg1}
                            onClick={() => navigateToDetail(vinho1, vinhoImg1)}>
                            {vinho1.nome}
                        </Itens>

                        <Itens
                            item={vinho2}
                            img={vinhoImg2}
                            onClick={() => navigateToDetail(vinho2, vinhoImg2)}>
                            {vinho2.nome}
                        </Itens>

                        <Itens
                            item={vinho3}
                            img={vinhoImg3}
                            onClick={() => navigateToDetail(vinho3, vinhoImg3)}>
                            {vinho3.nome}
                        </Itens>
                        <Itens
                            item={vinho4}
                            img={vinhoImg4}
                            onClick={() => navigateToDetail(vinho4, vinhoImg4)}>
                            {vinho4.nome}
                        </Itens>
                </ScrollView>

                <View style={styles.line}></View>

                <Text style={styles.text}>1990 - 2000</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <Itens
                            item={vinho1}
                            img={vinhoImg1}
                            onClick={() => navigateToDetail(vinho1, vinhoImg1)}>
                            {vinho1.nome}
                        </Itens>

                        <Itens
                            item={vinho2}
                            img={vinhoImg2}
                            onClick={() => navigateToDetail(vinho2, vinhoImg2)}>
                            {vinho2.nome}
                        </Itens>

                        <Itens
                            item={vinho3}
                            img={vinhoImg3}
                            onClick={() => navigateToDetail(vinho3, vinhoImg3)}>
                            {vinho3.nome}
                        </Itens>
                        <Itens
                            item={vinho4}
                            img={vinhoImg4}
                            onClick={() => navigateToDetail(vinho4, vinhoImg4)}>
                            {vinho4.nome}
                        </Itens>
                </ScrollView>

                <View style={styles.line}></View>

                <Text style={styles.text}>1980 - 1990</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <Itens
                            item={vinho1}
                            img={vinhoImg1}
                            onClick={() => navigateToDetail(vinho1, vinhoImg1)}>
                            {vinho1.nome}
                        </Itens>

                        <Itens
                            item={vinho2}
                            img={vinhoImg2}
                            onClick={() => navigateToDetail(vinho2, vinhoImg2)}>
                            {vinho2.nome}
                        </Itens>

                        <Itens
                            item={vinho3}
                            img={vinhoImg3}
                            onClick={() => navigateToDetail(vinho3, vinhoImg3)}>
                            {vinho3.nome}
                        </Itens>
                        <Itens
                            item={vinho4}
                            img={vinhoImg4}
                            onClick={() => navigateToDetail(vinho4, vinhoImg4)}>
                            {vinho4.nome}
                        </Itens>
                </ScrollView>

                <View style={styles.line}></View>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        width:'100%',
        backgroundColor:'#FFF'
    },
    header:{
        marginBottom:8
    },
    image:{
        width:'100%',
        height:'30%'
    },
    textContainer:{
        flexDirection:'row',
        marginVertical:'5%',
        marginHorizontal:'5%'
    },
    text:{
        fontFamily:'Inter_400Regular',
        fontSize: 26,
        marginHorizontal: '1%'
    },
    line:{
        borderWidth: 1,
        borderBottomColor: '#DDD',
        marginVertical: '2%'
    },
    Headerline:{
        borderWidth: 1,
        borderBottomColor: '#DDD',
        marginVertical: '2%'
    }
});