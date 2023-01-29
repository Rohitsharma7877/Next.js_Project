import { Box, Button, Menu, MenuButton, MenuDivider, MenuItemOption, MenuList, MenuOptionGroup, Text } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import Link from "next/link"
import  Styles from "../styles/Navbar.module.css"
import Askdoubt from './askdoubt'
import logo from "../public/assets/logo2.jpeg"
const Navbar = () => {
  
  return (
    <Box  bgColor="white" className={Styles.container} >
    <div className={Styles.item}>
    <div className={Styles.callButton}>
    
      <Link href="/">
      <Image src={logo} />
      </Link>
    </div>
    <div className={Styles.texts}>
   

    </div>
    

    </div>
    <div className={Styles.item}>
      <ul className={Styles.list}>
      <li style={{marginLeft:""}}>
      <Menu closeOnSelect={false}>
        <Link href="">
  <MenuButton as={Button} colorScheme='white' color='black' >
    Courses
  </MenuButton></Link>
  <MenuList minWidth='240px'>
    <MenuOptionGroup colorScheme='blue' defaultValue='asc' title='Order' type='radio'>
      <MenuItemOption bgColor="skyblue" value='asc'><Link href="https://www.youtube.com/watch?v=vP3TRAsjZss">Front-End</Link></MenuItemOption>
      <MenuItemOption bgColor="skyblue" value='desc'><Link href="https://www.youtube.com/watch?v=vP3TRAsjZss">Back-End</Link></MenuItemOption>
      <MenuItemOption  bgColor="skyblue" value='email'><Link href="https://www.youtube.com/watch?v=RBSGKlAvoiM">Data Structures</Link></MenuItemOption>
      <MenuItemOption bgColor="skyblue" value='phone'><Link href="https://www.youtube.com/watch?v=0IAPZzGSbME&list=PLDN4rrl48XKpZkf03iYFl-O29szjTrs_O">Algorithums</Link></MenuItemOption>
      <MenuItemOption bgColor="skyblue" value='country'><Link href="https://www.youtube.com/watch?v=W2Z7fbCLSTw">Data-Bases</Link></MenuItemOption>
    </MenuOptionGroup>
  
    
  </MenuList>
</Menu>
      </li>
      
      <li style={{marginLeft:"40px"}}>
      <Menu closeOnSelect={false}>
  <MenuButton as={Button} colorScheme='white' color='black' >
    Live Lectures
  </MenuButton>
  <MenuList minWidth='240px'>
    <MenuOptionGroup colorScheme='blue' defaultValue='asc' title='Order' type='radio'>
      <MenuItemOption Color="skyblue" value='asc'><Link href="https://www.youtube.com/watch?v=SHqWC9LmgZY">HTML</Link></MenuItemOption>
      <MenuItemOption bgColor="skyblue" value='desc'><Link href="https://www.youtube.com/watch?v=0gAganArl-g">CSS</Link></MenuItemOption>
      <MenuItemOption  bgColor="skyblue" value='email'><Link href="https://www.youtube.com/watch?v=K3DR2YJChfg">JavaScripts</Link></MenuItemOption>
      <MenuItemOption bgColor="skyblue" value='phone'><Link href="https://www.youtube.com/watch?v=EEo10bgsh0k">React</Link></MenuItemOption>
      <MenuItemOption bgColor="skyblue" value='country'><Link href="">NEM</Link></MenuItemOption>
    </MenuOptionGroup>
  
    
  </MenuList>
</Menu>
      </li>
      {/* <li style={{marginLeft:"40px"}}>
      <Menu closeOnSelect={false}>
  <MenuButton as={Button} colorScheme='blue'>
    Technologies
  </MenuButton>
  <MenuList minWidth='240px'>
    <MenuOptionGroup colorScheme='blue' defaultValue='asc'  type='radio'>
      <MenuItemOption bgColor="skyblue" value='asc'><Link href="https://www.youtube.com/watch?v=oV74Najm6Nc">Artificial Intelligence</Link></MenuItemOption>
      <MenuItemOption bgColor="skyblue" value='desc'><Link href="https://www.youtube.com/watch?v=htjRUL3neMg">Robotics</Link></MenuItemOption>
      <MenuItemOption  bgColor="skyblue" value='email'><Link href="https://www.youtube.com/watch?v=gyMwXuJrbJQ">Web-3.0</Link></MenuItemOption>
      
      <MenuItemOption bgColor="skyblue" value='country'><Link href="https://www.youtube.com/watch?v=gyMwXuJrbJQ">Block-</Link></MenuItemOption>
      <MenuItemOption bgColor="skyblue" value='country'><Link href="https://www.youtube.com/watch?v=RQzuQb0dfBM">Solidity</Link></MenuItemOption>

    </MenuOptionGroup>
  
    
  </MenuList>
</Menu>
      </li> */}
    
    </ul>
    </div>
    <div className={Styles.item}>
    <div className={Styles.cart}>
    
    </div>
    <Link href="">
    <Askdoubt/>
    </Link>
    </div>
    </Box>


  )
}

export default Navbar
