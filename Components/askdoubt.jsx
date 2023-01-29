
import { Button, Input ,Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,useDisclosure, Box, Modal,
  } from '@chakra-ui/react';
import Link from 'next/link';
  import React, { use, useState } from 'react';
  import Chat from './chat';
  

  const Askdoubt = () => {
    const [username,setusername]=useState("")
    const [user,setuser]=useState("")
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [isActive,setActive]=useState(false)
   
    const btnRef = React.useRef()



    const userEntertheForum=()=>{
        if(!username)return
        setuser(username)
        onClose()
        setActive(true)
    }


    if(user)return <Chat user={user}/>

    return (
        <Box   >
           


            <Button  size="lg" ref={btnRef} color='black'  onClick={onOpen}> Quiz</Button>
       
      
      {/* <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
        size="lg"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton  />
          <DrawerHeader fontWeight="bold" bgColor="gray" fontSize="1xl" >
          Asked your doubts
          </DrawerHeader>

          <DrawerBody>
            <Input mt="30" h="60" fontSize="4xl" onChange={(e)=>{setusername(e.target.value)}}/>
            <Button mt="5"onClick={userEntertheForum} colorScheme="facebook">Enter to the Forum</Button>
          </DrawerBody>

          
        </DrawerContent> */}
      {/* </Drawer> */}


        </Box>
          )
}

export default Askdoubt