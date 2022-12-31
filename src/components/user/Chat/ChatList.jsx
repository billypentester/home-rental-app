import React, {useState, useEffect} from 'react'
import { NativeBaseProvider, Text, Box,  Heading, FlatList, Avatar, Center, Image } from 'native-base'
import { TouchableOpacity } from 'react-native-gesture-handler';
import {useFocusEffect} from '@react-navigation/native';
import { collection, addDoc, orderBy, query, onSnapshot, where } from 'firebase/firestore';
import { auth, database } from '../../../Firebase/autentication';
import message from './../../../images/messages.png'

function ChatList({navigation}) {

  const [messages, setMessages] = useState([]);

  useFocusEffect(
  React.useCallback(() => {

    setMessages([])

    const chatCollection = collection(database, 'chats'); 
    const UserCollection = collection(database, 'users');

    const chats = query(chatCollection, orderBy('createdAt', 'desc'));
    
    const unsubscribe = onSnapshot(chats, querySnapshot => {
      if(querySnapshot.docs.length === 0)
        setMessages([])
      querySnapshot.docs.map(doc => {
        let { _id, createdAt, text, recipient, sender } = doc.data();
        if(auth.currentUser.uid === sender.uid || auth.currentUser.uid === recipient.uid)
        {
          if(auth.currentUser.uid === sender.uid){
            let user = query(UserCollection, where('uid', '==', recipient.uid));
            onSnapshot(user, querySnapshot => {
              querySnapshot.docs.map(doc => {
                let receiver = doc.data();
                let data = {
                  _id,
                  createdAt: createdAt.toDate().toLocaleDateString('en-US'),
                  text,
                  recipient,
                  sender, 
                  user : receiver
                }
                setMessages(messages => [...messages, data])
              })
            })
          }
          if(auth.currentUser.uid === recipient.uid){
            let user = query(UserCollection, where('uid', '==', sender.uid));
            onSnapshot(user, querySnapshot => {
              querySnapshot.docs.map(doc => {
                let receiver = doc.data();
                let data = {
                  _id,
                  createdAt: createdAt.toDate().toLocaleDateString('en-US'),
                  text,
                  recipient,
                  sender,
                  user : receiver
                }
                setMessages(messages => [...messages, data]) 
              })
            })
          }
        }
      })  
    });

    return () => unsubscribe();

  }, [])
  )

  return (
    <NativeBaseProvider> 
      <Box mx={'3'} my={'2'}>
        {
          messages.length > 0 ?   
          (
            <FlatList showsVerticalScrollIndicator={false} data={messages} renderItem={({item}) =>
            <TouchableOpacity onPress={() => navigation.navigate('Chat', {item})}>
              <Box bg="white" p={3} my={1} rounded={'md'} shadow={'1'}>
                <Box flexDirection="row" alignContent={'center'}>
                  <Box flexDirection="row" alignContent={'center'} flex={1}>
                    <Avatar size="md" source={{uri: item.recipient.avatar}} />
                    <Box flexDirection="column" justifyContent={'center'} mx={'3'}>
                      <Heading size="sm">{item.user.displayName}</Heading>
                      <Text fontSize="xs" color="gray.500">{item.text}</Text>
                    </Box>
                  </Box>
                  <Box>
                    <Text fontSize="xs" color="gray.500">{item.createdAt}</Text>
                  </Box>
                </Box>
              </Box>
            </TouchableOpacity>
              }
              keyExtractor={item => item.uid}
            />
          ) : 
          (
            <Box bg="white" alignItems={'center'} height={'100%'} justifyContent={'center'} rounded={'lg'}>
              <Image source={message} my={'1'} alt="No messages" size={'2xl'} />
              <Text fontSize={"2xl"} fontWeight={'bold'} color="gray.500">No messages</Text>
            </Box>
          )
        }
      </Box>
    </NativeBaseProvider>
  )
}

export default ChatList