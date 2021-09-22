import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container1: {
    flex: 1,
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: '#153255',
  },
  container1Item1: {
    justifyContent: 'center',
    marginLeft: 20,
    backgroundColor: '#153255',
  },
  container1Item2: {
    justifyContent: 'center',
    marginRight: 20,
    backgroundColor: '#153255',
  },
  container2: {
    flex: 5,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#303030',
  },
  container3: {
    flex: 3,
    width: '100%',
    backgroundColor: '#156354',
    flexDirection: 'row',
  },
  container3Item1: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#675412',
  },
  container3Item2: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#985612',
  },
  container4: {
    flex: 1,
    width: '100%',
    backgroundColor: '#789456',
    flexDirection: 'row',
  },
  container4Item1: {
    flex: 1,
    backgroundColor: '#341243',
  },
  container4Item2: {
    flex: 1,
    backgroundColor: '#343243',
    alignItems: 'flex-end',
  },
  container4Item3: {
    flex: 1,
    backgroundColor: '#341213',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  container4Item4: {
    flex: 1,
    backgroundColor: '#123124',
    justifyContent: 'flex-end',
  },
  container4Item5: {
    flex: 1,
    backgroundColor: '#112344',
  },
  text: {
    fontSize: 24,
    color: '#fff',
    justifyContent: 'center',
  },
});

export default styles;
