import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    height: 56,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  menuIcon: {
    marginRight: 16,
    flex: 1
  },
  imageProfile: {
    width: 50,
    height: 50,
    borderRadius: 30
  },
})

export default styles;