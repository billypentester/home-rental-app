import { createStackNavigator } from '@react-navigation/stack';
import { getHeaderTitle } from '@react-navigation/elements';

import Home from './Home'
import Details from './Details'
import Header from '../../../Header/Header'

const ChatStack = createStackNavigator();

function FavNavigation() {
  return (
    <ChatStack.Navigator>
      <ChatStack.Screen name="Home" component={Home} key='2' options={{ header: ({ navigation, route, options }) => {
        const title = getHeaderTitle(options, route.name);
        return <Header title={title} navigation={navigation} style={options.headerStyle} />;
      }}}/>
      <ChatStack.Screen name="Details" component={Details} key='3' options={{ header: ({ navigation, route, options }) => {
        const title = getHeaderTitle(options, route.name);
        return <Header title={title} navigation={navigation} style={options.headerStyle} />;
      }}}/>
    </ChatStack.Navigator>
  );
}

export default FavNavigation