import { MaterialIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { getHeaderTitle } from '@react-navigation/elements';
import { StatusBar, View } from 'react-native';


import Explore from './../components/user/Explore/Explore';
import Favourites from './../components/user/Favourites/Favourites';
import Chat from './../components/user/Chat/Chat';
import Profile from './../components/user/Profile/Profile';

import Header from './../Header/Header';

const Tab = createBottomTabNavigator();

function BottomNavigation() {
  return (

    <>
        <StatusBar backgroundColor="#1E293B" />
        <Tab.Navigator initialRouteName="Explore" screenOptions={{ 
            
            tabBarActiveTintColor: '#e5e5e5', 
            tabBarHideOnKeyboard: true,
            tabBarStyle: { backgroundColor:"#1E293B", paddingTop:10, height:70, borderRadius: 20, marginHorizontal: 20, marginBottom: 10, position: 'absolute' },
            tabBarLabelStyle: { paddingVertical: 10},
            tabBarIcon:{ color:"#eeee" }, 
            header: ({ navigation, route, options }) => {
                const title = getHeaderTitle(options, route.name);
                return <Header title={title} />;
        }}}> 

            <Tab.Screen name="Explore" component={Explore} options={{ tabBarLabel: 'Explore', tabBarIcon: ({ color, size }) => (
                <MaterialIcons name="explore" color={color} size={size} />)
            }}/>

            <Tab.Screen name="Favourites" component={Favourites} options={{ tabBarLabel: 'Favourites', tabBarIcon: ({ color, size }) => (
                <MaterialIcons name="favorite" color={color} size={size} />)
            }}/>

            <Tab.Screen name="Chat" component={Chat} options={{ tabBarLabel: 'Chat', tabBarIcon: ({ color, size }) => (
                <MaterialIcons name="forum" color={color} size={size} />)
            }}/>

            <Tab.Screen name="Profile" component={Profile} options={{ tabBarLabel: 'Profile', tabBarIcon: ({ color, size }) => (
                <MaterialIcons name="person" color={color} size={size} />)
            }}/>

        </Tab.Navigator>
    </>

  )
}

export default BottomNavigation