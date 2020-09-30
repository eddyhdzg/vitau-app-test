import React from "react";
import { Buttons } from "templates";
import { NavParams } from "navigation/AuthParamList";

const ButtonsPage: React.FC<NavParams> = ({route, navigation}) => {
  return <Buttons navigation={navigation} route={route} />;
};

export default ButtonsPage;
