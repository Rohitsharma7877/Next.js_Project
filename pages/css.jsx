import csstopics from "../database/css.data"
import Dataui from "../Components/dataui"
import { Box, Heading } from "@chakra-ui/react"
const Css=()=>{
    return(

<Box pt="150px" bg="wheat" display="flex">

<Dataui data={csstopics}/>


</Box>
    )
}
export default Css