import * as React from 'react';
// import {useNavigation} from '@react-navigation/native';
// import {StackNavigationProp} from '@react-navigation/stack';
// import {RootStackNavigatorParamsList} from './RootStackNavigatorParamsList';
import { View, Text,  Button, TouchableOpacity,StyleSheet, } from 'react-native';

import { useTranslation } from 'react-i18next';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Dropdown from '../components/DropDown';

const ChangeLan = () => {
//   const navigation =
//     useNavigation<StackNavigationProp<RootStackNavigatorParamsList>>();

//   const onHandlePress = () => {
//     navigation.navigate("About");
 // };

 const {t, i18n} = useTranslation();
 
 const changeLanguage =() =>{

    
  if(i18n.language === 'en')
  {
    i18n.changeLanguage('fr')
  }
  else
  {
    i18n.changeLanguage('en')
  }
 }

  return (
    <View style={styles.container}>
      <Dropdown
        data={[
          { value: "en", label: "English" },
          { value: "fr", label: "France" },
        ]}
        onChange={changeLanguage}
        placeholder="Select Language"
      />
    </View>
  );
};

export default ChangeLan;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#ddd",
      alignItems: "center",
      justifyContent: "center",
      paddingHorizontal: 20,
      gap: 10,
    },
  });