import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import ListingScreen from '../screens/ListingScreen';
import ListingDetailsScreen from '../screens/ListingDetailsScreen';

const Stack = createStackNavigator();

const FeedNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{
            presentation: 'card',
        }}>
            <Stack.Screen name='Listings' component={ListingScreen} options={{
                headerShown: false
            }} />
            <Stack.Screen name='ListingDetails'
                component={ListingDetailsScreen}
            />
        </Stack.Navigator>
    )
}

export default FeedNavigator;