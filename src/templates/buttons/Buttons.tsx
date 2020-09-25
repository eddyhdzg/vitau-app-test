import React from "react";
import { View } from "react-native";
import styles from "./buttons.jss";
import { Text, Button } from "atoms";
import { SectionHeader } from "molecules";

const Buttons: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <SectionHeader name="Core Components" title="Buttons" />
      </View>
      <View style={styles.sectionRow}>
        <View style={styles.section}>
          <Text variant="sectionTitle" style={styles.sectionTitle}>
            Primary
          </Text>

          <View style={styles.columns}>
            <View style={styles.column}>
              <Text variant="sectionSubTitle" style={styles.sectionSubTitle}>
                Default
              </Text>
              <View style={styles.components}>
                <View style={styles.component}>
                  <Button text="Default" icon="plus-circle" />
                </View>
                <View style={styles.component}>
                  <Button text="Default" status="success" icon="plus-circle" />
                </View>
                <View style={styles.component}>
                  <Button
                    text="Default"
                    status="destructive"
                    icon="plus-circle"
                  />
                </View>
                <View style={styles.component}>
                  <Button text="Default" />
                </View>
                <View style={styles.component}>
                  <Button text="Default" status="success" />
                </View>
                <View style={styles.component}>
                  <Button text="Default" status="destructive" />
                </View>
              </View>
            </View>
            <View style={styles.column}>
              <Text variant="sectionSubTitle" style={styles.sectionSubTitle}>
                Small
              </Text>
              <View style={styles.components}>
                <View style={styles.component}>
                  <Button text="Default" icon="plus-circle" size="small" />
                </View>
                <View style={styles.component}>
                  <Button
                    text="Default"
                    status="success"
                    icon="plus-circle"
                    size="small"
                  />
                </View>
                <View style={styles.component}>
                  <Button
                    text="Default"
                    status="destructive"
                    icon="plus-circle"
                    size="small"
                  />
                </View>
              </View>
            </View>
            <View>
              <Text variant="sectionSubTitle" style={styles.sectionSubTitle}>
                No icon small
              </Text>
              <View style={styles.components}>
                <View style={styles.component}>
                  <Button text="Default" size="small" />
                </View>
                <View style={styles.component}>
                  <Button text="Default" status="success" size="small" />
                </View>
                <View style={styles.component}>
                  <Button text="Default" status="destructive" size="small" />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.columns}>
            <View style={styles.column}>
              <Text variant="sectionSubTitle" style={styles.sectionSubTitle}>
                With Price
              </Text>
              <View style={styles.components}>
                <View style={styles.component}>
                  <Button
                    text="Continuar"
                    icon="arrow-right"
                    iconSide="right"
                    price="$7,290.00"
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.section}>
          <Text variant="sectionTitle" style={styles.sectionTitle}>
            Secondary
          </Text>

          <View style={styles.columns}>
            <View style={styles.column}>
              <Text variant="sectionSubTitle" style={styles.sectionSubTitle}>
                Default
              </Text>
              <View style={styles.components}>
                <View style={styles.component}>
                  <Button text="Default" type="secondary" />
                </View>
                <View style={styles.component}>
                  <Button
                    text="Default"
                    type="secondary"
                    status="destructive"
                  />
                </View>
              </View>
            </View>
            <View style={styles.column}>
              <Text variant="sectionSubTitle" style={styles.sectionSubTitle}>
                Small
              </Text>
              <View style={styles.components}>
                <View style={styles.component}>
                  <Button
                    text="Small"
                    type="secondary"
                    size="small"
                    icon="plus-circle"
                  />
                </View>
                <View style={styles.component}>
                  <Button
                    text="Small"
                    type="secondary"
                    status="destructive"
                    size="small"
                    icon="plus-circle"
                  />
                </View>
              </View>
            </View>

            <View style={styles.column}>
              <Text variant="sectionSubTitle" style={styles.sectionSubTitle}>
                No icon small
              </Text>
              <View style={styles.components}>
                <View style={styles.component}>
                  <Button text="Small" type="secondary" size="small" />
                </View>
                <View style={styles.component}>
                  <Button
                    text="Small"
                    type="secondary"
                    status="destructive"
                    size="small"
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Buttons;
