import reactdata from "../database/react.data"
import Dataui from "../Components/dataui"
import { Box, Heading } from "@chakra-ui/react"
const reactjs=()=>{
    return(

<Box pt="150px" bg="wheat" display="flex">

<Dataui data={reactdata}/>


</Box>
    )
}
export default reactjs