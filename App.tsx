import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './app/screen/Home';
import NoteScreen from './app/screen/Notes';
import ChangeLanScreen from './app/screen/ChangeLan';
import Icon from 'react-native-vector-icons/Ionicons';

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
    <NavigationContainer >
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName="";

            if (route.name === 'HomeStack') {
              iconName = focused
                ? 'home'
                : 'home-outline';
            } else if (route.name === 'NoteStack') {
              iconName = focused ? 'camera' : 'camera-outline';
            }
            else if (route.name === 'LanguageStack') {
              iconName = focused ? 'settings' : 'settings-outline';
            }

            // You can return any component that you like here!
            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#274472',
          tabBarInactiveTintColor: '#5885af',
        })}
      >
         <Tab.Screen name="HomeStack" component={HomeScreen} />
        <Tab.Screen name="NoteStack" component={NoteScreen} />
        <Tab.Screen name="LanguageStack" component={ChangeLanScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}