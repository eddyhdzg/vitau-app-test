import React from "react";
import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import { useStore } from "particles/clientStore";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
});

const Home: React.FC = () => {
  const { count, dispatch } = useStore();
  return (
    <View style={styles.container}>
      <Text>Counter: {count}</Text>
      <StatusBar style="auto" />
      <Button
        onPress={() => dispatch({ type: "INCREASE_COUNTER" })}
        title="+"
      />
      <Button
        onPress={() => dispatch({ type: "DECREASE_COUNTER" })}
        title="-"
      />
    </View>
  );
};

export default Home;
