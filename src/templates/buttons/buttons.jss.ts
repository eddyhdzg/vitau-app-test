import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingVertical: 60,
    paddingHorizontal: 80,
    backgroundColor:'white'
  },
  header: {
    marginBottom: 60,
  },
  sectionRow: {
    flexDirection: "row",
  },
  section: {
    marginRight: 200,
  },
  sectionTitle: {
    marginBottom: 30,
  },
  sectionSubTitle: {
    marginBottom: 30,
  },
  columns: {
    flexDirection: "row",
  },
  column: {
    marginRight: 120,
  },
  components: {
    alignItems: "flex-start",
  },
  component: {
    marginBottom: 40,
  },
  navigation: {
    height:60,
    backgroundColor:'white',
    borderBottomColor:'#D8D8D8',
    borderBottomWidth:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  },
});

export default styles;
