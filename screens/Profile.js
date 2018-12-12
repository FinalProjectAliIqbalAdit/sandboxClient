import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
    profileWrapper: {
        flex: 2,
        flexDirection : 'row',
      justifyContent: 'space-around',
      alignItems: 'flex-start',
      backgroundColor: '#FFFCFF',
    },
    box : {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
        width : '48%',
        padding : 10
    }

});

export default class Profile extends Component {
  render() {
    return (
      <View style={styles.profileWrapper}>
        <View style={styles.box}>
            <Text> Aku </Text>
        </View>
        <View style={styles.box}>
            <Text> Bisa </Text>
        </View>
      </View>
    );
  }
}

