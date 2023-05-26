import { StyleSheet } from 'react-native'


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 140,
  },
  iconsHome: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10
  },
  areaAccount: {
    flex: 1,
    padding: 40
  },
  titleHome: {
    backgroundColor: '#4870FB',
    padding: 40,
    borderRadius: 35,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  textTitle: {
    fontSize: 20
  }
});

export default styles;