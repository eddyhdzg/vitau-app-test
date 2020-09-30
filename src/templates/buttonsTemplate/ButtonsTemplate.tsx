import React from "react";
import { View } from "react-native";
import styles from "./buttonsTemplate.jss";
import { Text, Button } from "../../atoms";
import { SectionHeader } from "../../molecules";
import ButtonPriceTag from "../../atoms/buttonPriceTag/ButtonPriceTag";

const ButtonsTemplate: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <SectionHeader name="Core Components" title="Buttons" />
      </View>
      <View style={styles.sectionRow}>
        <View style={styles.section}>
          <Text variant="sectionTitle" style={styles.sectionTitle}>
            Icons
          </Text>

          <View style={styles.columns}>
            <View style={styles.column}>
              <Text variant="sectionSubTitle" style={styles.sectionSubTitle}>
                Primary
              </Text>
              <View style={styles.components}>
                <View style={styles.component}>
                  <Button text="Primary" icon="plus-circle" />
                </View>
                <View style={styles.component}>
                  <Button text="Primary" status="success" icon="plus-circle" />
                </View>
                <View style={styles.component}>
                  <Button
                    text="Primary"
                    status="destructive"
                    icon="plus-circle"
                  />
                </View>
                <View style={styles.component}>
                  <Button text="Primary" status="plain" icon="plus-circle" />
                </View>
                <View style={styles.component}>
                  <Button text="Primary" icon="plus-circle" iconSide="right" />
                </View>
                <View style={styles.component}>
                  <Button
                    text="Primary"
                    status="success"
                    icon="plus-circle"
                    iconSide="right"
                  />
                </View>
                <View style={styles.component}>
                  <Button
                    text="Primary"
                    status="destructive"
                    icon="plus-circle"
                    iconSide="right"
                  />
                </View>
                <View style={styles.component}>
                  <Button
                    text="Primary"
                    status="plain"
                    icon="plus-circle"
                    iconSide="right"
                  />
                </View>
              </View>
            </View>
            <View style={styles.column}>
              <Text variant="sectionSubTitle" style={styles.sectionSubTitle}>
                Primary Small
              </Text>
              <View style={styles.components}>
                <View style={styles.component}>
                  <Button text="Primary" icon="plus-circle" size="small" />
                </View>
                <View style={styles.component}>
                  <Button
                    text="Primary"
                    status="success"
                    icon="plus-circle"
                    size="small"
                  />
                </View>
                <View style={styles.component}>
                  <Button
                    text="Primary"
                    status="destructive"
                    icon="plus-circle"
                    size="small"
                  />
                </View>
                <View style={styles.component}>
                  <Button
                    text="Primary"
                    status="plain"
                    icon="plus-circle"
                    size="small"
                  />
                </View>
                <View style={styles.component}>
                  <Button
                    text="Primary"
                    icon="plus-circle"
                    iconSide="right"
                    size="small"
                  />
                </View>
                <View style={styles.component}>
                  <Button
                    text="Primary"
                    status="success"
                    icon="plus-circle"
                    iconSide="right"
                    size="small"
                  />
                </View>
                <View style={styles.component}>
                  <Button
                    text="Primary"
                    status="destructive"
                    icon="plus-circle"
                    iconSide="right"
                    size="small"
                  />
                </View>
                <View style={styles.component}>
                  <Button
                    text="Primary"
                    status="plain"
                    icon="plus-circle"
                    iconSide="right"
                    size="small"
                  />
                </View>
              </View>
            </View>
            <View style={styles.column}>
              <Text variant="sectionSubTitle" style={styles.sectionSubTitle}>
                Secondary
              </Text>
              <View style={styles.components}>
                <View style={styles.component}>
                  <Button type="secondary" text="Default" icon="plus-circle" />
                </View>
                <View style={styles.component}>
                  <Button
                    type="secondary"
                    text="Default"
                    status="success"
                    icon="plus-circle"
                  />
                </View>
                <View style={styles.component}>
                  <Button
                    type="secondary"
                    text="Default"
                    status="destructive"
                    icon="plus-circle"
                  />
                </View>
                <View style={styles.component}>
                  <Button
                    type="secondary"
                    text="Default"
                    status="plain"
                    icon="plus-circle"
                  />
                </View>
                <View style={styles.component}>
                  <Button
                    type="secondary"
                    text="Default"
                    icon="plus-circle"
                    iconSide="right"
                  />
                </View>
                <View style={styles.component}>
                  <Button
                    type="secondary"
                    text="Default"
                    status="success"
                    icon="plus-circle"
                    iconSide="right"
                  />
                </View>
                <View style={styles.component}>
                  <Button
                    type="secondary"
                    text="Default"
                    status="destructive"
                    icon="plus-circle"
                    iconSide="right"
                  />
                </View>
                <View style={styles.component}>
                  <Button
                    type="secondary"
                    text="Default"
                    status="plain"
                    icon="plus-circle"
                    iconSide="right"
                  />
                </View>
              </View>
            </View>
            <View style={styles.column}>
              <Text variant="sectionSubTitle" style={styles.sectionSubTitle}>
                Secondary Small
              </Text>
              <View style={styles.components}>
                <View style={styles.component}>
                  <Button
                    type="secondary"
                    text="Default"
                    icon="plus-circle"
                    size="small"
                  />
                </View>
                <View style={styles.component}>
                  <Button
                    type="secondary"
                    text="Default"
                    status="success"
                    icon="plus-circle"
                    size="small"
                  />
                </View>
                <View style={styles.component}>
                  <Button
                    type="secondary"
                    text="Default"
                    status="destructive"
                    icon="plus-circle"
                    size="small"
                  />
                </View>
                <View style={styles.component}>
                  <Button
                    type="secondary"
                    text="Default"
                    status="plain"
                    icon="plus-circle"
                    size="small"
                  />
                </View>
                <View style={styles.component}>
                  <Button
                    type="secondary"
                    text="Default"
                    icon="plus-circle"
                    size="small"
                    iconSide="right"
                  />
                </View>
                <View style={styles.component}>
                  <Button
                    type="secondary"
                    text="Default"
                    status="success"
                    icon="plus-circle"
                    size="small"
                    iconSide="right"
                  />
                </View>
                <View style={styles.component}>
                  <Button
                    type="secondary"
                    text="Default"
                    status="destructive"
                    icon="plus-circle"
                    size="small"
                    iconSide="right"
                  />
                </View>
                <View style={styles.component}>
                  <Button
                    type="secondary"
                    text="Default"
                    status="plain"
                    icon="plus-circle"
                    size="small"
                    iconSide="right"
                  />
                </View>
              </View>
            </View>
            <View style={styles.column}>
              <Text variant="sectionSubTitle" style={styles.sectionSubTitle}>
                Tertiary
              </Text>
              <View style={styles.components}>
                <View style={styles.component}>
                  <Button type="tertiary" text="Default" icon="plus-circle" />
                </View>
                <View style={styles.component}>
                  <Button
                    type="tertiary"
                    text="Default"
                    icon="plus-circle"
                    status="success"
                  />
                </View>
                <View style={styles.component}>
                  <Button
                    type="tertiary"
                    text="Default"
                    icon="plus-circle"
                    status="destructive"
                  />
                </View>
                <View style={styles.component}>
                  <Button
                    type="tertiary"
                    text="Default"
                    icon="plus-circle"
                    status="plain"
                  />
                </View>
                <View style={styles.component}>
                  <Button
                    type="tertiary"
                    text="Default"
                    icon="plus-circle"
                    iconSide="right"
                  />
                </View>
                <View style={styles.component}>
                  <Button
                    type="tertiary"
                    text="Default"
                    icon="plus-circle"
                    status="success"
                    iconSide="right"
                  />
                </View>
                <View style={styles.component}>
                  <Button
                    type="tertiary"
                    text="Default"
                    icon="plus-circle"
                    status="destructive"
                    iconSide="right"
                  />
                </View>
                <View style={styles.component}>
                  <Button
                    type="tertiary"
                    text="Default"
                    icon="plus-circle"
                    status="plain"
                    iconSide="right"
                  />
                </View>
              </View>
            </View>
            <View>
              <Text variant="sectionSubTitle" style={styles.sectionSubTitle}>
                Tertiary
              </Text>
              <View style={styles.components}>
                <View style={styles.component}>
                  <Button type="tertiary" text="Default" icon="plus-circle" />
                </View>
                <View style={styles.component}>
                  <Button
                    type="tertiary"
                    text="Default"
                    icon="plus-circle"
                    status="success"
                    size="small"
                  />
                </View>
                <View style={styles.component}>
                  <Button
                    type="tertiary"
                    text="Default"
                    icon="plus-circle"
                    status="destructive"
                    size="small"
                  />
                </View>
                <View style={styles.component}>
                  <Button
                    type="tertiary"
                    text="Default"
                    icon="plus-circle"
                    status="plain"
                    size="small"
                  />
                </View>
                <View style={styles.component}>
                  <Button
                    type="tertiary"
                    text="Default"
                    icon="plus-circle"
                    iconSide="right"
                    size="small"
                  />
                </View>
                <View style={styles.component}>
                  <Button
                    type="tertiary"
                    text="Default"
                    icon="plus-circle"
                    status="success"
                    iconSide="right"
                    size="small"
                  />
                </View>
                <View style={styles.component}>
                  <Button
                    type="tertiary"
                    text="Default"
                    icon="plus-circle"
                    status="destructive"
                    iconSide="right"
                    size="small"
                  />
                </View>
                <View style={styles.component}>
                  <Button
                    type="tertiary"
                    text="Default"
                    icon="plus-circle"
                    status="plain"
                    iconSide="right"
                    size="small"
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
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

          <Text variant="sectionSubTitle" style={styles.sectionSubTitle}>
            With Price
          </Text>
          <Button
            text="Continuar"
            icon="arrow-right"
            iconSide="right"
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <ButtonPriceTag>$7,290.00</ButtonPriceTag>
          </Button>
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
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.sectionRow}>
        <View style={styles.section}>
          <Text variant="sectionTitle" style={styles.sectionTitle}>
            Tertiary
          </Text>
          <View style={styles.columns}>
            <View style={styles.column}>
              <Text variant="sectionSubTitle" style={styles.sectionSubTitle}>
                Default
              </Text>
              <View style={styles.components}>
                <View style={styles.component}>
                  <Button text="Default" type="tertiary" />
                </View>
              </View>
            </View>
            <View style={styles.column}>
              <View style={styles.components}>
                <View style={styles.component}>
                  <Text
                    variant="sectionSubTitle"
                    style={styles.sectionSubTitle}
                  >
                    Plain
                  </Text>
                  <Button text="Plain" type="tertiary" status="plain" />
                </View>
              </View>
            </View>

            <View style={styles.column}>
              <View style={styles.components}>
                <View style={styles.component}>
                  <Text
                    variant="sectionSubTitle"
                    style={styles.sectionSubTitle}
                  >
                    Destructive
                  </Text>
                  <Button
                    text="Destructive"
                    type="tertiary"
                    status="destructive"
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.section}>
          <Text variant="sectionTitle" style={styles.sectionTitle}>
            Custom
          </Text>
          <View style={styles.columns}>
            <View style={styles.column}>
              <Text variant="sectionSubTitle" style={styles.sectionSubTitle}>
                No Padding
              </Text>
              <View style={styles.components}>
                <View style={styles.component}>
                  <Button style={{ paddingHorizontal: 0, height: "auto" }}>
                    <Text>No Padding Horizontal and Height Auto</Text>
                  </Button>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ButtonsTemplate;
