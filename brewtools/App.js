import { Text, View, FlatList, StyleSheet, StatusBar, TouchableHighlight } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ABVScreen from "./screens/ABV"
import SettingsScreen from './screens/Settings'
import RecipesScreen from './screens/Recipes'
import BottlesScreen from './screens/Bottles'
import HydrometerScreen from './screens/Hydrometer'
import UnitConvertScreen from './screens/UnitConvert'

const DATA = [
    {
        id: 'item-abv',
        title: 'ABV calculator',
        description: 'Alcohol by volume',
    },
    {
        id: 'item-bottles',
        title: 'Bottles',
        description: 'Calcute how many bottles do you need'
    },
    {
        id: 'item-hydro',
        title: 'Hydrometer',
        description: 'Hydrometer temperature correction'
    },
    {
        id: 'item-unit',
        title: 'Unit converter',
        description: 'Unit conversion calculators'
    },
];


function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1 }}>
            <FlatList
                ItemSeparatorComponent={
                    Platform.OS !== 'android' &&
                    (({ highlighted }) => (
                        <View
                            style={[styles.separator, highlighted && { marginLeft: 0 }]}
                        />
                    ))
                }
                data={DATA}
                renderItem={({ item, index, separators }) => (
                    <TouchableHighlight
                        key={item.key}
                        underlayColor="#c0c0c0"
                        onPress={() => this._onPress(item, navigation)}
                        onShowUnderlay={separators.highlight}
                        onHideUnderlay={separators.unhighlight}>
                        <Item title={item.title} description={item.description} />
                    </TouchableHighlight>
                )}
                keyExtractor={item => item.id}
            />
        </View>
    );
}

_onPress = (item, navigation) => {
    switch (item.id) {
        case "item-abv":
            navigation.navigate('ABV');
            break;
        case "item-bottles":
            navigation.navigate('Bottles');
            break;
        case "item-hydro":
            navigation.navigate('Hydrometer');
            break;            
        case "item-unit":
            navigation.navigate('Unit Converter');
            break;            
    }
    
}

type ItemProps = { title: string, description: string };

const Item = ({ title, description }: ItemProps) => (
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
        <Text>{description}</Text>
    </View>
);

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Home() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Tools" component={HomeScreen} />
            <Tab.Screen name="Recipes" component={RecipesScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
    );
}

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
                <Stack.Screen name="ABV" component={ABVScreen} />
                <Stack.Screen name="Bottles" component={BottlesScreen} />
                <Stack.Screen name="Unit Converter" component={UnitConvertScreen} />
                <Stack.Screen name="Hydrometer" component={HydrometerScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 2,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        backgroundColor: '',
        padding: 5,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
    separator: {
        backgroundColor: 'grey',
        height: 0.3,
    }
});

export default App;