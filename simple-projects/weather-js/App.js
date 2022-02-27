import { useEffect, useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  ActivityIndicator,
  Text,
  View,
  Dimensions,
} from 'react-native';
import * as Location from 'expo-location';

import { callApi } from './src/apiKey';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#606060',
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
  day: {
    width: SCREEN_WIDTH,
    alignItems: 'center',
  },
  temp: {
    fontWeight: '700',
    fontSize: 160,
    marginTop: 20,
  },
  description: {
    fontWeight: '500',
    fontSize: 60,
    marginTop: -20,
  },
  tinyStyle: {
    fontSize: 20,
  },
});

export default function App() {
  const [city, setCity] = useState('Loading...');
  const [days, setDay] = useState([]);

  useEffect(() => {
    (async () => {
      const { granted } = await Location.requestForegroundPermissionsAsync();
      if (granted) {
        const {
          coords: { latitude, longitude },
        } = await Location.getCurrentPositionAsync({
          accuracy: 8,
        });

        const location = await Location.reverseGeocodeAsync(
          { latitude, longitude },
          { useGoogleMaps: false }
        );

        setCity(location[0].city);

        const reponse = await fetch(callApi(latitude, longitude));

        const json = await reponse.json();

        setDay(json.daily);
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
      >
        {days.length === 0 ? (
          <View style={style.day}>
            <ActivityIndicator
              color="white"
              style={{ marginTop: 10 }}
              size="large"
            />
          </View>
        ) : (
          days.map((day, index) => (
            <View key={index} style={style.day}>
              <Text style={style.temp}>{day.temp.day}</Text>
              <Text style={style.description}>{day.weather[0].main}</Text>
              <Text style={style.tinyStyle}>{day.weather[0].description}</Text>
            </View>
          ))
        )}
      </ScrollView>
    </View>
  );
}
