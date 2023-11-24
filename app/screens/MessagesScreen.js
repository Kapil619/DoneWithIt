import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import ListItem from '../components/ListItem';
import Screen from '../components/Screen';
import ListItemSeperator from '../components/ListItemSeperator';

const messages = [
    {
        id: 1,
        title: 'T1',
        description: 'D1',
        image: require('../assets/kapil.jpeg')
    },
    {
        id: 2,
        title: 'T2',
        description: 'D2',
        image: require('../assets/kapil.jpeg')
    },

]

function MessagesScreen(props) {
    return (
        <Screen>

            <FlatList data={messages} keyExtractor={message => message.id.toString()
            }
                renderItem={({ item }) => <ListItem title={item.title} subtitle={item.description} image={item.image} />
                }
                ItemSeparatorComponent={ListItemSeperator}
            />
        </Screen>
    );
}

const styles = StyleSheet.create({

})

export default MessagesScreen;