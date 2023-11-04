import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

function filtroDesc(desc){
    if(desc.length < 27){
        return desc;
    }

    return `${desc.substring(0, 22)}...`;
}

export default function Itens(props){
    return(
        <View>
            <TouchableOpacity style={styles.container} onPress={props.onClick}>
                <Image
                source={props.img}
                style={styles.itemImg}
                />
                <Text style={styles.itemText}>
                    {filtroDesc(props.children)}
                </Text>
                <View opacity={0.4}>
                    <Text style={styles.itemText}>
                        {props.cost}
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        paddingVertical: '2%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    itemImg:{
        width: 175,
        height: 175
    },
    itemText:{
        fontSize: 16
    }
});