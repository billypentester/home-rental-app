import React, {useCallback, useState} from 'react'
import { NativeBaseProvider, Center, Box, Avatar, Heading} from 'native-base'
import data from '../../../data/homes'
import ShowProperties from "./ShowProperties";


function Home({navigation}) {

  const [like,setLike] = useState(true) 

  return (
    <NativeBaseProvider>
      <Box flex={1} p={2}>
        <ShowProperties Data={data} LikeCheck={true}/>
      </Box>
    </NativeBaseProvider>
  )
}

export default Home