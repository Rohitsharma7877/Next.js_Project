import mongotopics from "../database/mongo.data"
import Dataui from "../Components/dataui"
import { Box, Heading } from "@chakra-ui/react"
const Mongo=()=>{
    return(

<Box pt="150px" bg="wheat" display="flex">

<Dataui data={mongotopics}/>


</Box>
    )
}
export default Mongo