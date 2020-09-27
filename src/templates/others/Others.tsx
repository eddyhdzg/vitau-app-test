import React from "react";
import { View } from "react-native";
// import Checkbox from "@react-native-community/checkbox"
import styles from "./others.jss";
import { Text, Button, Tag } from "atoms";
import { SectionHeader } from "molecules";
import { Switch } from 'react-native-switch';
import { CheckBox } from "react-native-elements";

const Others: React.FC = () => {
  const [isEnabled, setIsEnabled] = React.useState({active: true, inactive: false});
  const toggleSwitch = (toggle: number) => {
    if (toggle === 1) setIsEnabled({...isEnabled, active: !isEnabled.active})
    if (toggle === 2) setIsEnabled({...isEnabled, inactive: !isEnabled.inactive})
  }
  return (
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
          <Text style={styles.sectionTitleSecondColumnCheckbox} variant="sectionTitle">Checkbox</Text>
          <View style={styles.checkboxComponent}>
            <CheckBox 
              checked={true} 
              checkedIcon="check-square"     
              size={16} 
              checkedColor="#33BBFF"
            />   
            <View style={styles.containerTextCheckbox}>
              <Text>Some text here</Text> 
            </View>
          </View>
          <View style={styles.checkboxComponent}>
            <CheckBox 
              checked={false}
              checkedIcon="check-square"
              size={16} 
              checkedColor="#33BBFF"
            />   
            <View style={styles.containerTextCheckbox}>
              <Text>Some text here</Text> 
            </View>     
          </View>
          <View style={styles.sectionTitleSecondColumnRadioButton}>
            <Text variant="sectionTitle">Radio buttons</Text>
          </View>
          
          <View style={styles.radioButtons}>
            <CheckBox 
              checked={true}  
              size={16}
              iconType='material'
              checkedIcon="check-circle"                    
              checkedColor="#33BBFF"
            />
            <Text style={styles.textCheckbox}>Some text here</Text>
          </View>
          <View style={styles.radioButtons}>
            <CheckBox 
              checked={false}  
              size={16}   
              iconType='material'              
              uncheckedIcon="panorama-fish-eye"
              uncheckedColor="#B3BFC4"
            />
            <Text style={styles.textCheckbox}>Some text here</Text>
          </View>
        </View>
        
      </View>
    </View>
  );
};

export default Others;
