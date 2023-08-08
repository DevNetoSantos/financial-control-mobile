import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    alignSelf: 'center',
    width: '90%',
  },
  subContainer: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  imageProfile: {
    width: 50,
    height: 50,
    borderRadius: 15,
  },
  areaText: {
    marginLeft: 10,
  },
  textName: {
    fontWeight: 'bold'
  }
});

export default styles;