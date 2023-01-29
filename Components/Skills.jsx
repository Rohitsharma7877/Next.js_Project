import React from "react";


import { Box, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import Link from "next/link";

const Allskills = [
  {
    src:"/assets/html.png",
    linkto: "/html",
    name:"HTML"
  },
  // {
  //   src:"/assets/css.png",
  //   linkto: "/css",
  //   name:"CSS"
  // },
  {
    src: "/assets/javascript.png",
    linkto: "/javascript",
    name:"JavaScript"
  },
  {
    src: "/assets/react.png",
    linkto: "/react",
    name:"React"
  },
  {
    src: "/assets/node.png",
    linkto: "/node",name:"Node JS"
  }, {
    src: "/assets/mongodb.png",
    linkto: "/mongodb",
    name:"Mongo DB"
  },
  {
      src:"/assets/css.png",
      linkto: "/css",
      name:"Css"
    }
];

const PizzaList = () => {
  return (
    <Box bgColor='red.100'
     py="10">
      <Box w="100%" justifyContent="center" display="flex" mt={100}></Box>
      
      <Grid m="auto" templateColumns={{sm:'repeat(2, 1fr)',lg:"repeat(3, 1fr)",md:"repeat(3, 1fr)"}} gap={6}>
        {Allskills.map((ele) => (
        <GridItem >
            <Box justifyContent="center" display="flex" key={ele.linkto}>
           <Link href={ele.linkto}>
           <Box textAlign="center" bg='red.100' padding="2" borderRadius="10" style={{boxShadow: `rgba(0, 0, 0, 0.35) 0px 5px 15px`}}> <Image m="5"  h={40} src={ele.src} alt={ele.linkto} />
           <Text pb={2} size="xl" fontWeight="bold">{ele.name}</Text>
           
           </Box>
           </Link>
          </Box>
        </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default PizzaList;
