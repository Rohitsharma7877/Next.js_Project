import {  Stack,Grid,GridItem, Box, Heading,Text, Divider} from '@chakra-ui/react'

const Dataui=({data})=>{
    return (
        <div >
        
    {data.map((obj)=>(
    
      <Box padding="20">
      <Stack spacing={20}>
      <Heading size="2xl" fontFamily="cursive" fontWeight="extrabold" color="purple" >{obj.heading}</Heading>
      <Text color="blue.700" fontSize="3xl">{obj.content}</Text>
      <pre style={{backgroundColor:"black",color:"white",padding:"30px",fontSize:"25px"}} ><code width="90" colorScheme="red" size="2xl"  >{obj.code}</code></pre>
   {obj.video.length>10 &&  <Box width="full" display="flex" alignItems="center" justifyContent="center">
      
      <iframe width="50%" height="400px"  src={obj.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </Box>}
     
      
      </Stack>
    </Box>
    ))}
        </div>
      )
}
export default Dataui