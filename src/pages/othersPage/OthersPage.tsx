import React from "react";
import { Others } from "templates";

interface IProps {
  navigation:any;
}

const OthersPage: React.FC<IProps> = ({navigation}) => {
  return <Others navigation={navigation} />;
};

export default OthersPage;
