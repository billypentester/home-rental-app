import { MaterialIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { getHeaderTitle } from '@react-navigation/elements';
import { StatusBar } from 'react-native';

import Find from './../components/Find/Find';
import Home from './../components/Home/Home';
import Chat from './../components/Chat/Chat';
import Setting from './../components/Setting/Setting';

import Header from './../Header/Header';

const Tab = createBottomTabNavigator();

function BottomNavigation() {
  return (

    <NavigationContainer>

        <StatusBar backgroundColor="#00ADB5" />    

        <Tab.Navigator initialRouteName="Home" screenOptions={{ 
            tabBarActiveTintColor: '#00ADB5', 
            tabBarHideOnKeyboard: true,
            tabBarStyle: { backgroundColor:"#EEEEEE", paddingTop:10, height:60 },
            tabBarLabelStyle: { paddingVertical: 5},
            tabBarIcon:{ color:"#eeee" }, 
            header: ({ navigation, route, options }) => {
                const title = getHeaderTitle(options, route.name);
                return <Header title={title} />;
        }}}>

            <Tab.Screen name="Find" component={Find} options={{ tabBarLabel: 'Find', tabBarIcon: ({ color, size }) => (
                <MaterialIcons name="search" color={color} size={size} />)
            }}/>

            <Tab.Screen name="Home" component={Home} options={{ tabBarLabel: 'Home', tabBarIcon: ({ color, size }) => (
                <MaterialIcons name="house" color={color} size={size} />)
            }}/>

            <Tab.Screen name="Chat" component={Chat} options={{ tabBarLabel: 'Chat', tabBarIcon: ({ color, size }) => (
                <MaterialIcons name="message" color={color} size={size} />)
            }}/>

            <Tab.Screen name="Setting" component={Setting} options={{ tabBarLabel: 'Setting', tabBarIcon: ({ color, size }) => (
                <MaterialIcons name="settings" color={color} size={size} />)
            }}/>

        </Tab.Navigator>

    </NavigationContainer>

  )
}

export default BottomNavigation