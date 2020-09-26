import React from "react";
import { View } from "react-native";
import styles from "./others.jss";
import { Text, Button, Tag } from "atoms";
import { SectionHeader } from "molecules";

const Others: React.FC = () => {
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
    </View>
  );
};

export default Others;
