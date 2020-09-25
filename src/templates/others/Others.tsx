import React from "react";
import { View } from "react-native";
import styles from "./others.jss";
import { Text, Button } from "atoms";
import { SectionHeader } from "molecules";

const Others: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <SectionHeader name="Core Components" title="Others" />
      </View>
      <Text variant="sectionTitle" style={{ marginBottom: 30 }}>
        Status
      </Text>

 {/*      <Text variant="sectionSubTitle" style={{ marginBottom: 30 }}>
        Default
      </Text> */}
      <View style={styles.component}>
        <Button onPress={() => console.log("press")} />
      </View>
    </View>
  );
};

export default Others;