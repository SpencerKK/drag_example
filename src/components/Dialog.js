import React, { useState } from "react";
import "./Dialog.css";

function Dialog() {
    const [diffX, setDiffX] = useState(0);
    const [diffY, setDiffY] = useState(0);
    const [dragging, setDragging] = useState(false);
    const [styles, setStyles] = useState({})

    function _dragStart(e) {
        setDiffX(e.screenX - e.currentTarget.getBoundingClientRect().left);
        setDiffY(e.screenY - e.currentTarget.getBoundingClientRect().top);
        setDragging(true);
    }

    function _dragging(e) {
        if (dragging) {
            let left = e.screenX - diffX;
            let top = e.screenY - diffY;
    
            setStyles({
                left: left,
                top: top
            })
        }
    }

    function _dragEnd() {
        setDragging(false);
    }

    return (
        <div className="Dialog" style={styles} onMouseDown={_dragStart} onMouseMove={(e) => _dragging(e)} onMouseUp={_dragEnd}>
            <div className="DialogTitle">My Dialog</div>
            <div className="Contents">
                Contents of the dialog:
                    - one
                    - two
                    -three
            </div>
            <div className="closeButton">
                Close
            </div>
        </div>
    )
}

export default Dialog;