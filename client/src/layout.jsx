import DropZone from "./components/DropZone";


function Layout() {

    return(
        <>
        {Array(16).fill(null).map((_, index) => <DropZone key={index} />)}
        </>
    )
}

export default Layout
// map 16 (?) droppable boxes