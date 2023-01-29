import nodetopic from "../database/node.data"
import Dataui from "../Components/dataui"
import { Box, Heading } from "@chakra-ui/react"
const Node=()=>{
    return(

<Box pt="150px" bg="wheat" display="flex">

<Dataui data={nodetopic}/>


</Box>
    )
}
export default  Node