import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ListingScreen from '../screens/ListingScreen';
import ListingEditScreen from '../screens/ListingEditScreen';
import AccountScreen from '../screens/AccountScreen';
import FeedNavigator from './FeedNavigator';
import AccountNavigator from './AccountNavigator';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import NewListingButton from './NewListingButton';
import routes from './routes';


const Tab = createBottomTabNavigator();

const AppNavigator = () => (

    <Tab.Navigator>
        <Tab.Screen name='Feed' component={FeedNavigator} options={{
            tabBarIcon: ({ color, size }) => <MaterialCommunityIcons color={color} size={size} name='home' />,
            headerShown: false
        }} />
        <Tab.Screen name='ListingEdit' component={ListingEditScreen} options={({ navigation }) => ({
            tabBarButton: () => <NewListingButton onPress={() => navigation.navigate(routes.LISTING_EDIT)} />,
            tabBarIcon: ({ color, size }) => <MaterialCommunityIcons color={color} size={size} name='plus-circle' />
        })} />
        <Tab.Screen name='Account' component={AccountNavigator} options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => <MaterialCommunityIcons color={color} size={size} name='account' />
        }} />
    </Tab.Navigator>
)

export default AppNavigator;