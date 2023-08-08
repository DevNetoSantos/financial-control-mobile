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
  catButton01: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  textButton01: {
    fontSize: 20,
  },
  catButton02: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginTop: 10,
  },
  textButton02: {
    fontSize: 20,
  },
  sairButton: {
    padding: 30,
    marginBottom: 20,
    borderRadius: 40,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 9,
  },
  textSair: {
    fontSize: 20
  }
});

export default styles;