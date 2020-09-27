import { position } from "@shopify/restyle";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingVertical: 60,
    paddingHorizontal: 80,
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
    marginTop: 0,
    left: -17
  },  
  containerTextCheckbox: {
    bottom: -11,
    left: -13,
  },
  textCheckbox: {
    alignItems: "center",
    position: "relative",
    left: -12
  },
  radioButtons: {
    flexDirection: "row",
    position: "relative",
    left: -18
  },
  sectionTitleSecondColumnCheckbox: {
    marginBottom: 14
  },
  sectionTitleSecondColumnRadioButton: {
    marginTop: 45,
    marginBottom: 25
  },
  radioButton: {
    
  }
});

export default styles;
