import {
  createAppContainer,
  createSwitchNavigator,
  createBottomTabNavigator,
} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

import Dashboard from './pages/Dashboard';

export default (isSigned = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: createSwitchNavigator({
          SignIn,
          SignUp,
        }),
        App: createSwitchNavigator({
          Dashboard,
        }),
      },
      {
        initialRouteName: isSigned ? 'App' : 'Sign',
      }
      // {
      //   headerLayoutPreset: 'center',
      //   headerBackTitleVisible: false,
      //   defaultNavigationOptions: {
      //     headerStyle: {
      //       backgroundColor: '#fd7a0a',
      //     },
      //     headerTintColor: '#FFF',
      //   },
      // }
    )
  );
