import React from "react";
import { Buttons } from "templates";

interface IProps {
  navigation:any;
}

const ButtonsPage: React.FC<IProps> = ({navigation}) => {
  return <Buttons navigation={navigation} />;
};

export default ButtonsPage;
