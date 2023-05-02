import { Text, TextInput, View, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';

function ABVScreen() {
    const [ABV, setABV] = useState("0");
    const [OG, setOG] = useState("1060");
    const [FG, setFG] = useState("1020");

    useEffect(() => {
       calculateABV(); 
    },[FG, OG]);

    onChangeOG = (og) => {
        setOG(og);            
    }

    onChangeFG = (fg) => {
        setFG(fg);        
    }
    
    calculateABV = () => {
        var _abv = ((+OG - +FG) * 131) / 1000;
        _abv = +_abv.toFixed(2);
        
        setABV(_abv);
    }
    
    return (
        <View style={{ flex: 1 }}>
            <Text
                style={{ fontSize: 32, margin: 12 }}>
                ABV calculator
            </Text>

            <TextInput
                style={styles.input}
                onChangeText={onChangeOG}
                value={ OG }
                placeholder="OG"
                keyboardType="numeric"
            />
            <TextInput
                style={styles.input}
                onChangeText={onChangeFG}
                value={ FG }
                placeholder="FG"
                keyboardType="numeric"
            />
            <View style={styles.abv_container}>                
                <Text
                    style={styles.abv}>
                    Alcohol by volume: { ABV }%
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    abv_container: {
        flex:1, 
        fontSize: 22, 
        alignItems: 'center'
    },
    abv: {
        fontSize: 22
    }
});

export default ABVScreen;