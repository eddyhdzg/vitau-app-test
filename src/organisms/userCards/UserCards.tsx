import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { UserCard } from "../../molecules";
import { useUsers } from "../../particles/requests";
import styles from "./userCards.jss";

const UserCards: React.FC = () => {
  const { status, data } = useUsers();

  if (status === "loading")
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );

  if (status === "error")
    return (
      <View>
        <Text>Error...</Text>
      </View>
    );

  return (
    <View style={styles.grid}>
      {data?.results.map((user) => (
        <View key={user.id} style={styles.item}>
          <UserCard source={user.image} {...user} />
        </View>
      ))}
    </View>
  );
};

export default UserCards;
