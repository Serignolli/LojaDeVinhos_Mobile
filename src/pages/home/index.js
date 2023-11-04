import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

import Itens from '../componets/Itens';


export default function Home(){
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                source={require('../assets/vinhos_banner.jpg')}
                style={styles.image}
                />

                <View style={styles.textContainer}>
                    <Text style={styles.text}>Vinho</Text>
                    <Text style={styles.text}> - Main vinho</Text>
                    <Text style={styles.text}>Mais texto</Text>
                </View>

                <ScrollView>
                    <Text>Promoção</Text>

                    <View style={style.itens}>
                        <Itens img={require('../assets/vinho1.webp')} cost='R$684,89' onClick={()=> navigation.navigate('Detail')}>
                            Vinho bla bla
                        </Itens>
                        <Itens img={require('../assets/vinho2.webp')} cost='R$684,89' onClick={()=> navigation.navigate('Detail')}>
                            Vinho bla bla bla
                        </Itens>
                        <Itens img={require('../assets/vinho3.jpg')} cost='R$684,89' onClick={()=> navigation.navigate('Detail')}>
                            Vinho bla
                        </Itens>
                        <Itens img={require('../assets/vinho4.webp')} cost='R$684,89' onClick={()=> navigation.navigate('Detail')}>
                            Vinho bla bla bla bla
                        </Itens>
                    </View>
                </ScrollView>
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
    itens:{
        flexDirection:'row',
        justifyContent:'space-around'
    }
});