 import { Button } from "@chakra-ui/react";
import Image from "next/image";
import styles from "../styles/Footer.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.main} >
      <br/>
     
    <div style={{height:"50px",width:"100%" ,display:"flex",alignItems:"center",gap:"20px",justifyContent:"center"}}>
    <Button colorScheme='white' color='black'><Link href="https://www.w3schools.com/quiztest/default.asp">Play quiz</Link></Button>
    <Button colorScheme='white' color='black'><Link href="https://www.w3schools.com/exercises/index.php">Exercises</Link></Button>
    <Button colorScheme='white' color='black'><Link href="https://campus.w3schools.com/collections/course-catalog">Certificates</Link></Button>
    <Button colorScheme='white' color='black'><Link href="https://www.w3schools.com/pro/index.php">Upgrad</Link></Button>
  <Button colorScheme='white' color='black'><Link href="">Spaces</Link></Button>
   <Button colorScheme='white' color='black'><Link href="https://support.w3schools.com/hc/en-gb">Support</Link></Button>
    </div>
  <br/>
    {/* <div style={{height:"50px",width:"100%" ,display:"flex",alignItems:"center",margin:"auto",justifyContent:"center"}}>
      
      <div style={{height:"100%",width:"100px",marginRight:"10px",fontFamily:"cursive"}}><Link href="https://www.instagram.com/"><b>Instagram</b></Link></div>
    <div style={{height:"100%",width:"100px",marginRight:"10px",fontFamily:"cursive"}}><Link href="https://www.facebook.com/"><b>Facebook</b></Link></div>
     < div style={{height:"100%",width:"100px",marginRight:"10px",fontFamily:"cursive"}}><Link href="https://www.linkedin.com/"><b>Linkedin</b></Link></div>
    </div> */}
  
    <div style={{height:"30px",width:"100%"}}>
    <h5 style={{textAlign:"center",fontFamily:"cursive"}}><Link href="google.com">Created by eDucate 2023.</Link></h5>
    </div>
    
  
    </div>
  );
};

export default Footer;
