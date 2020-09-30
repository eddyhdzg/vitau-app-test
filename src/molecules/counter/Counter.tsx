import React from "react";
import { Text, View } from "react-native";
import { useStore } from "../../particles/clientStore";
import shallow from "zustand/shallow";
import { Button } from "../../atoms";
import styles from "./counter.jss";

const Counter: React.FC = () => {
  const { count, dispatch } = useStore(
    ({ count, dispatch }) => ({ count, dispatch }),
    shallow
  );
  return (
    <View style={styles.container}>
      <Button
        onPress={() => dispatch({ type: "DECREASE_COUNTER" })}
        title="-"
      />

      <Text style={styles.text}>Counter: {count}</Text>
      <Button
        onPress={() => dispatch({ type: "INCREASE_COUNTER" })}
        title="+"
      />
    </View>
  );
};

export default Counter;
