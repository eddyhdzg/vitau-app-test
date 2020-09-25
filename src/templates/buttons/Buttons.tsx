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
<<<<<<< HEAD
      <View style={styles.component}>
        <Button onPress={() => console.log("press")} />
=======
      <View style={styles.components}>
        <View style={styles.component}>
          <Button text="Default" icon="plus-circle" />
        </View>
        <View style={styles.component}>
          <Button text="Default" status="success" icon="plus-circle" />
        </View>
        <View style={styles.component}>
          <Button text="Default" status="destructive" icon="plus-circle" />
        </View>
        <View style={styles.component}>
          <Button text="Default" />
        </View>
        <View style={styles.component}>
          <Button text="Default" status="success" />
        </View>
        <View style={styles.component}>
          <Button text="Default" status="destructive" />
        </View>
>>>>>>> Eddy/APP/restyle
      </View>
    </View>
  );
};

export default Buttons;
