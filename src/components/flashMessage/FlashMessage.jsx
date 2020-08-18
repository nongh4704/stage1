import React from "react";
import classNames from "classnames";

const FlashMessage = (props) => {
    const {type, message, id} = props.data;
    
    const onClick = () => {
        props.delFlashMessage(id);
    }

    return(
        <div className = {classNames("alert", {"alert-success": type === "success"}, {"alert-danger": type === "failed"})}>
            <button onClick = {onClick}  className = "close">&times;</button>
            {message}
        </div>
    )
}

export default FlashMessage;