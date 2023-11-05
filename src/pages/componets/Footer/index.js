import { useNavigation } from '@react-navigation/native';
import React from "react";
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import Itens from '../Itens';

export default function Footer(){
    const navigation = useNavigation();
    return(
        <View style={styles.container}>
            <Text style={styles.title}>VOCÊ TAMBÉM PODE GOSTAR</Text>

            <View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <View style={{marginHorizontal: 10}}>
                        <Itens img={require('../../assets/vinho1.webp')} cost='R$684,89' onClick={()=> navigation.navigate('Detail')}>
                            Vinho bla bla
                        </Itens>
                        <Itens img={require('../../assets/vinho2.webp')} cost='R$684,89' onClick={()=> navigation.navigate('Detail')}>
                            Vinho bla bla bla
                        </Itens>
                    
                        <Itens img={require('../../assets/vinho3.jpg')} cost='R$684,89' onClick={()=> navigation.navigate('Detail')}>
                            Vinho bla
                        </Itens>
                        <Itens img={require('../../assets/vinho4.webp')} cost='R$684,89' onClick={()=> navigation.navigate('Detail')}>
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
        alignItems: 'center',
        justifyContent: 'center'
    },
    title:{
        fontSize: 24,
        fontFamily:  'Inter_400Regular',
        marginVertical: '2%',
        paddingHorizontal: '2%'
    }
});