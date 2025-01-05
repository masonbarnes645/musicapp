import { useDroppable } from "@dnd-kit/core"

function DropZone(){
    const { setNodeRef, isOver } = useDroppable({ id });

    return(
        <div ref={setNodeRef}>

        </div>
    )
}

export default DropZone