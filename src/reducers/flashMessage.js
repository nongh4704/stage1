import shortid from "shortid";

const { ADD_FLASH_MESSAGE, DEL_FLASH_MESSAGE } = require("../constant");

const flashMessage = (state = [], action) => {
    switch(action.type){
        case ADD_FLASH_MESSAGE:
            return [{...action.message, id: shortid.generate()}, ...state];
        case DEL_FLASH_MESSAGE:
            let index = state.findIndex(item => item.id === action.id);
            return [
                ...state.slice(0,index),
                ...state.slice(index+1)
            ]
        default: 
            return state;
    }
}

export default flashMessage;