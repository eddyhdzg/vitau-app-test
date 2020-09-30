import React from "react";
import { Others } from "templates";
import { NavParams } from "navigation/AuthParamList";


const OthersPage: React.FC<NavParams> = ({navigation, route}) => {
  return <Others navigation={navigation} route={route} />;
};

export default OthersPage;
