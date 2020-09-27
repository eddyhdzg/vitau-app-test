import { position } from "@shopify/restyle";
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
  sectionRowSecond: {
    flexDirection: "row",
    paddingTop: 35,
    // justifyContent: "space-between"
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
    //backgroundColor:'red'
  },
  column: {
    marginRight: 40,
    //backgroundColor:'green'
  },
  components: {
    alignItems: "flex-start",
  },
  component: {
    marginBottom: 40,
  },
  toggles: {
    marginVertical: 30
  },
  checkbox: {
    marginLeft: "31.5%",
    position: "relative"
  },
  checkboxComponent: {
    flexDirection: "row",
    marginTop: 20
  },
  textCheckbox: {
  },
  containerTextCheckbox: {
    bottom: 4,
    left: 9,
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
