import { useDraggable } from "@dnd-kit/core"
import { Box } from "@mui/material"
import {CSS} from '@dnd-kit/utilities';

function WidgetBox({ guts, id }) {
    const {setNodeRef, transform, listeners, attributes} = useDraggable({ id })
    const style = {
        transform: CSS.Translate.toString(transform)
      };

    return (
        <button ref={setNodeRef} style={style} {...listeners} {...attributes}>
            <Box>
                {guts}
                <h1>test</h1>
            </Box>
        </button>
    )
}

export default WidgetBox