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
    marginTop: 25,
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    alignItems: 'center'
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
  overlay: {
    position: 'absolute',
    height: 270,
    backgroundColor: 'white',
    width: '80%',
    alignSelf: 'center',
    marginTop: 168,
    borderRadius: 35,
    padding: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 9,
  },
  saldo: {
    color: '#000',
    fontSize: 20,
    marginLeft: 10
  },
  saldoValue: {
    fontSize: 30,
    color: '#4870FB',
    marginTop: 4
  }
})

export default styles;