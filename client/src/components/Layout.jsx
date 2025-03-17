import { Box, Grid2 } from "@mui/material";


function Layout({ dropGrid }) {

    console.log(dropGrid)
    return(
        <Grid2 container spacing={.5} sx={{width:'80%', overflow:'hidden'}} >
            {dropGrid}
        </Grid2>
)
}

export default Layout

// on dragend: replace dropzone with widget