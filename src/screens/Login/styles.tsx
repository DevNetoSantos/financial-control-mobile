import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F5F5',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  imageLogo: {
    width: 260,
    height: 145,
  },
  textLogin: {
    fontSize: 20,
  },
  textInput: {
    padding: 10,
    borderRadius: 40,
    backgroundColor: 'white',
    marginTop: 10,
    fontSize: 18
  },
  areInput: {
    width: '80%'
  },
  buttonLogin: {
    marginTop: 10,
    backgroundColor: '#4870FB',
    padding: 14,
    borderRadius: 30,
    width: '80%',
    alignItems: 'center',
  },
  titlelogin: {
    fontSize: 18,
    color: 'white'
  }
});

export default styles;