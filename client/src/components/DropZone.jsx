import { useDroppable } from "@dnd-kit/core"
import { Grid2 } from "@mui/material";

function DropZone({ id }) {
    const { setNodeRef, isOver } = useDroppable({ id });

    return (
        <Grid2 size={{ xl: 3}} >
            <Item>
                <div ref={setNodeRef} style={{ width: '25%', height: '300px' }}>
                </div >
            </Item>

        </Grid2 >

    )
}

export default DropZone