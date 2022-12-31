import React, {useState, useEffect, useCallback} from 'react';
import { View, Text} from 'react-native'
import { NativeBaseProvider} from 'native-base'
import { GiftedChat, Bubble, Send, InputToolbar  } from 'react-native-gifted-chat';
import { collection, addDoc, orderBy, query, onSnapshot, doc, setDoc } from 'firebase/firestore';
import { auth, database } from '../../../Firebase/autentication';
import { MaterialIcons } from '@expo/vector-icons';
import { useFocusEffect } from '@react-navigation/native';

function renderSend(props) {
  return (
    <Send {...props}>
      <View style={{marginRight: 20, marginBottom: 8}}>
        <MaterialIcons name="send" size={24} color="black" />
      </View>
    </Send>
  );
}

function Chat({route, navigation}) {

  const {item} = route.params;


  const [messages, setMessages] = useState([]);

  useFocusEffect(
  React.useCallback(() => {

    setMessages([])

    const ChatsCollection = collection(database, 'chats');
    const UserCollection = collection(database, 'users');
    const chats = query(ChatsCollection, orderBy('createdAt', 'desc'));

    const unsubscribe = onSnapshot(chats, querySnapshot => {   
      querySnapshot.docs.map(doc => {
        let { recipient, sender, text, createdAt, _id } = doc.data();
        if((sender.uid === item.sender.uid)){
          console.log('sender')
          let data = {
            _id,
            createdAt: createdAt.toDate().toLocaleDateString('en-US'),
            text,
            user: {
              _id: sender.uid,
              name: sender.displayName,
              avatar: sender.avatar
            }
          }
          setMessages(messages => [...messages, data])
        }
        else if((recipient.uid === item.recipient.uid))
        {
          console.log('recipient')
          let data = {
            _id,
            createdAt: createdAt.toDate().toLocaleDateString('en-US'),
            text,
            user: {
              _id: sender.uid,
              name: sender.displayName,
              avatar: sender.avatar
            }
          }
          setMessages(messages => [...messages, data])
        }
        else{
          console.log('no match')
        }
      })
    });

    return () => unsubscribe();

  }, [route.params])
  )


  const onSend = useCallback(async (messages) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages));
    const { _id, createdAt, text } = messages[0];   
    const chatCollection = collection(database, 'chats'); 
    await addDoc(chatCollection, {
      _id,
      createdAt,
      text,
      sender:{
        uid: auth.currentUser.uid,
        avatar: 'https://placeimg.com/140/140/any',
      },
      recipient:{
        uid: item.uid,
        avatar: 'https://placeimg.com/140/140/any',
      }
    });
  }, []);

  return (
    <NativeBaseProvider>
    <GiftedChat
      messages={messages}
      user={{
        _id: auth.currentUser.uid,
        name: auth.currentUser.displayName,
        avatar: 'https://placeimg.com/140/140/any',
      }}
      showAvatarForEveryMessage={true}
      showUserAvatar={true}
      renderSend={renderSend}
      alwaysShowSend={true}
      scrollToBottom={true} 
      onSend={messages => onSend(messages)}
    />
    </NativeBaseProvider>
  )
}

export default Chat