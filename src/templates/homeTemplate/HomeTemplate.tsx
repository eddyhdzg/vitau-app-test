import React from "react";
import { Counter } from "../../molecules";
import { UserCards } from "../../organisms";
import { View, Text } from "react-native";
import styles from "./homeTemplate.jss";

const HomeTemplate: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.counter}>
        <Counter />
      </View>
      <UserCards />
    </View>
  );
};

export default HomeTemplate;
