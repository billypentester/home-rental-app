import { MaterialIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getHeaderTitle } from '@react-navigation/elements';
import { StatusBar } from 'react-native';

import Find from './../components/user/Find/Find';
import Home from './../components/user/Home/Home';
import Chat from './../components/user/Chat/Chat';
import ProfileNavigation from './../components/user/Profile/ProfileNavigation';

import Header from './../Header/Header';

const Tab = createBottomTabNavigator();

function BottomNavigation({navigation}) {

  return (

    <>
        <StatusBar backgroundColor="#1E293B" />
        <Tab.Navigator initialRouteName="Home" screenOptions={{ 
            tabBarActiveTintColor: '#e5e5e5', 
            tabBarHideOnKeyboard: true,
            tabBarStyle: { backgroundColor:"#1E293B", paddingTop:10, height:70, borderRadius: 10, marginHorizontal: 20, marginBottom: 20, position: 'absolute' },
            tabBarLabelStyle: { paddingVertical: 10},
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

            <Tab.Screen name="Setting" component={ProfileNavigation} options={{ tabBarLabel: 'Setting', headerShown: false, tabBarIcon: ({ color, size }) => (
                <MaterialIcons name="settings" color={color} size={size} />)
            }}/>

        </Tab.Navigator>
    </>

  )
}

export default BottomNavigation