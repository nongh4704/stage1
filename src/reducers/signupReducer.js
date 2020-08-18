const users = (state = {}, action) => {
    switch(action.type){
        case "isLoading" : 
            return {isLoading: true};
        case "success": 
            return {
                isLoading: false
            };
        case "failed": 
            return {
                isLoadign: false,
                errors: action.errors
            };
        default:
            return state;
    }
}

export default users;