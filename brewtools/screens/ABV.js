import { Text, TextInput, View, StyleSheet } from 'react-native';
import React, { useState } from 'react';

function ABVScreen() {
    const [ABV, setABV] = useState("0");
    const [OG, setOG] = useState("1060");
    const [FG, setFG] = useState("1020");

    onChangeOG = (og) => {
        setOG(og);
        
        calculateABV(OG, FG);        
    }

    onChangeFG = (fg) => {
        setFG(fg);

        calculateABV(OG, FG);
    }
    
    calculateABV = (og, fg) => {
        var _abv = ((+og - +fg) * 131) / 1000;
        _abv = +_abv.toFixed(2);
        
        setABV(_abv);
        console.log(OG);
        console.log(FG);
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
                    { ABV }
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