import * as React from 'react';
// import {useNavigation} from '@react-navigation/native';
// import {StackNavigationProp} from '@react-navigation/stack';
// import {RootStackNavigatorParamsList} from './RootStackNavigatorParamsList';
import { View, Text,  Button, TouchableOpacity } from 'react-native';

import { useTranslation } from 'react-i18next';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const HomeScreen = () => {
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
    <View style={{backgroundColor:'#fafafa', flex:1}}>
      <Text style={{color: 'red', alignContent:'center', textAlign:'center', margin: 50}}>
        {t('title')}</Text>
      <View style={{marginTop: 30}}>
        <Button title="Go to Details"  />
      </View>
      <View style={{marginTop: 30}}>
        <TouchableOpacity style={{borderColor:'black' , backgroundColor:'black', borderRadius:15, borderWidth:1, padding:10,justifyContent:'center', alignSelf:'center'}} onPress={changeLanguage}>
          <Text style={{color:'white', fontSize:16}}>Change Language</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;