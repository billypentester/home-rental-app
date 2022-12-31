import React, {useCallback, useState} from 'react'
import { useFocusEffect } from '@react-navigation/native'
import { View, Text, FlatList, TouchableOpacity} from 'react-native'
import { NativeBaseProvider, Center, Box, Avatar, Heading} from 'native-base'
import { collection, addDoc, orderBy, query, onSnapshot, where } from 'firebase/firestore';
import { auth, database } from '../../../Firebase/autentication';

function Home({navigation}) {

  const [users, setUsers] = useState([]);

  useFocusEffect(
    React.useCallback(() => {

    const UserCollection = collection(database, 'users');
    const q = query(UserCollection);

    const unsubscribe = onSnapshot(q, querySnapshot => {  
      querySnapshot.docs.length === 0 ? 
      setUsers({}) :
      setUsers(
        querySnapshot.docs.map(doc => {
          let { uid, displayName, email, photoURL } = doc.data();
          return {
            uid,
            displayName,
            email,
            photoURL
          }
        })
      )
    });

    return () => unsubscribe();

  }, [])
  );

  return (
    <NativeBaseProvider>
      <Center flex={1} my={5}>
        <FlatList showsVerticalScrollIndicator={false} data={users} renderItem={({item}) =>
          <TouchableOpacity onPress={() => navigation.navigate('Chat', {item})}>
            <Box bg="white" p={3} my={2} rounded={'md'} shadow={'1'}>
              <Box flexDirection="row" alignContent={'center'}>
                <Box flexDirection="row" alignContent={'center'}>
                  <Avatar size="md" source={{uri : item.photoURL}} />
                  <Box flexDirection="column" justifyContent={'center'} mx={'3'}>
                    <Heading size="sm">{item.displayName}</Heading>
                    <Text>{item.email}</Text>
                  </Box>
                </Box>
              </Box>
            </Box>
          </TouchableOpacity>
        } keyExtractor={item => item.uid} />
      </Center>
    </NativeBaseProvider>
  )
}

export default Home