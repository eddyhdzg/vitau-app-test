import React from "react";
import { Counter } from "molecules";
import { UserCards } from "organisms";
import { View } from "react-native";
import styles from "./home.jss";

const Home: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.counter}>
        <Counter />
      </View>
      <UserCards />
    </View>
  );
};

export default Home;
