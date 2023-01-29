import javaScripttopics from "../database/javascript.data"
import Dataui from "../Components/dataui"
import { Box, Heading } from "@chakra-ui/react"
const javascript=()=>{
    return(

<Box pt="150px" bgColor="cyan.50" display="flex">

<Dataui data={javaScripttopics}/>


</Box>
    )
}
export default javascript