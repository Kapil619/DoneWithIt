import React, { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import ListItem from '../components/lists/ListItem';
import Screen from '../components/Screen';
import ListItemSeperator from '../components/lists/ListItemSeperator';
import ListItemDeleteAction from '../components/lists/ListItemDeleteAction';

const initialMessages = [
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
    const [messages, setMessages] = useState(initialMessages);
    const [refreshing, setrefreshing] = useState(false);

    const handleDelete = message => {
        //delete the message from messages
        setMessages(messages.filter(m => m.id !== message.id))

    }





    return (
        <Screen>

            <FlatList data={messages} keyExtractor={message => message.id.toString()
            }
                renderItem={({ item }) => <ListItem onPress={() => console.log('clicked', item)}
                    renderRightActions={() => <ListItemDeleteAction
                        onPress={() => handleDelete(item)}
                    />}
                    title={item.title}
                    subtitle={item.description}
                    image={item.image} />
                }
                ItemSeparatorComponent={ListItemSeperator}
                refreshing={refreshing}
                onRefresh={() => {
                    setMessages([
                        {
                            id: 2,
                            title: 'T2',
                            description: 'D2',
                            image: require('../assets/kapil.jpeg')
                        },
                    ])

                }}
            />
        </Screen>
    );
}

const styles = StyleSheet.create({

})

export default MessagesScreen;