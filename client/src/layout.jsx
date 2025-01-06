import { Box } from "@mui/material";
import DropZone from "./components/DropZone";


function Layout() {

    return(
        <Box sx={{display:'flex', width:'100vw', height:'100vh'}}>
            {Array(16).fill(null).map((_, index) => <DropZone key={index} />)}
        </Box>
    )
}

export default Layout
// map 16 (?) droppable boxes