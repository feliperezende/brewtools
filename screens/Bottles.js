import { useState, useEffect } from 'react';
import { Text, TextInput, View, StyleSheet } from 'react-native';

function BottlesScreen({ navigation }) {
    const [volume, setVolume] = useState("20");
    const [ml300, setMl300] = useState(0);
    const [ml355, setMl355] = useState(0);
    const [ml500, setMl500] = useState(0);
    const [ml600, setMl600] = useState(0);
    const [ml750, setMl750] = useState(0);

    useEffect(() => {      
      setMl300(Math.round((volume * 1000) / 300));
      setMl355(Math.round((volume * 1000) / 355));
      setMl500(Math.round((volume * 1000) / 500));
      setMl600(Math.round((volume * 1000) / 600));
      setMl750(Math.round((volume * 1000) / 750));      
    },[volume]);

    onChangeVolume = (volume) => {
      setVolume(volume);            
    }

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Volume in liters</Text>
        <TextInput                
                style={styles.input}
                onChangeText={onChangeVolume}
                value={volume}
                placeholder="Volume"
                keyboardType="numeric"
            />

        <Text style={styles.title}>300 ml</Text>
        <Text>{ ml300 }</Text>

        <Text style={styles.title}>355 ml</Text>
        <Text>{ ml355 }</Text>
        
        <Text style={styles.title}>300 ml</Text>
        <Text>{ ml300 }</Text>
        
        <Text style={styles.title}>500 ml</Text>
        <Text>{ ml500 }</Text>
        
        <Text style={styles.title}>600 ml</Text>
        <Text>{ ml600 }</Text>

        <Text style={styles.title}>750 ml</Text>
        <Text>{ ml750 }</Text>

      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      margin: 12,
    },
    input: {
        height: 40,        
        borderWidth: 1,
        padding: 10,
    },
    title: {
      fontSize: 22
  }
});


export default BottlesScreen;