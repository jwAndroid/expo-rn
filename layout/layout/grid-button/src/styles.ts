import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleLayout: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: getStatusBarHeight(),
  },
  mainLayout: {
    flex: 6,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: getStatusBarHeight(),
  },
  mainLayout1: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
  },
  mainLayout2: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
  },
  mainLayout3: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
  },
  textTitle: {
    fontSize: 36,
    color: '#000000',
  },
});

export default styles;
