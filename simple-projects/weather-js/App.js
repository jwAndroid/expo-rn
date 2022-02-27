import { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View, Dimensions } from 'react-native';
import * as Location from 'expo-location';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'tomato',
  },
  city: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cityName: {
    fontSize: 68,
    fontWeight: '600',
  },
  weather: {},
  day: {
    width: SCREEN_WIDTH,
    alignItems: 'center',
  },
  temp: {
    fontWeight: '700',
    fontSize: 178,
    marginTop: 50,
  },
  description: {
    fontWeight: '500',
    fontSize: 60,
    marginTop: -30,
  },
});

export default function App() {
  const [city, setCity] = useState('Loading...');
  const [location, setLocation] = useState('');
  const [isGranted, setIsGranted] = useState('');

  useEffect(() => {
    (async () => {
      const { granted } = await Location.requestForegroundPermissionsAsync();
      if (!granted) {
        setIsGranted('Permission to access location was denied');
      } else {
        const {
          coords: { latitude, longitude },
        } = await Location.getCurrentPositionAsync({
          accuracy: 8,
        });

        const result = await Location.reverseGeocodeAsync(
          { latitude, longitude },
          { useGoogleMaps: false }
        );

        setCity(result[0].city);
      }
    })();
  }, []);

  return (
    <View style={style.container}>
      <View style={style.city}>
        <Text style={style.cityName}>{city}</Text>
      </View>

      <ScrollView
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        horizontal
        contentContainerStyle={style.weather}
      >
        <View style={style.weather}>
          <View style={style.day}>
            <Text style={style.temp}>27</Text>
            <Text style={style.description}>Sunny</Text>
          </View>
        </View>

        <View style={style.weather}>
          <View style={style.day}>
            <Text style={style.temp}>27</Text>
            <Text style={style.description}>Sunny</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
