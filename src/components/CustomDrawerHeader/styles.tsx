import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    height: 300,
    borderBottomWidth: 1,
    borderBottomLeftRadius: 80,
    borderBottomRightRadius: 80,
    backgroundColor: '#4870FB'
  },
  subContainer: {
    marginTop: 50,
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center'
  },
  titleHeader: {
    width: '90%',
    alignSelf: 'center',
  },
  textHeader: {
    fontSize: 30,
    color: 'white'
  },
  menuIcon: {
    marginRight: 16,
    flex: 1,
  },
  imageProfile: {
    width: 50,
    height: 50,
    borderRadius: 15
  },
})

export default styles;