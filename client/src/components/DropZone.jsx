import { useDroppable } from "@dnd-kit/core"
import Grid from '@mui/material/Grid2';

function DropZone({ key }) {
    const { setNodeRef, isOver } = useDroppable({ key });

    return (
        <Grid size={{ xl: 3}} >
            <div style={{width:'100px'}}>
                <div ref={setNodeRef}>
                </div >
            </div>

        </Grid >

    )
}

export default DropZone