import React from "react";
import { View } from "react-native";
import styles from "./sectionHeader.jss";
import { Text } from "atoms";

interface Props {
  name: string;
  title: string;
}

const SectionHeader: React.FC<Props> = ({ name, title }) => {
  return (
    <View style={styles.header}>
      <Text variant="sectionHeaderName" style={styles.name}>
        {name}
      </Text>
      <Text variant="sectionHeaderTitle" style={styles.title}>
        {title}
      </Text>
    </View>
  );
};

export default SectionHeader;
