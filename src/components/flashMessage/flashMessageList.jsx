import React from "react";
import FlashMessage from "./FlashMessage";
import {connect} from "react-redux";
import { bindActionCreators } from "redux";
import {delFlashMessage} from "../../actions/flashMessage";


const FlashMessageList = (props) => {
    return(
        <div className = "container">
            {
                props.messages && props.messages.map(item => {
                    return <FlashMessage data = {item} delFlashMessage = {props.delFlashMessage} key = {item.id}/>
                })
            }
        </div>
    );
}

const mapStateToProps = (state) =>{
    return {
        messages: state.flashMessage
    }
}

const mapDispathToProps = (dispath) => {
    return bindActionCreators({delFlashMessage}, dispath);
}

export default connect(mapStateToProps, mapDispathToProps)(FlashMessageList);