import React from "react";
import { ImageSourcePropType, View, Text } from "react-native";
import { Image, Paper } from "atoms";
import styles from "./userCard.jss";

interface IUserCardProps {
  source: ImageSourcePropType;
  name?: string;
  species: string;
  origin: { name: string; url: string };
  [rest: string]: any;
}

const UserCard: React.FC<IUserCardProps> = ({
  source,
  name,
  species,
  origin,
  ...rest
}) => {
  return (
    <Paper {...rest}>
      <View style={styles.wrapper}>
        <Image source={source} style={styles.image} resizeMode={"stretch"} />
        <View style={styles.body}>
          <View style={styles.textContainer}>
            <Text style={styles.header}>{name}</Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.secondary}>Species:</Text>
            <Text style={styles.regular}>{species}</Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.secondary}>First seen in:</Text>
            <Text style={styles.regular}>{origin.name}</Text>
          </View>
        </View>
      </View>
    </Paper>
  );
};

export default UserCard;
