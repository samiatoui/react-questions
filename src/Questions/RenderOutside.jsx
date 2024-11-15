import { createPortal } from "react-dom";

export function RenderOutside(){
    return(
        <div>
            <h1>this is inside</h1>
            {createPortal(
                <h1>this is outside</h1>,
                document.getElementById('modal')
            )}
        </div>
    )
}