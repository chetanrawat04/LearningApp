import * as React from 'react';
// import {useNavigation} from '@react-navigation/native';
// import {StackNavigationProp} from '@react-navigation/stack';
// import {RootStackNavigatorParamsList} from './RootStackNavigatorParamsList';
import { View, Text,  Button } from 'react-native';

const Notes = () => {
//   const navigation =
//     useNavigation<StackNavigationProp<RootStackNavigatorParamsList>>();

//   const onHandlePress = () => {
//     navigation.navigate("About");
 // };

  return (
    <View style={{backgroundColor:'#fafafa', flex:1}}>
      <Text style={{color: 'red', alignContent:'center', textAlign:'center', margin: 50}}>Welcome to Note Screen!</Text>
      <View style={{marginTop: 30}}>
        <Button title="Go to Details"  />
      </View>
    </View>
  );
};

export default Notes;