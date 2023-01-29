import htmltopics from "../database/html.data"
import Dataui from "../Components/dataui"
import { Box, Heading } from "@chakra-ui/react"
const Html=()=>{
    return(

<Box pt="150px" bg="wheat" display="flex">

<Dataui data={htmltopics}/>


</Box>
    )
}
export default Html