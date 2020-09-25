import React from "react";
import { View } from "react-native";
import styles from "./buttons.jss";
import { Text, Button } from "atoms";
import { SectionHeader } from "molecules";

const Buttons: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <SectionHeader name="Core Components" title="Buttons" />
      </View>
      <Text variant="sectionTitle" style={{ marginBottom: 30 }}>
        Primary
      </Text>

      <Text variant="sectionSubTitle" style={{ marginBottom: 30 }}>
        Default
      </Text>
      <View style={styles.component}>
        <Button onPress={() => console.log("press")} />
      </View>
    </View>
  );
};

export default Buttons;
