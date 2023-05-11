import { Text, TextInput, View, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import { calculateABV } from '../utils/abv';

function ABVScreen() {
    const [ABV, setABV] = useState("0");
    const [OG, setOG] = useState("1060");
    const [FG, setFG] = useState("1020");

    useEffect(() => {
        updateABV();        
    },[FG, OG]);

    onChangeOG = (og) => {
        setOG(og);            
    }

    onChangeFG = (fg) => {
        setFG(fg);        
    }
    
    updateABV = () => {
        var _abv = calculateABV(OG, FG);
        
        setABV(_abv);
    }
    
    return (
        <View style={{ flex: 1 }}>
            <Text
                style={{ fontSize: 32, margin: 12 }}>
                OG
            </Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeOG}
                value={ OG }
                placeholder="OG"
                keyboardType="numeric"
            />
            <Text
                style={{ fontSize: 32, margin: 12 }}>
                FG
            </Text>
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
        marginLeft: 12,
        marginRight: 12,
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