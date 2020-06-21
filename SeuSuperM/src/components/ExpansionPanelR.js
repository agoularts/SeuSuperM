import React, { useState} from 'react';
import {  ScrollView,  StyleSheet,  Text,  View,  TouchableOpacity} from 'react-native';
import Constants from 'expo-constants';
import Collapsible from 'react-native-collapsible';

export default function ExpansionPanelR ({title, text}) {
  const [collapsed, setCollapsed] = useState(true);

  function toggleExpanded() {
    setCollapsed(!collapsed);
  };

    return (
      <View style={styles.container}>
        <ScrollView >
          <TouchableOpacity onPress={() => toggleExpanded()}>
            <View style={styles.header}>
              <Text style={styles.headerText}>{title}</Text>
            </View>
          </TouchableOpacity>
          <Collapsible collapsed={collapsed} align="center">
            <View style={styles.content}>
              <Text>{text}</Text>
            </View>
          </Collapsible>
        </ScrollView>
      </View>
    );
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    width:200,
    alignSelf:'center',
    marginBottom:10
  },
 
  header: {
    backgroundColor: '#F5FCFF',
    padding: 10,
  },

  headerText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
  },

  content: {
    padding: 10,
    backgroundColor: '#fff',
  },
});