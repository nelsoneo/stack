export default (state = null, action) => {
    switch (action.type) {
        case 'select_library':
            return action.playload;
        default:
            return state;
    }
    return null;
};