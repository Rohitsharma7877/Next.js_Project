import React, { useEffect, useState } from 'react'
import socketIo from "socket.io-client";
import styles from "../styles/chat.module.css"
import Message from "./message";
import ReactScrollToBottom from "react-scroll-to-bottom";
import { Button, Input ,Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,useDisclosure, Box, Modal,
  } from '@chakra-ui/react';

let socket;

const ENDPOINT = "http://localhost:4000/";

const Chat = ({user}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
   
    const btnRef = React.useRef()

    const [id, setid] = useState("");
    const [messages, setMessages] = useState([])

    const send = () => {
        const message = document.getElementById('chatInput').value;
        socket.emit('message', { message, id,user });
        document.getElementById('chatInput').value = "";
    }

    console.log(messages);
    useEffect(() => {
        socket = socketIo(ENDPOINT, { transports: ['websocket'] });

        socket.on('connection', () => {
           
        })
        console.log(socket);
        socket.emit('joined', { user })

        socket.on('welcome', (data) => {
            setMessages([...messages, data]);
            console.log(data.user, data.message);
        })

        socket.on('userJoined', (data) => {
            setMessages([...messages, data]);
            console.log(data.user, data.message);
        })

        socket.on('leave', (data) => {
            setMessages([...messages, data]);
            console.log(data.user, data.message)
        })

        return () => {
            socket.emit('userDisconnect');
            socket.off();
        }
    }, [])

    useEffect(() => {
        socket.on('sendMessage', (data) => {
            
            setMessages([...messages, data]);
            console.log(data.user, data.message, data.id);
        })
        return () => {
            socket.off();
        }
    }, [messages])



    return (
        <Box   >

            <Button  size="lg"  ref={btnRef} colorScheme='orange' onClick={onOpen}>
       Lets Chat
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
        size="lg"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton  />
          <DrawerHeader fontWeight="bold" bgColor="messenger.100" fontSize="2xl" >Dev Forum</DrawerHeader>

          <DrawerBody>
        

          
                <ReactScrollToBottom className={styles.chatBox}>
                    {messages.map((item, i) => <Message user={item.user === user ? '' : item.user} message={item.message} classs={item.user === user ? 'right' : 'left'} />)}
                </ReactScrollToBottom>
                <div className={styles.inputBox}>
                    <Input h="14" w="70%" onKeyPress={(event) => event.key === 'Enter' ? send() : null} type="text" id="chatInput" />
                    <Button h="14"  ml="10px" size="lg" onClick={send} colorScheme="messenger" className={styles.sendBtn}>Send</Button>
              
            </div>

          </DrawerBody>

          
        </DrawerContent>
      </Drawer>


        </Box>
          )
}
export default Chat
