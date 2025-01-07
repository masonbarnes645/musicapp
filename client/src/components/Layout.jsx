import { Box, Grid2 } from "@mui/material";
import DropZone from "./DropZone";


function Layout() {

    return(
        <Grid2 container spacing={.5} sx={{width:'80%'}} >
            {Array(18).fill(null).map((_, index) => <DropZone key={index} id={index}/>)}
        </Grid2>
)
}

export default Layout
