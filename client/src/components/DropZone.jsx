import { useDroppable } from "@dnd-kit/core"

function DropZone({ id }){
    const { setNodeRef, isOver } = useDroppable({ id });

    return(
        <div ref={setNodeRef} style={{width:'25%', height:'300px'}}>

        </div>
    )
}

export default DropZone