import { useEffect, useState } from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import { correctReading } from "../utils/hydrometer"


function HydrometerScreen({ navigation }) {
    const [calibrationTemp, setCalibrationTemp] = useState("20");
    const [temp, setTemp] = useState("20");
    const [densityReading, setDensityReading] = useState("1060");
    const [correctDensityReading, setCorrectDensityReading] = useState("");

    useEffect(() => {   
      var reading = correctReading(calibrationTemp, densityReading, temp);
      setCorrectDensityReading(reading);      
    }, [temp, densityReading]);

    onChangeTemp = (temperature) => {
      setTemp(temperature)
    }

    onChangeReading = (reading) => {
      setDensityReading(reading);
    }

    return (
      <View style={styles.container}>
        <Text>
        The density of water changes predictably with temperature and so it is possible (and important) to correct readings taken at temperatures the hydrometer is not calibrated for.  Most hydrometers are calibrated to 20°C, but some are calibrated to 15°C - any good hydrometer will have the calibration temperature marked.
        </Text>
        
        <Text style={styles.title}>Temperature</Text>
        <TextInput
                style={styles.input}
                onChangeText={onChangeTemp}
                value={ temp }
                placeholder="Reading Temperature °C"
                keyboardType="numeric" />

        <Text style={styles.title}>Actual reading</Text>
        <TextInput
                style={styles.input}
                onChangeText={onChangeReading}
                value={ densityReading }
                placeholder="Actual reading"
                keyboardType="numeric" />
        
        <Text style={styles.title}>Corrected reading</Text>
        <Text>{ correctDensityReading }</Text>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 12
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

export default HydrometerScreen;