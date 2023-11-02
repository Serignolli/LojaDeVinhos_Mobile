import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";


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
    }
});