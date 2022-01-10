import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  Image,
  TouchableHighlight,
  AsyncStorage,
} from 'react-native';
import {Myclass} from '../src/classfiles/Classfiles';
import {Modalcomponent} from '../src/component/Modalcomponent';
import {customstyles} from '../src/style/defaultstyle';

const storeIntoAsyncStore = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    // Error saving data
  }
};

const getAsyncStore = async (key, stateMethod) => {
  try {
    stateMethod(await AsyncStorage.getItem(key));
  } catch (error) {
    // Error saving data
  }
};

const App = () => {
  const myclassObject = new Myclass();
  const [userName, setUserName] = useState('');
  const [openmodel, openModel] = useState(false);
  myclassObject.useName = 'Gourab Singha';
  useEffect(() => {
    setUserName('New Message Come Here');
  }, []);

  return (
    <View style={customstyles.class1}>
      <Text
        style={{
          marginTop: 46,
        }}>
        {userName}
      </Text>
      <Image
        style={customstyles.class2}
        source={require('../assets/logo_images.png')}
      />
      <TouchableHighlight
        style={customstyles.class3}
        onPress={() => {
          setUserName(myclassObject.returnMargeResult());
        }}>
        <Text>Click Here Change Label</Text>
      </TouchableHighlight>

      <TouchableHighlight
        style={customstyles.class3}
        onPress={() => {
          openModel(!openmodel);
        }}>
        <View>
          <Text>Open the Model</Text>
        </View>
      </TouchableHighlight>

      <View
        style={{
          flex: 1,
          flexDirection: 'row',
        }}>
        <TouchableHighlight
          style={customstyles.button_box}
          onPress={() => {
            storeIntoAsyncStore(
              'user_name',
              'Async Storage Value set as Gourab Singha',
            );
          }}>
          <Text>Store Into AsyncStorage</Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={customstyles.button_box}
          onPress={() => {
            getAsyncStore('user_name', setUserName);
          }}>
          <Text>Get From AsyncStorage</Text>
        </TouchableHighlight>
      </View>

      <Modalcomponent shpwmodal={openmodel} hideShow={openModel} />
    </View>
  );
};

export default App;
