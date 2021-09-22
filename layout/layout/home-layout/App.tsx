import React, { memo } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Contents from './src/components/Contents';
import SubContents from './src/components/SubContents';
import ImageContent from './src/components/ImageContent';
import ChargeButton from './src/components/ChargeButton';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topLayout: {
    flex: 5,
    width: '100%',
    backgroundColor: '#8528e8',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  topLayoutItem: {
    backgroundColor: '#912afd',
    position: 'absolute',
    top: 40,
    left: 0,
    right: 0,
    bottom: 0,
    borderTopLeftRadius: 350,
  },
  contentsLayout: {
    backgroundColor: '#2c0e4e',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    position: 'absolute',
    top: '40%',
    left: 0,
    right: 0,
    bottom: 30,
  },
  contentsLayout1: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    backgroundColor: '#2c0e4e',
  },
  contentsLayout2: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  contentsLayout3: {
    width: '100%',
    flexDirection: 'row',
    backgroundColor: '#2c0e4e',
    justifyContent: 'space-between',
    marginTop: 15,
    marginBottom: 8,
  },
  bottomLayout: {
    flex: 0.5,
    width: '100%',
    flexDirection: 'row',
    backgroundColor: '#3d0e6b',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    padding: 10,
  },
  circle: {
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
    marginTop: '20%',
  },
  contentsCircle: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    marginLeft: 25,
  },
  bottomNavigation: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
  },
});

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.topLayout}>
        <View style={styles.topLayoutItem} />
        <Image style={styles.circle} source={require('./assets/logo.png')} />
      </View>

      <View style={styles.contentsLayout}>
        <View style={styles.contentsLayout1}>
          <Contents content="JW React-practice" />
          <Contents content="=" />
        </View>

        <View style={styles.contentsLayout2}>
          <SubContents content="react-native with expo" />
          <SubContents content="1 hour ago" />
        </View>

        <View style={styles.contentsLayout3}>
          <ImageContent />
        </View>
        <ChargeButton />
      </View>

      <View style={styles.bottomLayout}>
        <Image
          style={styles.bottomNavigation}
          source={require('./assets/logo.png')}
        />
        <Image
          style={styles.bottomNavigation}
          source={require('./assets/axios.png')}
        />
        <Image
          style={styles.bottomNavigation}
          source={require('./assets/hooks.png')}
        />
      </View>
    </View>
  );
};

export default memo(App);
