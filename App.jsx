import './gesture-handler';
import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Home from './src/screen/Home';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Profile from './src/screen/Profile';
import LikeScreen from './src/screen/LikeScreen';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: '#A5C0FF',
        tabBarStyle:{
          backgroundColor: '#091227',
          height: 60,
          paddingTop: 5
        },
        tabBarLabelStyle: {
          fontSize: 13,
          fontFamily: 'Gilroy-Medium'
        },
        tabBarItemStyle: {
          paddingBottom: 5, // Thêm padding bottom cho item của tab
        },
      }}
    >
      <Tab.Screen name='Home' component={Home} 
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Icon name='home' color={color} size={size}/>
          )
        }}
      />
      <Tab.Screen name='Search' component={Home} 
        options={{
          headerShown: false,
          tabBarLabel: 'Search',
          tabBarIcon: ({color, size}) => (
            <Icon name='search' color={color} size={size}/>
          )
        }}
      />
      <Tab.Screen name='Library' component={Home} 
        options={{
          headerShown: false,
          tabBarLabel: 'Library',
          tabBarIcon: ({color, size}) => (
            <Icon name='book-open' color={color} size={size}/>
          )
        }}
      />
      <Tab.Screen name='Premium' component={Home} 
        options={{
          headerShown: false,
          tabBarLabel: 'Premium',
          tabBarIcon: ({color, size}) => (
            <Icon name='spotify' color={color} size={size}/>
          )
        }}
      />
    </Tab.Navigator>
  );
}
const CustomDrawerIcon = ({source}) => (
  <View 
    className="flex-row  items-center border-b pb-md w-full border-gray-800 px-0"
  >
    <Image source={{uri:'https://th.bing.com/th?id=OSK.HEROFftoxzRHeHVMtLo6SR5PHxweZ9rI_-E22b0qmIhsudw&w=312&h=200&c=15&rs=2&o=6&pid=SANGAM'}} 
    className="w-[40px] h-[40px] rounded-full"  />
    <View className="ml-md">
      <Text className="text-textPrimary font-gilroy-bold text-custom-16">Quỳnh Thơ</Text>
      <Text className="text-textSecondary font-gilroy-light">Xem hồ sơ</Text>
    </View>
  </View>
  
  
  
);

const App = () => {
  return (
    <GestureHandlerRootView style={{flex:1}}>
      <NavigationContainer>
        <Drawer.Navigator
          screenOptions={{
            drawerStyle: {
              backgroundColor: '#161622', // Màu nền của Drawer
              width: 340,
            },
            drawerLabelStyle: {
              fontSize: 18,
              fontFamily: 'Gilroy-Medium',
              color: "#EAF0FF",
            },
            drawerContentContainerStyle: {
            
            },
          }}
        >
          <Drawer.Screen name="Tabs" component={TabNavigator} options={{ headerShown: false, drawerItemStyle: { display: 'none' } }} />
          <Drawer.Screen name="Profile" component={Profile} 
          options={{
            headerShown: false,
            drawerIcon: () => (
              <CustomDrawerIcon />
              
            ),
            drawerLabel: '',
          }}
          
          />
          <Drawer.Screen name="SreenLike" component={LikeScreen} 
          options={{
            headerShown: false,
            drawerIcon: ({color, size}) => (
              <View className="flex-row items-center">
                <SimpleLineIcons name="energy" color="white" size={28}/>
                <Text className="text-textPrimary font-gilroy-regular text-custom-16 ml-sm">Nội dung mới</Text>
              </View>
              
              
            ),
            drawerLabel: '',
          }}
          
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  )
}

export default App

const styles = StyleSheet.create({})
