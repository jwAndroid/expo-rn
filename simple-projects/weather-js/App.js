import { useEffect, useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  ActivityIndicator,
  Text,
  View,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import * as Location from 'expo-location';
import { StatusBar } from 'expo-status-bar';
import { Fontisto } from '@expo/vector-icons';

import { callApi } from './src/apiKey';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const icons = {
  Clouds: 'cloudy',
  Clear: 'day-sunny',
  Rain: 'rain',
  Atmosphere: 'cloudy-gusts',
  Snow: 'snow',
  Drizzle: 'day-rain',
  Thunderstorm: 'lightning',
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#43e8d8',
  },
  city: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cityName: {
    fontSize: 68,
    color: '#fff',
    fontWeight: '600',
  },
  day: {
    width: SCREEN_WIDTH,
    alignItems: 'flex-start',
    paddingHorizontal: 20,
  },
  tempContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  temp: {
    fontSize: 160,
    color: '#808080',
    includeFontPadding: false,
  },
  description: {
    fontSize: 60,
    color: '#ffd4e5',
    fontWeight: '500',
    marginTop: -15,
    paddingLeft: 10,
  },
  tinyStyle: {
    color: '#c0c0c0',
    fontSize: 20,
    marginTop: -10,
    paddingLeft: 15,
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
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="auto" />

      <View style={style.container}>
        <View style={style.city}>
          <Text style={style.cityName}>{city}</Text>
        </View>

        <ScrollView
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          horizontal
        >
          {days.length == 0 ? (
            <View style={{ ...style.day, alignItems: 'center' }}>
              <ActivityIndicator
                color="white"
                style={{ marginTop: 10 }}
                size="large"
              />
            </View>
          ) : (
            days.map((day, index) => (
              <View key={index} style={style.day}>
                <View style={style.tempContainer}>
                  <Text style={style.temp}>
                    {parseFloat(day.temp.day).toFixed(1)}
                  </Text>

                  <View style={{ paddingVertical: 30 }}>
                    <Fontisto
                      name={icons[day.weather[0].main]}
                      size={58}
                      color="white"
                    />
                  </View>
                </View>

                <Text style={style.description}>{day.weather[0].main}</Text>
                <Text style={style.tinyStyle}>
                  {day.weather[0].description}
                </Text>
              </View>
            ))
          )}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
