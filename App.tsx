import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './app/screen/Home';
import NoteScreen from './app/screen/Notes';

// type RootStackNavigatorParamsList = {
//     Home: undefined;
//     About: undefined;
//   };

//const Stack = createStackNavigator<RootStackNavigatorParamsList>();

// export default function App() {
//   return (
//       <NavigationContainer>
//           <Stack.Navigator>
//               <Stack.Screen
//                   name="Home"
//                   component={HomeScreen}
//                   options={{title:"HomeScreen"}}
//               />
//               <Stack.Screen
//                   name="About"
//                   component={AboutScreen}
//               />
//           </Stack.Navigator>
//       </NavigationContainer>
//   );

// const Drawer = createDrawerNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator initialRouteName="Home">
//         <Drawer.Screen name="Home" component={HomeScreen} />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// }



// const Tab = createBottomTabNavigator();
// export default function App() {
//   return (
//     <NavigationContainer>
//     <Tab.Navigator>
//       <Tab.Screen name="Home" component={HomeScreen} />
//     </Tab.Navigator>
//   </NavigationContainer>
//   );
// }


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator >
        <Tab.Screen name="HomeStack" component={HomeScreen} />
        <Tab.Screen name="NoteStack" component={NoteScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}