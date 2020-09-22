import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { UserCard } from "molecules";
import { useUsers } from "particles/requests";

const styles = StyleSheet.create({
  grid: {
    alignItems: "stretch",
    justifyContent: "center",
    flexWrap: "wrap",
    flexDirection: "row",
  },
  item: {
    margin: 8,
  },
});

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

  console.log(data);

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
