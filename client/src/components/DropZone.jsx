import { useDroppable } from "@dnd-kit/core"
import Grid from '@mui/material/Grid2';


function DropZone({ id }) {
    const { setNodeRef, isOver } = useDroppable({ id });

    return (

        <Grid size={{ xl: 4}} >
            <div ref={setNodeRef} style={{width:'100%', height:'100px', backgroundColor: isOver ? 'blue' : 'red'}}> 
            </div>
        </Grid >

    )
}

export default DropZone