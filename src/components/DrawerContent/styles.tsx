import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    alignSelf: 'center',
    width: '90%',
    flex: 1
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
  },
  containerButton: {
    flex: 1
  },
  categoryButtons: {
    flex: 1,
    padding: 10
  },
  sairButton: {
    padding: 10
  }
});

export default styles;