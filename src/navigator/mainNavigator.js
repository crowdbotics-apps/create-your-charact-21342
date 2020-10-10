import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings137349Navigator from '../features/Settings137349/navigator';
import UserProfile137342Navigator from '../features/UserProfile137342/navigator';
import Settings137341Navigator from '../features/Settings137341/navigator';
import Settings137339Navigator from '../features/Settings137339/navigator';
import SignIn2137337Navigator from '../features/SignIn2137337/navigator';
import Settings137321Navigator from '../features/Settings137321/navigator';
import Settings137304Navigator from '../features/Settings137304/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings137349: { screen: Settings137349Navigator },
UserProfile137342: { screen: UserProfile137342Navigator },
Settings137341: { screen: Settings137341Navigator },
Settings137339: { screen: Settings137339Navigator },
SignIn2137337: { screen: SignIn2137337Navigator },
Settings137321: { screen: Settings137321Navigator },
Settings137304: { screen: Settings137304Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
