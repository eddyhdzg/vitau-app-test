import React from "react";
import { View, CheckBox, TouchableOpacity } from "react-native";
// import Checkbox from "@react-native-community/checkbox"
import styles from "./others.jss";
import { Text, Tag, Icon } from "atoms";
import { SectionHeader } from "molecules";
import { Switch } from 'react-native-switch';

interface IProps {
  navigation:any;
}

const Others: React.FC<IProps> = ({navigation}) => {
  const [isEnabled, setIsEnabled] = React.useState({active: true, inactive: false});
  const toggleSwitch = (toggle: number) => {
    if (toggle === 1) setIsEnabled({...isEnabled, active: !isEnabled.active})
    if (toggle === 2) setIsEnabled({...isEnabled, inactive: !isEnabled.inactive})
  }
  return (
    <>
      <View style={styles.navigation}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Icon name="arrow-left" color="black" style={{marginRight:8}} size={20} ></Icon>
        </TouchableOpacity>
        <Text variant="sectionNavigationName">Others</Text>
        <TouchableOpacity onPress={() => navigation.navigate('')}>
          <Icon name="arrow-right" color="black" style={{marginLeft:8}} size={20} ></Icon>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <View style={styles.header}>
          <SectionHeader name="Core Components" title="Others" />
        </View>
        <View style={styles.sectionRow}>
          <View style={styles.section}>
            <Text variant="sectionTitle" style={styles.sectionTitle}>
              Status
            </Text>

            <View style={styles.columns}>
              <View style={styles.column}>
                <View style={styles.components}>
                  <View style={styles.component}>
                    <Tag text="Activa" color="purple" status="status" />
                  </View>
                  <View style={styles.component}>
                    <Tag text="Activa" color="orange" status="status" />
                  </View>
                </View>
              </View>
              <View style={styles.column}>
                <View style={styles.components}>
                  <View style={styles.component}>
                    <Tag text="Activa" color="blue" status="status" />
                  </View>
                  <View style={styles.component}>
                    <Tag text="Activa" color="red" status="status" />
                  </View>
                </View>
              </View>
              <View style={styles.column}>
                <View style={styles.components}>
                  <View style={styles.component}>
                    <Tag text="Activa" color="gray" status="status" />
                  </View>
                  <View style={styles.component}>
                    <Tag text="Activa" color="yellow" status="status" />
                  </View>
                </View>
              </View>
              <View style={styles.column}>
                <View style={styles.components}>
                  <View style={styles.component}>
                    <Tag text="Activa" color="green" status="status" />
                  </View>             
                </View>
              </View>
            </View>
          </View>
          <View style={styles.section}>
            <Text variant="sectionTitle" style={styles.sectionTitle}>
              Tags
            </Text>
            <View style={styles.columns}>
              <View style={styles.column}>
                <View style={styles.components}>
                  <View style={styles.component}>
                    <Tag text="Blue" color="purple" status="tag" icon="times"/>
                  </View>
                  <View style={styles.component}>
                    <Tag text="Blue" color="purple" status="tag" />
                  </View>
                </View>
              </View>
              <View style={styles.column}>
                <View style={styles.components}>
                  <View style={styles.component}>
                    <Tag text="Green" color="green" status="tag" icon="times" />
                  </View>
                  <View style={styles.component}>
                    <Tag text="Green" color="green" status="tag" />
                  </View>
                </View>
              </View>
              <View style={styles.column}>
                <View style={styles.components}>
                  <View style={styles.component}>
                    <Tag text="Gray" color="gray" status="tag" icon="times" />
                  </View>
                  <View style={styles.component}>
                    <Tag text="Gray" color="gray" status="tag" />
                  </View>
                </View>
              </View>
              <View style={styles.column}>
                <View style={styles.components}>
                  <View style={styles.component}>
                    <Tag text="Orange" color="orange" status="tag" icon="times" />
                  </View>   
                  <View style={styles.component}>
                    <Tag text="Orange" color="orange" status="tag" />
                  </View>            
                </View>
              </View>
            </View>
          </View>        
        </View>
        <View style={styles.sectionRowSecond}>
          <View style={styles.section}>
            <Text style={styles.sectionTitle} variant="sectionTitle">
              Toggle
            </Text>
            <View>
              <Text variant="textActive" color="textSecondary">
                ACTIVE
              </Text>
            </View>
            <View style={styles.toggles}>
              <Switch
                value={isEnabled.active}
                onValueChange={() => toggleSwitch(1)}
                activeText={''}
                inActiveText={''}
                circleSize={16.4}
                barHeight={22}                           
                backgroundActive={'#00AAFF'}
                backgroundInactive={'#B3BFC4'}
                circleActiveColor={'white'}
                circleBorderWidth={0}
                switchLeftPx={2}
                switchRightPx={2} 
                switchWidthMultiplier={2.683}
                switchBorderRadius={22} 
              />
            </View>
            <View>
              <Text variant="textActive" color="textSecondary">
                INACTIVE
              </Text>
            </View>
            <View style={styles.toggles}>
              <Switch
                value={isEnabled.inactive}
                onValueChange={() => toggleSwitch(2)}
                activeText={''}
                inActiveText={''}
                circleSize={16.4}
                barHeight={22}                           
                backgroundActive={'#00AAFF'}
                backgroundInactive={'#B3BFC4'}
                circleActiveColor={'white'}
                circleBorderWidth={0}
                switchLeftPx={2}
                switchRightPx={2} 
                switchWidthMultiplier={2.683}
                switchBorderRadius={22} 
              />
            </View>
            <View>
              <Text variant="textActive" color="textSecondary">
                DISABLED
              </Text>
            </View>
            <View style={styles.toggles}>
              <Switch
                value={false}              
                activeText={''}
                inActiveText={''}
                circleSize={16.4}
                barHeight={22}                           
                backgroundActive={'#00AAFF'}
                backgroundInactive={'#677F89'}
                circleActiveColor={'white'}
                circleBorderWidth={0}
                switchLeftPx={2}
                switchRightPx={2} 
                switchWidthMultiplier={2.683}
                switchBorderRadius={22} 
              />
            </View>
          </View>
          <View style={styles.checkbox}>
            <Text style={styles.sectionTitle} variant="sectionTitle">Checkbox</Text>
            <View style={styles.checkboxComponent}>
              <CheckBox 
                value={true}              
              />   
              <View style={styles.containerTextCheckbox}>
                <Text style={styles.textCheckbox}>Some text here</Text> 
              </View>
            </View>
            <View style={styles.checkboxComponent}>
              <CheckBox 
                value={false}
              />   
              <View style={styles.containerTextCheckbox}>
                <Text style={styles.textCheckbox}>Some text here</Text> 
              </View>     
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

export default Others;
