import { createStackNavigator } from '@react-navigation/stack';
import { getHeaderTitle } from '@react-navigation/elements';

import Chat from './Chat'
import ChatList from './ChatList'
import Header from '../../../Header/Header'

const ChatStack = createStackNavigator();

function ChatNavigation() {
  return (
    <ChatStack.Navigator>
      <ChatStack.Screen name="Messages" component={ChatList} key='2' options={{ header: ({ navigation, route, options }) => {
        const title = getHeaderTitle(options, route.name);
        return <Header title={title} navigation={navigation} style={options.headerStyle} />;
      }}}/>
      <ChatStack.Screen name="Chat" component={Chat} key='3' options={{ header: ({ navigation, route, options }) => {
        const title = getHeaderTitle(options, route.name);
        return <Header title={title} navigation={navigation} style={options.headerStyle} />;
      }}}/>
    </ChatStack.Navigator>
  );
}

export default ChatNavigation