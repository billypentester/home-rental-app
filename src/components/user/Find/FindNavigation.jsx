import { createStackNavigator } from '@react-navigation/stack';
import { getHeaderTitle } from '@react-navigation/elements';

import Explore from './Explore'
import Filter from './Filter'
import AddProperty from './AddProperty'
import Location from './Location'
import Header from '../../../Header/Header'

const FindStack = createStackNavigator();

function FindNavigation() {
  return (
    <FindStack.Navigator>
      <FindStack.Screen name="Explore" component={Explore} key='2' options={{ header: ({ navigation, route, options }) => {
        const title = getHeaderTitle(options, route.name);
        return <Header title={title} navigation={navigation} style={options.headerStyle} />;
      }}}/>
      <FindStack.Screen name="Filter" component={Filter} key='3' options={{ header: ({ navigation, route, options }) => {
        const title = getHeaderTitle(options, route.name);
        return <Header title={title} navigation={navigation} style={options.headerStyle} />;
      }}}/>
      <FindStack.Screen name="AddProperty" component={AddProperty} key='3' options={{ header: ({ navigation, route, options }) => {
        const title = getHeaderTitle(options, route.name);
        return <Header title={title} navigation={navigation} style={options.headerStyle} />;
      }}}/>
      <FindStack.Screen name="Location" component={Location} key='3' options={{ header: ({ navigation, route, options }) => {
        const title = getHeaderTitle(options, route.name);
        return <Header title={title} navigation={navigation} style={options.headerStyle} />;
      }}}/>
    </FindStack.Navigator>
  );
}

export default FindNavigation