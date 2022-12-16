import { createStackNavigator } from '@react-navigation/stack';
import { getHeaderTitle } from '@react-navigation/elements';

import Profile from './Profile';
import EditProfile from './EditProfile';
import Header from '../../../Header/Header'

const ProfileStack = createStackNavigator();

function ProfileNavigation() {
  return (
    <ProfileStack.Navigator initialRouteName="Profile">
      <ProfileStack.Screen name="Profile" component={Profile} key='2' options={{ header: ({ navigation, route, options }) => {
        const title = getHeaderTitle(options, route.name);
        return <Header title={title} navigation={navigation} style={options.headerStyle} />;
      }}}/>
      <ProfileStack.Screen name="Edit Profile" component={EditProfile} key='3' options={{ header: ({ navigation, route, options }) => {
        const title = getHeaderTitle(options, route.name);
        return <Header title={title} navigation={navigation} style={options.headerStyle} />;
      }}}/>
    </ProfileStack.Navigator>
  );
}

export default ProfileNavigation