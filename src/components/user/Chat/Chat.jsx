import React, {useState, useEffect, useLayoutEffect, useCallback} from 'react';
import { View, Text, TouchableOpacity} from 'react-native'
import { NativeBaseProvider, Center, Box, Input, Button} from 'native-base'
import { GiftedChat } from 'react-native-gifted-chat';
import { collection, addDoc, orderBy, query, onSnapshot, where } from 'firebase/firestore';
import { signOut } from 'firebase/auth';
import { auth, database } from '../../../Firebase/autentication';

function Chat({navigation}) {

  const [messages, setMessages] = useState([]);

  useEffect(() => {

    const collectionRef = collection(database, 'chats');
    const q = query(collectionRef, where('sendto', '==', auth?.currentUser?.email), orderBy('createdAt', 'desc'));

    console.log(q)

    const unsubscribe = onSnapshot(q, querySnapshot => {
      setMessages(
        querySnapshot.docs.map(doc => ({
          _id: doc.data()._id,
          createdAt: doc.data().createdAt.toDate(),
          text: doc.data().text,
          user: doc.data().user,
          sendto: doc.data().sendto
        }))
      );
    });

    return () => unsubscribe();

  }, []);


  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages)
    );
    const { _id, createdAt, text, user } = messages[0];    
    addDoc(collection(database, 'chats'), {
      _id,
      createdAt,
      text,
      user,
      sendto: 'wow@gmail.com'
    });
  }, []);

  return (
    <NativeBaseProvider>
    <GiftedChat
      messages={messages}
      renderBubble={props => {
        console.log(props.currentMessage)
        return (
          <View>
            <Text>{props.currentMessage.text}</Text>
          </View>
        )
      }}
      showAvatarForEveryMessage={true}
      showUserAvatar={true}
      onSend={messages => onSend(messages)}
      alwaysShowSend={true}
      user={{
        _id: auth?.currentUser?.email,
        avatar: 'https://i.pravatar.cc/300'
      }}
    />
    </NativeBaseProvider>
  )
}

export default Chat