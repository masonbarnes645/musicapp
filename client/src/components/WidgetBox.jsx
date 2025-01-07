import { useDraggable } from "@dnd-kit/core"
import { Box } from "@mui/material"

function WidgetBox({ guts, id }) {
    const {setNodeRef} = useDraggable({ id })


    return (
        <button ref={setNodeRef}>
            <Box>
                {guts}
            </Box>
        </button>
    )
}

export default WidgetBox