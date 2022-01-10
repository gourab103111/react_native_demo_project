import {Text, View, TouchableHighlight, Modal} from 'react-native';
import React from 'react';
export const Modalcomponent = props => {
  return (
    <Modal visible={props.shpwmodal}>
      <TouchableHighlight
        style={{
          margin: 20,
        }}
        onPress={() => {
          props.hideShow(!props.shpwmodal);
        }}>
        <View>
          <Text>Close Modal</Text>
        </View>
      </TouchableHighlight>

      <Text
        style={{
          margin: 20,
        }}>
        Modal Box appear
      </Text>
    </Modal>
  );
};
