import { Box, Grid2 } from "@mui/material";
import DropZone from "./DropZone";


function Layout() {
    const dropGrid = Array(18).fill(null).map((_, index) => <DropZone key={index} id={index}/>)
    console.log(dropGrid)
    return(
        <Grid2 container spacing={.5} sx={{width:'80%'}} >
            {dropGrid}
        </Grid2>
)
}

export default Layout
