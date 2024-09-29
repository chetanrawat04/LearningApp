/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Home from './app/screen/Home';
import {name as appName} from './app.json';
import './app/localization/translations/i18n.config'
AppRegistry.registerComponent(appName, () => App);
